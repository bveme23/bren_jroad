interface HighlightBannerProps {
  title: string;
  items: string[];
}

export function HighlightBanner({ title, items }: HighlightBannerProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-primary px-8 py-12 text-primary-foreground shadow-japanese sm:px-12">
        <h2 className="font-heading text-2xl font-semibold md:text-3xl tracking-tight text-primary-foreground text-shadow-subtle">{title}</h2>
        <ul className="mt-8 space-y-4 text-base leading-relaxed">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <span aria-hidden="true" className="mt-1.5 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
              <span className="text-primary-foreground/95">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
