import Link from 'next/link';

interface CTASectionProps {
  title: string;
  text: string;
  cta: { text: string; link: string };
}

export function CTASection({ title, text, cta }: CTASectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-subtle bg-muted washi-texture px-8 py-12 text-center shadow-japanese sm:text-left sm:px-12">
        <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl tracking-tight text-shadow-subtle">{title}</h2>
        <p className="mt-6 text-base text-muted-foreground md:text-lg leading-relaxed">{text}</p>
          <Link
            href={cta.link}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-accent hover:shadow-japanese-hover hover:-translate-y-0.5 shadow-japanese button-press hover-shine focus-ring"
          >
            {cta.text}
          </Link>
      </div>
    </section>
  );
}
