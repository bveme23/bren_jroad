'use client';

import { FadeInSection } from '@/components/common/FadeInSection';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18nContext';

export function About() {
  const { t } = useI18n();
  return (
    <FadeInSection className="py-20 bg-white">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-6">
                {t('about.title')}
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <div className="prose prose-lg max-w-none">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                  {t('about.text1')}
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t('about.text2')}
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center h-full"
          >
            <img
              src="/世界.png"
              alt="世界"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>
    </FadeInSection>
  );
}

