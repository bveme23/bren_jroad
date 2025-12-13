'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/i18nContext';
import { Menu, X } from 'lucide-react';

const navItems = siteConfig.navigation;

/** Idiomas definidos localmente (evita error de módulo) */
type Lang = 'en' | 'fr' | 'ja' | 'pt';
const languages: Lang[] = ['en', 'fr', 'ja', 'pt'];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const { currentLang, setLang } = useI18n();

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
        ${isScrolled ? 'bg-white border-b-2 border-black shadow-sm' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png?v=2"
              alt="J-Road Logo"
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <div className={`text-xl tracking-wide ${isScrolled ? 'text-black' : 'text-white'}`}>
                J-ROAD
              </div>
              <div className={`text-[10px] tracking-widest ${isScrolled ? 'text-slate-500' : 'text-white/70'}`}>
                柔道の道
              </div>
            </div>
          </Link>

          {/* DESKTOP MENU */}
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

                {/* underline */}
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-300
                    ${pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}
                />
              </Link>
            ))}

            {/* LANGUAGE SWITCHER (estilo slider) */}
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

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded transition-colors
              ${isScrolled
                ? 'text-black hover:text-primary hover:bg-red-50'
                : 'text-white hover:bg-white/10'
              }
            `}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t-2 border-black bg-white shadow-xl"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full px-5 py-4 border-2 transition-all duration-300
                    ${pathname === item.path
                      ? 'border-primary bg-red-50 text-primary shadow-md'
                      : 'border-black hover:border-primary hover:shadow-md'
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}

              {/* MOBILE LANGUAGE */}
              <div className="pt-4 border-t-2 border-black">
                <div className="text-xs text-slate-500 mb-2">Language</div>
                <div className="grid grid-cols-4 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLang(lang)}
                      className={`py-3 border-2 transition-all
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
      </AnimatePresence>
    </motion.header>
  );
}
