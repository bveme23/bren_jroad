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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white border-b border-slate-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`flex items-center gap-3 text-xl font-bold tracking-wide transition-colors ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}
        >
          <img
            src="/logo.png?v=2"
            alt="J-Road Logo"
            className="h-8 w-auto"
          />
          <span>J-Road</span>
        </Link>
        <nav className="hidden gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-all duration-300 relative group ${
                pathname === item.path
                  ? isScrolled
                    ? 'text-primary font-semibold'
                    : 'text-white font-semibold'
                  : isScrolled
                    ? 'text-textMuted hover:text-primary'
                    : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label.includes('(今後展開予定)') ? (
                <>
                  {item.label.split('(今後展開予定)')[0]}
                  <span className="text-xs">(今後展開予定)</span>
                </>
              ) : (
                item.label
              )}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {/* Language selector as pill buttons */}
          <div className="hidden md:flex items-center gap-1 rounded-full border p-1 bg-white/50 backdrop-blur-sm">
            {(['en', 'fr', 'ja', 'pt'] as SupportedLang[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLang(lang)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  currentLang === lang
                    ? isScrolled
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-900 shadow-sm'
                    : isScrolled
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      : 'text-white/80 hover:text-white hover:bg-white/20'
                }`}
                aria-label={`Switch to ${lang.toUpperCase()}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          
          {/* CTA Button */}
          <Link
            href="/contact"
            className={`hidden md:inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              isScrolled
                ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md'
                : 'bg-white text-slate-900 hover:bg-slate-50 shadow-sm hover:shadow-md'
            }`}
          >
            お問い合わせ
          </Link>
          
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-medium transition-colors md:hidden ${
              isScrolled
                ? 'border-borderSubtle text-textMain hover:bg-bgLight'
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="メニューを開閉"
          >
          <span className="sr-only">メニュー</span>
          <svg
            className="h-5 w-5"
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
            className={`border-t md:hidden ${
              isScrolled ? 'bg-white border-borderSubtle' : 'bg-bgDark/95 backdrop-blur-md border-white/20'
            }`}
          >
            <nav className="mx-auto flex max-w-7xl flex-col space-y-2 px-4 py-4 sm:px-6 lg:px-8" aria-label="モバイルメニュー">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={closeMenu}
                  className={`text-base font-medium transition-colors py-2 ${
                    pathname === item.path
                      ? isScrolled
                        ? 'text-primary font-semibold'
                        : 'text-white font-semibold'
                      : isScrolled
                        ? 'text-textMuted hover:text-primary'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label.includes('(今後展開予定)') ? (
                    <>
                      {item.label.split('(今後展開予定)')[0]}
                      <span className="text-sm">(今後展開予定)</span>
                    </>
                  ) : (
                    item.label
                  )}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
