'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/i18nContext';
import type { SupportedLang } from '@/i18n';

const navItems = siteConfig.navigation;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { currentLang, setLang } = useI18n();

  useEffect(() => {
    // ホームページ以外では初期状態で背景を表示
    if (!isHomePage) {
      setIsScrolled(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20 || !isHomePage);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white border-b-2 border-black z-50 shadow-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 h-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-medium tracking-wide text-foreground hover:opacity-80 transition-opacity group"
        >
          <img
            src="/logo.png?v=2"
            alt="J-Road Logo"
            className="h-14 w-auto transition-transform group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <div className="text-xl tracking-wide">J-ROAD</div>
            <div className="text-[10px] text-muted-foreground tracking-widest">柔道の道</div>
          </div>
        </Link>
        <nav className="hidden gap-2 lg:flex items-center" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const isComingSoon = item.label.includes('(今後展開予定)');
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`px-5 py-3 transition-all duration-300 relative group ${
                  isActive
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                <span className="relative z-10">
                  {isComingSoon ? (
                    <>
                      {item.label.split('(今後展開予定)')[0]}
                      <span className="absolute top-1 right-1 text-[9px] text-white bg-primary px-1.5 py-0.5 rounded">
                        NEW
                      </span>
                    </>
                  ) : (
                    item.label
                  )}
                </span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
                )}
                {!isActive && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></div>
                )}
              </Link>
            );
          })}
        <div className="flex items-center gap-3">
          {/* Language selector as horizontal slider */}
          <div className="hidden lg:flex items-center ml-6 bg-black rounded-full p-1 gap-1">
            {(['en', 'fr', 'ja', 'pt'] as SupportedLang[]).map((lang) => {
              const langMap: Record<string, string> = { en: 'ENG', fr: 'FR', ja: 'JP', pt: 'PT' };
              const langLabel = langMap[lang] || lang.toUpperCase();
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLang(lang)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 text-sm tracking-wider relative ${
                    currentLang === lang
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                  aria-label={`Switch to ${langLabel}`}
                >
                  {currentLang === lang && (
                    <div className="absolute inset-0 border-2 border-primary rounded-full animate-pulse-slow"></div>
                  )}
                  <span className="relative z-10">{langLabel}</span>
                </button>
              );
            })}
          </div>
          
          <button
            type="button"
            className="inline-flex items-center justify-center p-3 text-foreground hover:text-primary hover:bg-primarySoft transition-colors rounded lg:hidden"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="メニューを開閉"
          >
            <span className="sr-only">メニュー</span>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t-2 border-black bg-white shadow-xl"
          >
            <nav className="mx-auto flex max-w-7xl flex-col space-y-3 px-4 py-6" aria-label="モバイルメニュー">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                const isComingSoon = item.label.includes('(今後展開予定)');
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={closeMenu}
                    className={`block w-full text-left px-5 py-4 border-2 transition-all duration-300 ${
                      isActive
                        ? 'border-primary bg-primarySoft text-primary shadow-md'
                        : 'border-border hover:border-primary hover:shadow-md'
                    }`}
                  >
                    <span>
                      {isComingSoon ? (
                        <>
                          {item.label.split('(今後展開予定)')[0]}
                          <span className="text-[10px] text-white bg-primary px-2 py-1 rounded ml-2">
                            NEW
                          </span>
                        </>
                      ) : (
                        item.label
                      )}
                    </span>
                  </Link>
                );
              })}
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t-2 border-border">
                <div className="text-xs text-muted-foreground mb-2 px-2">Language</div>
                <div className="grid grid-cols-4 gap-2">
                  {(['en', 'fr', 'ja', 'pt'] as SupportedLang[]).map((lang) => {
                    const langMap: Record<string, string> = { en: 'ENG', fr: 'FR', ja: 'JP', pt: 'PT' };
                    const langLabel = langMap[lang] || lang.toUpperCase();
                    return (
                      <button
                        key={lang}
                        onClick={() => {
                          setLang(lang);
                          closeMenu();
                        }}
                        className={`py-3 border-2 transition-all ${
                          currentLang === lang
                            ? 'border-primary bg-primary text-white shadow-md'
                            : 'border-black hover:border-primary'
                        }`}
                      >
                        {langLabel}
                      </button>
                    );
                  })}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
