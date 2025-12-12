import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/PageHeader';
import { TextWithImage } from '@/components/sections/TextWithImage';
import { BulletList } from '@/components/sections/BulletList';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: '国際大会の企画運営｜J-Roadの将来ビジョン',
  description:
    '国際大会の企画運営を通じて、日本の柔道を世界にアピールし、柔道界の国際的な発展に貢献します。J-Roadが目指す国際交流の形をご紹介します。',
};

export default function InternationalCompetitionsPage() {
  return (
    <div className="space-y-16 pb-16">
      <PageHeader
        title="国際大会の企画運営"
        subtitle="日本の柔道を世界にアピールする国際大会の企画運営"
      />

      <TextWithImage
        layout="image-left"
        title="柔道の国際化と文化交流の促進"
        text={
          'J-Roadは、国際大会の企画運営を通じて、日本の柔道を世界に広くアピールし、柔道界の国際的な発展に貢献することを目指しています。\n\n日本で開催される国際大会は、単なる競技の場ではなく、世界中の柔道家が集まり、日本の柔道文化を直接体験できる貴重な機会となります。大会を通じて、日本の柔道の技術、精神、礼法を世界に伝えることができます。\n\nまた、国際大会の開催は、日本の柔道界に経済的な効果をもたらし、柔道関連産業の活性化にもつながります。私たちは、持続可能で意義のある国際大会の企画運営を通じて、柔道界全体の発展に寄与したいと考えています。'
        }
        image="https://images.unsplash.com/photo-1542818454-dc05decf9db3?auto=format&fit=crop&w=1200&q=80"
      />

      <BulletList
        title="国際大会企画運営の特徴"
        items={[
          '日本の柔道文化を世界に伝える国際大会の企画',
          '世界中の柔道家が参加できる交流の場の提供',
          '柔道界の国際的な認知向上と経済効果の創出',
          '持続可能な大会運営による柔道界への貢献',
        ]}
      />

      <CTASection
        title="国際大会の企画運営について詳しく知りたい方へ"
        text="国際大会の企画運営に関するご相談、パートナーシップのご提案など、お気軽にお問い合わせください。"
        cta={{ text: 'お問い合わせフォームへ', link: '/contact' }}
      />
    </div>
  );
}

