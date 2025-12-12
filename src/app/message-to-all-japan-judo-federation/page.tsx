import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/sections/PageHeader';
import { BulletList } from '@/components/sections/BulletList';
import { TextWithImage } from '@/components/sections/TextWithImage';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: '柔道に向けた想い｜J-Road',
  description:
    'J-Roadは、日本の柔道連盟が直面する課題を、本事業を通じて解決したいと考えています。柔道界の発展と道場存続の危機を乗り越えるための取り組みをご紹介します。',
};

export default function MessageToAllJapanJudoFederationPage() {
  return (
    <div className="space-y-16 pb-16">
      <PageHeader
        title="柔道に向けた想い"
        subtitle="本事業を通じて、日本の柔道界が直面する課題の解決に取り組みます。"
      />

      <TextWithImage
        layout="image-right"
        title="柔道界の課題と私たちの想い"
        text={
          'J-Roadは、単なるビジネスとしてのツーリズム事業ではありません。私たちは、日本の柔道界がより発展し、柔道競技者の増加等に貢献できるように日々精進していきたいと考えております。\n\n柔道は日本の伝統武術であり、世界に誇るべき文化です。世界に広がりつつある柔道ではありますが、まだまだ多くの可能性を秘めていると思っています。私たちは、柔道の普及・発展に貢献すべく、海外からの柔道家・柔道ファンを日本に迎え入れ、日本の柔道の素晴らしさを世界に伝えるとともに、柔道界に新たな活力をもたらしたいと考えています。\n\n以下に挙げる課題を、本事業を通じて解決したいと考えております。どうか暖かく見守っていただけますよう、お願い申し上げます。'
        }
        image="/課題と想い.png"
      />

      <BulletList
        title="本事業を通じて解決したい課題"
        items={[
          '日本の伝統武術である柔道を世界にアピールする機会がない',
          '柔道人口の増加への貢献を通した、道場存続への貢献',
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-subtle bg-muted washi-texture px-8 py-12 text-center shadow-japanese sm:text-left sm:px-12">
          <h2 className="text-2xl font-bold text-primary md:text-3xl tracking-tight">
            J-Road事業を通した将来ビジョン
          </h2>
          <ul className="mt-8 space-y-6 text-base text-muted md:text-lg leading-relaxed">
            <li>
              <Link
                href="/vision/dojo-establishment"
                className="flex items-start gap-4 group hover:text-primary transition-colors"
              >
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                <span className="group-hover:underline">
                  ①日本での道場設立を通した雇用の拡大・柔道業界への貢献
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
                  ②国際大会の企画運営
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
                  ③誰でも購入できる高品質で安価な柔道着ブランドの確立
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-subtle bg-muted washi-texture px-8 py-12 text-center shadow-japanese sm:text-left sm:px-12">
          <h2 className="text-2xl font-bold text-primary md:text-3xl tracking-tight">
            私たちの取り組み
          </h2>
          <div className="mt-6 space-y-6 text-base text-muted md:text-lg leading-relaxed">
            <p>
              海外からの柔道家・柔道ファンが日本を訪れることで、柔道を通した国際交流、柔道の国際的な認知向上、そして柔道人口の拡大につながると考えています。
            </p>
            <p>
              本事業を通じて、日本の柔道界に新たな風を吹き込み、柔道の素晴らしさを世界に伝えるとともに、柔道界の持続的な発展に貢献していきたいと考えております。
            </p>
            <p className="font-semibold text-primary">
              どうか、全柔連の皆様には、本事業を暖かく見守っていただけますよう、お願い申し上げます。
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="J-Roadについてもっと知りたい方へ"
        text="本事業の詳細や、柔道界への貢献について、お気軽にお問い合わせください。"
        cta={{ text: 'お問い合わせフォームへ', link: '/contact' }}
      />
    </div>
  );
}


