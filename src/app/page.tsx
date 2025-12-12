import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { WhyJRoad } from '@/components/sections/WhyJRoad';
import { Services } from '@/components/sections/Services';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <main className="pt-0">
      <Hero
        title="世界と日本を結び、\n柔道界を変える"
        subtitle="海外の柔道家・柔道ファンが、日本で『本物の柔道』と『日本文化』を安心して体験できる新しいスポーツツーリズム。"
        backgroundImage="https://images.unsplash.com/photo-1542818454-dc05decf9db3?auto=format&fit=crop&w=1600&q=80"
        ctaPrimary={{ text: 'サービスを見る', link: '/services/judo-tourism' }}
        ctaSecondary={{ text: 'まずは相談する', link: '/contact' }}
      />
      
      <WhyJRoad />
      
      <About />
      
      <Services />
      
      <CTA />
    </main>
  );
}
