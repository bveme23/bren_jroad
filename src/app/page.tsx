'use client';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { WhyJRoad } from '@/components/sections/WhyJRoad';
import { Services } from '@/components/sections/Services';
import { CTA } from '@/components/sections/CTA';
import { useI18n } from '@/i18nContext';

export default function Home() {
  const { t } = useI18n();
  
  return (
    <main className="pt-0">
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        backgroundImage="/judo_players.jpg"
        ctaPrimary={{ text: t('hero.cta.services'), link: '/services/judo-tourism' }}
        ctaSecondary={{ text: t('hero.cta.contact'), link: '/contact' }}
      />
      
      <WhyJRoad />
      
      <About />
      
      <Services />
      
      <CTA />
    </main>
  );
}
