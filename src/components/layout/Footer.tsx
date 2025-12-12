import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-white text-textMain border-t border-subtle">
      <div className="mx-auto max-w-7xl flex flex-col gap-12 px-4 py-16 text-sm sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png?v=2"
              alt="J-Road Logo"
              className="h-8 w-auto"
            />
            <p className="font-bold text-xl tracking-wide text-primary">J-Road</p>
          </div>
          <p className="text-muted leading-relaxed mb-4">
            柔道を通じて世界と日本をつなぐスポーツツーリズムプログラムを提供します。
          </p>
          <p className="text-muted">
            お問い合わせ:{' '}
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="text-primary hover:text-accent transition-colors"
            >
              {siteConfig.socials.email}
            </a>
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-end sm:gap-8" aria-label="フッターナビ">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-muted hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-subtle bg-muted py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} J-Road. All rights reserved.
      </div>
    </footer>
  );
}
