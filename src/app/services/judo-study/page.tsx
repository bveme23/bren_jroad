'use client';

import { PageHeader } from '@/components/sections/PageHeader';
import { TextWithImage } from '@/components/sections/TextWithImage';
import { BulletList } from '@/components/sections/BulletList';
import { InfoGrid } from '@/components/sections/InfoGrid';
import { CTASection } from '@/components/sections/CTASection';
import { JapaneseBackground } from '@/components/decorative/JapaneseBackground';
import { useI18n } from '@/i18nContext';

export default function JudoStudyPage() {
  const { t } = useI18n();
  return (
    <div className="pb-16 relative">
      <PageHeader
        title={t('study.title')}
        subtitle={t('study.subtitle')}
      />

      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/judo_study.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          {/* Semi-transparent black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <section className="mx-auto flex max-w-6xl flex-col items-start gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
            <div className="w-full lg:w-1/2 lg:order-1">
              <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl tracking-tight text-shadow-subtle">
                {t('study.about.title')}
              </h2>
              <div 
                className="whitespace-pre-line text-base text-white md:text-lg leading-relaxed mt-6"
              >
                {t('study.about.text')}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/judo_help.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          {/* Semi-transparent black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <section className="mx-auto flex max-w-6xl flex-col items-start gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
            <div className="w-full">
              <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl tracking-tight text-shadow-subtle mb-8">
                {t('study.services.title')}
              </h2>
              <ul className="space-y-4 text-base text-white md:text-lg leading-relaxed">
                {[
                  t('study.services.item1'),
                  t('study.services.item2'),
                  t('study.services.item3'),
                  t('study.services.item4'),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>

      <InfoGrid
        title={t('study.recommended.title')}
        items={[
          t('study.recommended.item1'),
          t('study.recommended.item2'),
          t('study.recommended.item3'),
        ]}
      />

      <CTASection
        title={t('study.cta.title')}
        text={t('study.cta.text')}
        cta={{ text: t('study.cta.button'), link: '/contact' }}
      />
    </div>
  );
}
