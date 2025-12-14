import Link from 'next/link';

interface CTAItem {
  title: string;
  text: string;
  cta: { text: string; link: string };
}

interface TwoColumnCTAProps {
  left: CTAItem;
  right: CTAItem;
}

export function TwoColumnCTA({ left, right }: TwoColumnCTAProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        {[left, right].map((item) => (
          <div key={item.title} className="flex h-full flex-col justify-between rounded-2xl border border-subtle bg-card p-10 shadow-japanese hover-lift hover-glow">
            <div>
              <h3 className="text-xl font-semibold text-primary tracking-wide">{item.title}</h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
            <Link
              href={item.cta.link}
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-accent hover:shadow-japanese-hover hover:-translate-y-0.5 shadow-japanese button-press hover-shine focus-ring"
            >
              {item.cta.text}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
