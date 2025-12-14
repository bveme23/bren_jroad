'use client';

import Link from 'next/link';
import { PageHeader } from '@/components/sections/PageHeader';
import { BulletList } from '@/components/sections/BulletList';
import { TextWithImage } from '@/components/sections/TextWithImage';
import { CTASection } from '@/components/sections/CTASection';
import { useI18n } from '@/i18nContext';

export default function MessageToAllJapanJudoFederationPage() {
  const { t } = useI18n();
  return (
    <div className="space-y-16 pb-16">
      <PageHeader
        title={t('message.title')}
        subtitle={t('message.subtitle')}
      />

      <TextWithImage
        layout="image-right"
        title={t('message.thoughts.title')}
        text={t('message.thoughts.text')}
        image="/課題と想い.png"
      />

      <BulletList
        title={t('message.challenges.title')}
        items={[
          t('message.challenges.item1'),
          t('message.challenges.item2'),
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-subtle bg-muted washi-texture px-8 py-12 text-center shadow-japanese sm:text-left sm:px-12">
          <h2 className="text-2xl font-bold text-primary md:text-3xl tracking-tight">
            {t('message.vision.title')}
          </h2>
          <ul className="mt-8 space-y-6 text-base text-muted-foreground md:text-lg leading-relaxed">
            <li>
              <Link
                href="/vision/dojo-establishment"
                className="flex items-start gap-4 group hover:text-primary transition-colors"
              >
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                <span className="group-hover:underline">
                  {t('message.vision.item1')}
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/vision/international-competitions"
                className="flex items-start gap-4 group hover:text-primary transition-colors"
              >
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                <span className="group-hover:underline">
                  {t('message.vision.item2')}
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/vision/judo-uniform-brand"
                className="flex items-start gap-4 group hover:text-primary transition-colors"
              >
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                <span className="group-hover:underline">
                  {t('message.vision.item3')}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-subtle bg-muted washi-texture px-8 py-12 text-center shadow-japanese sm:text-left sm:px-12">
          <h2 className="text-2xl font-bold text-primary md:text-3xl tracking-tight">
            {t('message.initiatives.title')}
          </h2>
          <div className="mt-6 space-y-6 text-base text-muted-foreground md:text-lg leading-relaxed">
            <p>
              {t('message.initiatives.text1')}
            </p>
            <p>
              {t('message.initiatives.text2')}
            </p>
            <p className="font-semibold text-primary">
              {t('message.initiatives.text3')}
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title={t('message.cta.title')}
        text={t('message.cta.text')}
        cta={{ text: t('message.cta.button'), link: '/contact' }}
      />
    </div>
  );
}


