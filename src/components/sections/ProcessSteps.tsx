interface ProcessStepsProps {
  title: string;
  steps: string[];
}

export function ProcessSteps({ title, steps }: ProcessStepsProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl tracking-tight text-shadow-subtle">{title}</h2>
      <ol className="mt-10 space-y-6">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const imagePath = `/STEP${stepNumber}.png`;
          return (
            <li key={index} className="flex items-center gap-6 rounded-2xl border border-subtle bg-card p-8 shadow-japanese hover-lift hover-glow">
              <div className="flex-shrink-0">
                <img
                  src={imagePath}
                  alt={`Step ${stepNumber}`}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <p className="flex-1 text-base text-muted md:text-lg leading-relaxed pt-1">{step}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
