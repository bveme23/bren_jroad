interface BulletListProps {
  title: string;
  items: string[];
}

export function BulletList({ title, items }: BulletListProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl tracking-tight text-shadow-subtle">{title}</h2>
      <ul className="mt-8 space-y-4 text-base text-muted-foreground md:text-lg leading-relaxed">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-4">
            <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
