import Link from 'next/link';

interface ServiceCard {
  title: string;
  slug: string;
  description: string;
  link: string;
}

interface ServiceCardsProps {
  services: ServiceCard[];
}

export function ServiceCards({ services }: ServiceCardsProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.slug} className="flex h-full flex-col justify-between rounded-2xl border border-subtle bg-card p-10 shadow-japanese transition hover:shadow-japanese-hover">
            <div>
              <h2 className="text-xl font-semibold text-primary tracking-wide">
                {service.title.includes('(今後展開予定)') ? (
                  <>
                    {service.title.split('(今後展開予定)')[0]}
                    <span className="text-sm">(今後展開予定)</span>
                  </>
                ) : (
                  service.title
                )}
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
            <Link href={service.link} className="mt-8 inline-flex items-center text-sm font-semibold text-accent hover:text-primary transition-colors">
              詳しく見る →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
