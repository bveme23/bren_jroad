interface InfoGridProps {
  title: string;
  items: string[];
}

export function InfoGrid({ title, items }: InfoGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl tracking-tight text-shadow-subtle">{title}</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-subtle bg-card p-8 text-base text-muted shadow-japanese leading-relaxed hover-lift hover-glow">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
