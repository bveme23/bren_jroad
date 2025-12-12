interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-muted washi-texture pt-32 pb-16 border-b border-subtle">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl tracking-tight text-shadow-subtle">
          {title.includes('(今後展開予定)') ? (
            <>
              {title.split('(今後展開予定)')[0]}
              <span className="text-base md:text-lg">(今後展開予定)</span>
            </>
          ) : (
            title
          )}
        </h1>
        {subtitle ? <p className="mt-6 max-w-3xl text-base text-muted md:text-lg leading-relaxed break-keep">{subtitle}</p> : null}
      </div>
    </section>
  );
}
