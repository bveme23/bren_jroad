import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/PageHeader';
import { TextWithImage } from '@/components/sections/TextWithImage';
import { BulletList } from '@/components/sections/BulletList';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: '柔道着ブランドの確立｜J-Roadの将来ビジョン',
  description:
    '誰でも購入できる高品質で安価な柔道着ブランドの確立。J-Roadが目指す柔道着の新しいスタンダードをご紹介します。',
};

export default function JudoUniformBrandPage() {
  return (
    <div className="space-y-16 pb-16">
      <PageHeader
        title="柔道着ブランドの確立"
        subtitle="誰でも購入できる高品質で安価な柔道着ブランドの確立"
      />

      <TextWithImage
        layout="image-right"
        title="柔道着の新しいスタンダード"
        text={
          'J-Roadは、誰でも購入できる高品質で安価な柔道着ブランドの確立を目指しています。現在、柔道着は高価格帯のものが多く、柔道を始めたい人や継続したい人にとって大きな障壁となっています。\n\n私たちは、品質を妥協することなく、より多くの人に柔道着を提供できるよう、効率的な製造プロセスと適切な価格設定を実現します。これにより、柔道への参入障壁を下げ、柔道人口の拡大に貢献することができます。\n\nまた、柔道着ブランドの確立は、柔道関連産業の活性化と雇用創出にもつながります。日本の伝統的な技術と現代的な製造プロセスを組み合わせることで、世界に誇れる柔道着ブランドを創出したいと考えています。'
        }
        image="https://images.unsplash.com/photo-1542818454-dc05decf9db3?auto=format&fit=crop&w=1200&q=80"
      />

      <BulletList
        title="柔道着ブランドの特徴"
        items={[
          '高品質でありながら、誰でも購入できる安価な価格設定',
          '柔道への参入障壁を下げ、柔道人口の拡大に貢献',
          '日本の伝統技術と現代的な製造プロセスの融合',
          '柔道関連産業の活性化と雇用創出',
        ]}
      />

      <CTASection
        title="柔道着ブランドについて詳しく知りたい方へ"
        text="柔道着ブランドに関するご相談、パートナーシップのご提案など、お気軽にお問い合わせください。"
        cta={{ text: 'お問い合わせフォームへ', link: '/contact' }}
      />
    </div>
  );
}

