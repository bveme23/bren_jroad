import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/PageHeader';
import { TextWithImage } from '@/components/sections/TextWithImage';
import { BulletList } from '@/components/sections/BulletList';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: '道場設立・雇用拡大｜J-Roadの将来ビジョン',
  description:
    '日本での道場設立を通した雇用の拡大・柔道業界への貢献。J-Roadが目指す柔道界の持続的な発展についてご紹介します。',
};

export default function DojoEstablishmentPage() {
  return (
    <div className="space-y-16 pb-16">
      <PageHeader
        title="道場設立・雇用拡大"
        subtitle="日本での道場設立を通した雇用の拡大・柔道業界への貢献"
      />

      <TextWithImage
        layout="image-right"
        title="柔道界の雇用創出と持続的な発展"
        text={
          'J-Roadは、日本国内での道場設立と外国人柔道家の採用を通じて、柔道業界に新たな雇用機会を創出し、柔道界全体の発展に貢献することを目指しています。\n\n海外から日本を訪れる柔道家が増えることで、新しい道場の設立や既存道場の拡大が促進されます。また、多様な背景を持つ外国人柔道家を採用することで、日本の柔道界に新たな視点と活力をもたらすことができます。\n\nこの取り組みは、単なる雇用創出にとどまらず、柔道の国際化と日本の柔道文化の継承・発展に大きく寄与するものと考えています。'
        }
        image="https://images.unsplash.com/photo-1542818454-dc05decf9db3?auto=format&fit=crop&w=1200&q=80"
      />

      <BulletList
        title="具体的な取り組み"
        items={[
          '日本国内での新規道場設立の支援とコーディネート',
          '外国人柔道家の採用・雇用機会の創出',
          '既存道場との連携による柔道指導者の育成',
          '柔道業界全体の雇用拡大と経済効果の創出',
        ]}
      />

      <CTASection
        title="道場設立・雇用拡大について詳しく知りたい方へ"
        text="道場設立や外国人柔道家の採用に関するご相談、パートナーシップのご提案など、お気軽にお問い合わせください。"
        cta={{ text: 'お問い合わせフォームへ', link: '/contact' }}
      />
    </div>
  );
}

