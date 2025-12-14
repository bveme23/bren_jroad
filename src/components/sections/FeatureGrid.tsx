import { JudoIcon } from '@/components/icons/JudoIcon';
import { DojoIcon } from '@/components/icons/DojoIcon';
import { BowIcon } from '@/components/icons/BowIcon';

interface Feature {
  title: string;
  description: string;
}

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  features: Feature[];
}

const renderIcon = (index: number) => {
  const icons = [
    <JudoIcon key="judo" className="text-primary" size={32} />,
    <DojoIcon key="dojo" className="text-primary" size={32} />,
    <BowIcon key="bow" className="text-primary" size={32} />,
  ];
  return icons[index % icons.length];
};

export function FeatureGrid({ title, subtitle, features }: FeatureGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl tracking-tight text-shadow-subtle">{title}</h2>
        {subtitle ? <p className="mt-6 text-base text-muted-foreground md:text-lg leading-relaxed">{subtitle}</p> : null}
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div 
            key={feature.title} 
            className="group rounded-2xl border border-subtle bg-card p-8 shadow-japanese hover-lift hover-glow relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 icon-bounce">
              {renderIcon(index)}
            </div>
            <div className="relative">
              <h3 className="text-lg font-semibold text-primary tracking-wide link-underline inline-block">{feature.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground md:text-base leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
