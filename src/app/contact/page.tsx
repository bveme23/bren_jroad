'use client';

import { PageHeader } from '@/components/sections/PageHeader';
import { siteConfig } from '@/config/site';
import { useI18n } from '@/i18nContext';

export default function ContactPage() {
  const { t } = useI18n();
  return (
    <div className="space-y-16 pb-16">
      <PageHeader
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />

      <section className="relative w-full py-20">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/judo_inquiry.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
            <div className="rounded-3xl p-8 shadow-japanese" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
              <form className="space-y-6" action={`mailto:${siteConfig.socials.email}`} method="post">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary">
                    {t('contact.form.name_label')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-lg border-2 border-black px-4 py-3 text-sm focus:border-primary focus:outline-none bg-white"
                    style={{ color: '#333333' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary">
                    {t('contact.form.email')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-lg border-2 border-black px-4 py-3 text-sm focus:border-primary focus:outline-none bg-white"
                    style={{ color: '#333333' }}
                  />
                </div>
                <div>
                  <label htmlFor="request" className="block text-sm font-medium text-primary">
                    {t('contact.form.request_label')}
                  </label>
                  <textarea
                    id="request"
                    name="request"
                    rows={6}
                    placeholder={t('contact.form.placeholder')}
                    className="mt-2 w-full rounded-lg border-2 border-black px-4 py-3 text-sm focus:border-primary focus:outline-none bg-white placeholder:text-gray-500"
                    style={{ color: '#333333' }}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-accent shadow-japanese"
                >
                  {t('contact.form.submit_button')}
                </button>
                <p className="text-xs" style={{ color: '#4a4a4a' }}>
                  {t('contact.form.error')}<a href={`mailto:${siteConfig.socials.email}`} className="text-primary underline">{siteConfig.socials.email}</a>{t('contact.form.error_email')}
                </p>
              </form>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl p-6 text-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
              <div>
                <h2 className="text-base font-semibold text-primary">{t('contact.info.title')}</h2>
                <p className="mt-2" style={{ color: '#333333' }}>
                  {siteConfig.socials.email}
                  <br />
                  {t('contact.info.hours')}
                </p>
              </div>
              <div>
                <h2 className="text-base font-semibold text-primary">{t('contact.info.languages_title')}</h2>
                <p className="mt-2" style={{ color: '#333333' }}>{t('contact.info.languages')}</p>
              </div>
              <div>
                <h2 className="text-base font-semibold text-primary">{t('contact.info.inquiries_title')}</h2>
                <ul className="mt-2 space-y-1" style={{ color: '#333333' }}>
                  <li>{t('contact.info.inquiries.item1')}</li>
                  <li>{t('contact.info.inquiries.item2')}</li>
                  <li>{t('contact.info.inquiries.item3')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
