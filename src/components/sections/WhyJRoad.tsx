'use client';

import { FadeInSection } from '@/components/common/FadeInSection';
import { motion } from 'framer-motion';
import { JudoIcon } from '@/components/icons/JudoIcon';
import { DojoIcon } from '@/components/icons/DojoIcon';
import { BowIcon } from '@/components/icons/BowIcon';
import { useI18n } from '@/i18nContext';

const getFeatures = (t: (key: string) => string) => [
  {
    title: t('why.feature1.title'),
    description: t('why.feature1.description'),
    icon: <JudoIcon className="text-primary" size={40} />,
  },
  {
    title: t('why.feature2.title'),
    description: t('why.feature2.description'),
    icon: <DojoIcon className="text-primary" size={40} />,
  },
  {
    title: t('why.feature3.title'),
    description: t('why.feature3.description'),
    icon: <BowIcon className="text-primary" size={40} />,
  },
];

export function WhyJRoad() {
  const { t } = useI18n();
  const features = getFeatures(t);
  return (
    <FadeInSection className="py-24 bg-white">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-4">
            {t('why.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('why.quote')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover rounded-3xl bg-white p-8 border border-borderSubtle shadow-lg"
            >
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-primarySoft">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}

