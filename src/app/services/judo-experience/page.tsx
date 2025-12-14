'use client';

import Link from 'next/link';
import { useI18n } from '@/i18nContext';

export default function JudoExperiencePage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-2xl border border-subtle bg-muted p-6 shadow-md lg:p-10">
          {/* Tag badges */}
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-primarySoft px-3 py-1 text-xs font-medium text-primary">
              {t('experience.badge.one_day')}
            </span>
            <span className="inline-flex items-center rounded-full bg-primarySoft px-3 py-1 text-xs font-medium text-primary">
              {t('experience.badge.beginner')}
            </span>
            <span className="inline-flex items-center rounded-full bg-primarySoft px-3 py-1 text-xs font-medium text-primary">
              {t('experience.badge.dojo')}
            </span>
          </div>

          {/* Two-column layout */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left column: Title and CTA */}
            <div>
              <h1 className="font-heading text-3xl font-bold text-primary tracking-tight sm:text-4xl lg:text-4xl">
                {t('experience.title')}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {t('experience.subtitle')}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-red transition-all duration-300 hover:bg-accent hover:shadow-red-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {t('experience.button.contact')}
                </Link>
                <Link
                  href="#schedule"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-subtle bg-white px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {t('experience.button.schedule')}
                </Link>
              </div>
            </div>

            {/* Right column: Image */}
            <div className="order-first lg:order-last">
              <div className="overflow-hidden rounded-2xl bg-muted shadow-md">
              <img
                src="/judo_exp.png"
                alt={t('experience.title')}
                className="h-auto w-full object-cover"
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary tracking-tight sm:text-3xl">
              {t('experience.intro.title')}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                {t('experience.intro.text1')}
              </p>
              <p>
                {t('experience.intro.text2')}
              </p>
            </div>
          </div>
          <div className="order-first lg:order-last">
            <div className="overflow-hidden rounded-2xl bg-bgLight shadow-md">
              <img
                src="/judo_begginers.png"
                alt={t('experience.intro.title')}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Contents as Icon Cards */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-bold text-primary tracking-tight sm:text-3xl">
            {t('experience.services.title')}
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-primary"></div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            t('experience.services.item1'),
            t('experience.services.item2'),
            t('experience.services.item3'),
            t('experience.services.item4'),
            t('experience.services.item5'),
            t('experience.services.item6'),
          ].map((item, index) => (
            <div
              key={index}
              className="group flex gap-3 rounded-2xl border border-subtle bg-card p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primarySoft text-sm font-semibold text-primary">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="text-sm leading-relaxed text-foreground">{item}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Information banner */}
        <div className="mt-6 flex gap-3 rounded-lg border border-primary/20 bg-primarySoft px-4 py-3">
          <svg
            className="h-5 w-5 shrink-0 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-sm text-foreground">
            {t('experience.services.note')}
          </p>
        </div>
      </section>

      {/* Daily Schedule as Vertical Timeline */}
      <section id="schedule" className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-bold text-primary tracking-tight sm:text-3xl">
            {t('experience.schedule.title')}
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-primary"></div>
        </div>

        <div className="relative border-l-2 border-subtle pl-6 space-y-8">
          {[
            { time: t('experience.schedule.item1.time'), activity: t('experience.schedule.item1.activity') },
            { time: t('experience.schedule.item2.time'), activity: t('experience.schedule.item2.activity') },
            { time: t('experience.schedule.item3.time'), activity: t('experience.schedule.item3.activity') },
            { time: t('experience.schedule.item4.time'), activity: t('experience.schedule.item4.activity') },
            { time: t('experience.schedule.item5.time'), activity: t('experience.schedule.item5.activity') },
            { time: t('experience.schedule.item6.time'), activity: t('experience.schedule.item6.activity') },
            { time: t('experience.schedule.item7.time'), activity: t('experience.schedule.item7.activity') },
          ].map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline marker */}
              <div className="absolute -left-[13px] mt-1 h-3 w-3 rounded-full border-2 border-primary bg-white"></div>
              
              {/* Time label */}
              <div className="mb-2">
                <span className="inline-flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                  {item.time}
                </span>
              </div>
              
              {/* Activity card */}
              <div className="rounded-2xl border border-subtle bg-card p-4 text-sm leading-relaxed shadow-md">
                {item.activity}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended For Section as Cards Grid */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-2xl bg-muted px-4 py-8 sm:px-8 sm:py-10">
          <div className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-primary tracking-tight sm:text-3xl">
              {t('experience.recommended.title')}
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-primary"></div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              t('experience.recommended.item1'),
              t('experience.recommended.item2'),
              t('experience.recommended.item3'),
              t('experience.recommended.item4'),
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-3 rounded-2xl border border-subtle bg-card p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primarySoft text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="flex-1 text-sm font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mt-12 rounded-2xl bg-primary px-6 py-8 text-center shadow-red sm:flex sm:items-center sm:justify-between sm:text-left sm:gap-4">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold text-white">
              {t('experience.cta.title')}
            </h2>
            <p className="mt-2 text-sm text-white/90">
              {t('experience.cta.text')}
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-md transition-all duration-300 hover:bg-muted hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              {t('experience.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
