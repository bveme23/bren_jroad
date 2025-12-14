'use client';

import { FadeInSection } from '@/components/common/FadeInSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useI18n } from '@/i18nContext';

const getServices = (t: (key: string) => string) => [
  {
    title: t('services.experience.title'),
    description: t('services.experience.description'),
    link: '/services/judo-experience',
    image: 'https://images.unsplash.com/photo-1542818454-dc05decf9db3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: t('services.tourism.title'),
    description: t('services.tourism.description'),
    link: '/services/judo-tourism',
    image: 'https://images.unsplash.com/photo-1542818454-dc05decf9db3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: t('services.study.title'),
    description: t('services.study.description'),
    link: '/services/judo-study',
    image: 'https://images.unsplash.com/photo-1542818454-dc05decf9db3?auto=format&fit=crop&w=800&q=80',
  },
];

export function Services() {
  const { t } = useI18n();
  const services = getServices(t);
  return (
    <FadeInSection className="py-20 bg-gradient-to-b from-white to-gray-50">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-4">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-full"
            >
              <Link href={service.link} className="block h-full">
                <div className="bg-white border-2 border-border hover:border-primary transition-all duration-300 p-8 rounded-lg group hover:shadow-xl h-full flex flex-col">
                  <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title.includes('(Coming Soon)') ? (
                      <>
                        {service.title.split('(Coming Soon)')[0]}
                        <span className="text-sm">(Coming Soon)</span>
                      </>
                    ) : service.title.includes('(今後展開予定)') ? (
                      <>
                        {service.title.split('(今後展開予定)')[0]}
                        <span className="text-sm">(今後展開予定)</span>
                      </>
                    ) : (
                      service.title
                    )}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    詳細を見る
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}

