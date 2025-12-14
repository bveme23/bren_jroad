'use client';

import { PageHeader } from '@/components/sections/PageHeader';
import { TextWithImage } from '@/components/sections/TextWithImage';
import { InfoGrid } from '@/components/sections/InfoGrid';
import { CTASection } from '@/components/sections/CTASection';
import { ScheduleTable } from '@/components/sections/ScheduleTable';
import { JudoPlanCalculator } from '@/components/sections/JudoPlanCalculator';
import { JapaneseDivider } from '@/components/decorative/JapaneseDivider';
import { JapaneseBackground } from '@/components/decorative/JapaneseBackground';
import { useI18n } from '@/i18nContext';

export default function JudoTourismPage() {
  const { t } = useI18n();
  return (
    <div className="pb-16 relative">
      <PageHeader 
        title={t('tourism.title')} 
        subtitle={t('tourism.subtitle')} 
      />

      <section className="relative w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/judo_dojo.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          {/* Semi-transparent black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* 柔道ツーリズムについて */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl tracking-tight text-shadow-subtle mb-6">
                {t('tourism.about.title')}
              </h2>
              <div className="text-base text-white md:text-lg leading-relaxed space-y-4">
                <p>
                  {t('tourism.about.text1')}<strong className="font-semibold text-primary">{t('tourism.about.text1_strong')}</strong>{t('tourism.about.text1_end')}
                </p>
                <p>
                  {t('tourism.about.text2')}
                </p>
                <p>
                  {t('tourism.about.text3')}
                </p>
              </div>
            </div>

            {/* サービスプランシミュレーター */}
            <JudoPlanCalculator />
          </div>
        </div>
      </section>

      <JapaneseDivider />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* 左側: サービス例 */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl tracking-tight text-shadow-subtle mb-8">
              {t('tourism.services.title')}
            </h2>
            <ul className="space-y-4 text-base text-muted-foreground md:text-lg leading-relaxed">
              {[
                t('tourism.services.item1'),
                t('tourism.services.item2'),
                t('tourism.services.item3'),
                t('tourism.services.item4'),
                t('tourism.services.item5'),
                t('tourism.services.item6'),
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground italic">
              {t('tourism.services.note')}
            </p>
          </div>

          {/* 右側: 1日の流れ（モデルプラン） */}
          <div>
            <ScheduleTable
              title={t('tourism.schedule.title')}
              schedules={[
                {
                  label: t('tourism.schedule.label1'),
                  schedule: [
                    { time: t('tourism.schedule.1dojo.item1.time'), activity: t('tourism.schedule.1dojo.item1.activity') },
                    { time: t('tourism.schedule.1dojo.item2.time'), activity: t('tourism.schedule.1dojo.item2.activity') },
                    { time: t('tourism.schedule.1dojo.item3.time'), activity: t('tourism.schedule.1dojo.item3.activity') },
                    { time: t('tourism.schedule.1dojo.item4.time'), activity: t('tourism.schedule.1dojo.item4.activity') },
                    { time: t('tourism.schedule.1dojo.item5.time'), activity: t('tourism.schedule.1dojo.item5.activity') },
                  ],
                },
                {
                  label: t('tourism.schedule.label2'),
                  schedule: [
                    { time: t('tourism.schedule.2dojo.item1.time'), activity: t('tourism.schedule.2dojo.item1.activity') },
                    { time: t('tourism.schedule.2dojo.item2.time'), activity: t('tourism.schedule.2dojo.item2.activity') },
                    { time: t('tourism.schedule.2dojo.item3.time'), activity: t('tourism.schedule.2dojo.item3.activity') },
                    { time: t('tourism.schedule.2dojo.item4.time'), activity: t('tourism.schedule.2dojo.item4.activity') },
                    { time: t('tourism.schedule.2dojo.item5.time'), activity: t('tourism.schedule.2dojo.item5.activity') },
                    { time: t('tourism.schedule.2dojo.item6.time'), activity: t('tourism.schedule.2dojo.item6.activity') },
                    { time: t('tourism.schedule.2dojo.item7.time'), activity: t('tourism.schedule.2dojo.item7.activity') },
                    { time: t('tourism.schedule.2dojo.item8.time'), activity: t('tourism.schedule.2dojo.item8.activity') },
                    { time: t('tourism.schedule.2dojo.item9.time'), activity: t('tourism.schedule.2dojo.item9.activity') },
                  ],
                },
                {
                  label: t('tourism.schedule.label3'),
                  schedule: [
                    { time: t('tourism.schedule.3dojo.item1.time'), activity: t('tourism.schedule.3dojo.item1.activity') },
                    { time: t('tourism.schedule.3dojo.item2.time'), activity: t('tourism.schedule.3dojo.item2.activity') },
                    { time: t('tourism.schedule.3dojo.item3.time'), activity: t('tourism.schedule.3dojo.item3.activity') },
                    { time: t('tourism.schedule.3dojo.item4.time'), activity: t('tourism.schedule.3dojo.item4.activity') },
                    { time: t('tourism.schedule.3dojo.item5.time'), activity: t('tourism.schedule.3dojo.item5.activity') },
                    { time: t('tourism.schedule.3dojo.item6.time'), activity: t('tourism.schedule.3dojo.item6.activity') },
                    { time: t('tourism.schedule.3dojo.item7.time'), activity: t('tourism.schedule.3dojo.item7.activity') },
                    { time: t('tourism.schedule.3dojo.item8.time'), activity: t('tourism.schedule.3dojo.item8.activity') },
                    { time: t('tourism.schedule.3dojo.item9.time'), activity: t('tourism.schedule.3dojo.item9.activity') },
                    { time: t('tourism.schedule.3dojo.item10.time'), activity: t('tourism.schedule.3dojo.item10.activity') },
                    { time: t('tourism.schedule.3dojo.item11.time'), activity: t('tourism.schedule.3dojo.item11.activity') },
                    { time: t('tourism.schedule.3dojo.item12.time'), activity: t('tourism.schedule.3dojo.item12.activity') },
                    { time: t('tourism.schedule.3dojo.item13.time'), activity: t('tourism.schedule.3dojo.item13.activity') },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>


      <CTASection
        title={t('tourism.cta.title')}
        text={t('tourism.cta.text')}
        cta={{ text: t('tourism.cta.button'), link: '/contact' }}
      />
    </div>
  );
}
