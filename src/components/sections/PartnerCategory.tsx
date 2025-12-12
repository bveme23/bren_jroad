interface PartnerItem {
  name: string;
  location: string;
  description: string;
}

interface PartnerCategoryProps {
  title: string;
  subtitle?: string;
  items: PartnerItem[];
}

export function PartnerCategory({ title, subtitle, items }: PartnerCategoryProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl tracking-tight text-shadow-subtle">{title}</h2>
          {subtitle ? <p className="mt-4 max-w-2xl text-base text-muted md:text-lg leading-relaxed">{subtitle}</p> : null}
        </div>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.name} className="flex h-full flex-col gap-4 rounded-2xl border border-subtle bg-card p-10 shadow-japanese hover-lift hover-glow">
            <div>
              <h3 className="text-lg font-semibold text-primary tracking-wide">{item.name}</h3>
              <p className="mt-1 text-sm font-medium text-muted">{item.location}</p>
            </div>
            <p className="text-base text-muted leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
