import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/PageHeader';
import { TextWithImage } from '@/components/sections/TextWithImage';
import { BulletList } from '@/components/sections/BulletList';
import { InfoGrid } from '@/components/sections/InfoGrid';
import { CTASection } from '@/components/sections/CTASection';
import { JapaneseDivider } from '@/components/decorative/JapaneseDivider';
import { JapaneseBackground } from '@/components/decorative/JapaneseBackground';

export const metadata: Metadata = {
  title: '柔道留学斡旋支援(今後展開予定)｜中長期で日本の柔道を学ぶ',
  description:
    '数ヶ月〜数年単位で日本に滞在し、本格的に柔道を学びたい方向けのトータルサポート。道場・学校・生活環境まで、目的に合わせてアレンジします。',
};

export default function JudoStudyPage() {
  return (
    <div className="space-y-16 pb-16 relative">
      <PageHeader
        title="柔道留学斡旋支援(今後展開予定)"
        subtitle="中長期滞在で柔道と日本文化を深く学ぶ方のためのトータルサポートプログラム。"
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
            <div className="w-full lg:w-1/2 lg:order-2">
              <div className="w-full overflow-hidden rounded-2xl bg-transparent shadow-japanese transition-all duration-500 hover:shadow-japanese-hover">
                <img
                  src="/柔道留学支援_1.png"
                  alt="継続的な学びと成長を支える仕組み"
                  className="w-full h-auto object-contain mix-blend-screen"
                  style={{ filter: 'contrast(1.1) brightness(1.1)' }}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:order-1">
              <h2 className="font-heading text-2xl font-bold text-white md:text-3xl tracking-tight text-shadow-subtle">
                継続的な学びと成長を支える仕組み
              </h2>
              <div 
                className="whitespace-pre-line text-base text-white md:text-lg leading-relaxed mt-6"
                dangerouslySetInnerHTML={{
                  __html: "柔道留学斡旋支援では、留学目的・競技レベル・将来のキャリアビジョンを丁寧にヒアリングし、最適な道場・学校・生活環境を提案します。到着前の準備から滞在中のフォロー、進路相談まで、専門チームが伴走します。".replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
                }}
              />
            </div>
          </section>
        </div>
      </div>

      <JapaneseDivider />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* 左側: サポート内容の一例 */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl tracking-tight text-shadow-subtle mb-8">
              サポート内容の一例
            </h2>
            <ul className="space-y-4 text-base text-muted-foreground md:text-lg leading-relaxed">
              {[
                '道場・学校の選定と紹介、面談調整',
                '宿泊先・生活環境の手配、生活オリエンテーション',
                '在留資格・保険・翻訳などの手続きサポート',
                '渡航後の定期フォロー、緊急時のコンタクト',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 右側: 画像 */}
          <div className="flex items-center justify-center">
            <img
              src="/柔道留学支援_2.png"
              alt="柔道留学支援"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <InfoGrid
        title="こんな方におすすめ"
        items={[
          '競技力向上を目指し、日本のトップレベルの指導を受けたい選手',
          '将来的に柔道指導者として活躍するために、日本の指導哲学を学びたい方',
          '大学・専門学校進学と柔道を両立させたい学生',
        ]}
      />

      <CTASection
        title="柔道留学のご相談はこちら"
        text="ご希望の期間や目標がまだ具体的でなくても大丈夫です。専門スタッフが一緒に最適な留学プランを考えます。"
        cta={{ text: 'お問い合わせフォームへ', link: '/contact' }}
      />
    </div>
  );
}
