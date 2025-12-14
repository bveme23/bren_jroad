'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/i18nContext';
import type { SupportedLang } from '@/i18n';

const languages: SupportedLang[] = ['en', 'fr', 'ja', 'pt'];

const getNavItems = (t: (key: string) => string) => [
  { label: t('nav.home'), path: '/' },
  { label: t('nav.judo_experience'), path: '/services/judo-experience' },
  { label: t('nav.judo_tourism'), path: '/services/judo-tourism' },
  { label: t('nav.judo_study'), path: '/services/judo-study' },
  { label: t('nav.members'), path: '/members' },
  { label: t('nav.contact'), path: '/contact' },
  { label: t('nav.thoughts'), path: '/message-to-all-japan-judo-federation' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { currentLang, setLang, t } = useI18n();
  const navItems = getNavItems(t);

  useEffect(() => {
    if (!isHomePage) setIsScrolled(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20 || !isHomePage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-white border-b-2 border-black shadow-sm'
          : 'bg-transparent'}
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center justify-center group">
            <img
              src="/logo.png?v=2"
              alt="J-Road Logo"
              className="h-20 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-5 py-3 transition-all duration-300 group
                  ${pathname === item.path
                    ? 'text-primary'
                    : isScrolled
                      ? 'text-black hover:text-primary'
                      : 'text-white hover:text-white'
                  }
                `}
              >
                <span className="relative z-10">
                  {item.label.includes('(今後展開予定)') ? (
                    <>
                      {item.label.split('(今後展開予定)')[0]}
                      <span className="ml-1 text-xs">(今後展開予定)</span>
                    </>
                  ) : (
                    item.label
                  )}
                </span>

                <span
                  className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-300
                    ${pathname === item.path
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                    }
                  `}
                />
              </Link>
            ))}

            {/* Language switcher */}
            <div className="ml-6 flex items-center bg-black rounded-full p-1 gap-1">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLang(lang)}
                  className={`px-4 py-2 rounded-full text-sm tracking-wider transition-all relative
                    ${currentLang === lang
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                    }
                  `}
                >
                  {currentLang === lang && (
                    <span className="absolute inset-0 border-2 border-primary rounded-full animate-pulse" />
                  )}
                  <span className="relative z-10">{lang.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden rounded p-3 transition-colors
              ${isScrolled
                ? 'text-black hover:text-primary hover:bg-red-50'
                : 'text-white hover:bg-white/10'
              }
            `}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden border-t-2 border-black bg-white shadow-xl"
        >
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-4 border-2 transition-all duration-300 text-foreground
                  ${pathname === item.path
                    ? 'border-primary bg-primarySoft text-primary shadow-md'
                    : 'border-black hover:border-primary hover:shadow-md'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 border-t-2 border-black">
              <div className="text-xs text-muted-foreground mb-2 px-2">Language</div>
              <div className="grid grid-cols-4 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLang(lang)}
                    className={`py-3 border-2 transition-all text-foreground
                      ${currentLang === lang
                        ? 'border-primary bg-primary text-white shadow-md'
                        : 'border-black hover:border-primary'
                      }
                    `}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
