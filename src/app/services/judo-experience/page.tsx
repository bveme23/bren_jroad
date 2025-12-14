import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '柔道体験｜1日で日本の柔道と文化を体験',
  description:
    '柔道初心者の方でも安心して参加できる1日体験プログラム。日本の伝統的な道場で柔道の基礎と礼法、日本文化を体験できます。',
};

export default function JudoExperiencePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-2xl border border-subtle bg-muted p-6 shadow-md lg:p-10">
          {/* Tag badges */}
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-primarySoft px-3 py-1 text-xs font-medium text-primary">
              1日体験
            </span>
            <span className="inline-flex items-center rounded-full bg-primarySoft px-3 py-1 text-xs font-medium text-primary">
              初心者歓迎
            </span>
            <span className="inline-flex items-center rounded-full bg-primarySoft px-3 py-1 text-xs font-medium text-primary">
              道場体験
            </span>
          </div>

          {/* Two-column layout */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left column: Title and CTA */}
            <div>
              <h1 className="font-heading text-3xl font-bold text-primary tracking-tight sm:text-4xl lg:text-4xl">
                柔道体験
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                柔道初心者の方でも安心して参加できる1日体験プログラム。日本の伝統的な道場で柔道の基礎と礼法、日本文化を体験できます。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-red transition-all duration-300 hover:bg-accent hover:shadow-red-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  お問い合わせ
                </Link>
                <Link
                  href="#schedule"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-subtle bg-white px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  1日の流れを見る
                </Link>
              </div>
            </div>

            {/* Right column: Image */}
            <div className="order-first lg:order-last">
              <div className="overflow-hidden rounded-2xl bg-muted shadow-md">
                <img
                  src="/judo_exp.png"
                  alt="柔道体験"
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
              柔道初心者向けの1日体験プログラム
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                柔道体験は、柔道未経験の方や初心者の方を対象とした、1日で柔道の基礎と日本文化を体験できるプログラムです。日本の伝統的な道場で、柔道の基本動作（受け身、礼法、基本の技）を学びながら、柔道を通じて日本の「礼」や「精神性」に触れることができます。経験豊富な指導者が丁寧にサポートしますので、柔道を初めて体験する方でも安心してご参加いただけます。
              </p>
              <p>
                稽古の後は、道場での体験を振り返りながら、柔道の歴史や文化についても学ぶ時間を設けています。
              </p>
            </div>
          </div>
          <div className="order-first lg:order-last">
            <div className="overflow-hidden rounded-2xl bg-bgLight shadow-md">
              <img
                src="/judo_begginers.png"
                alt="柔道初心者向けの1日体験プログラム"
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
            サービス内容
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-primary"></div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            '日本の伝統的な道場での柔道体験環境の提供',
            '柔道初心者向けの基礎指導（受け身、礼法、基本の技）',
            '道場でのマナー・ルールの丁寧な説明（日本語／英語）',
            '柔道着のレンタル（別料金・対応可能な場合）',
            '柔道の歴史や文化についての簡単な説明',
            '稽古後の振り返りと質疑応答の時間',
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
            ※指導そのものは道場側のサービスとなり、当社は環境提供・調整を行う立場です。
          </p>
        </div>
      </section>

      {/* Daily Schedule as Vertical Timeline */}
      <section id="schedule" className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-bold text-primary tracking-tight sm:text-3xl">
            1日の流れ
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-primary"></div>
        </div>

        <div className="relative border-l-2 border-subtle pl-6 space-y-8">
          {[
            { time: '10:00', activity: '集合・道場へ移動（指定の駅／ホテルロビーに集合、道場へ移動、到着後更衣室・荷物置き場などをご案内）' },
            { time: '10:30', activity: 'オリエンテーション・準備（道場内でのマナー・ルールのご説明、柔道の歴史や文化についての簡単な紹介、着替え・ストレッチなどの事前準備）' },
            { time: '11:00', activity: '柔道体験開始（準備運動、受け身の練習、基本の立ち方・構え方、簡単な技の体験）' },
            { time: '12:30', activity: '休憩・振り返り（柔道体験の振り返り、質疑応答、柔道の文化や精神性についての説明）' },
            { time: '13:00', activity: '礼法の実践（柔道の礼法について学び、実践する時間）' },
            { time: '13:30', activity: '整理体操・片付け・着替え（クールダウンと簡単な振り返り、道場の清掃・片付けに参加、着替え・写真撮影）' },
            { time: '14:00', activity: '解散（現地解散、もしくは最寄り駅までご案内。午後は自由行動にお使いいただけます）' },
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
              こんな方におすすめ
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-primary"></div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              '柔道を初めて体験してみたい方',
              '日本の伝統文化や武道に興味がある方',
              '日本旅行中に柔道の基礎を学びたい方',
              '柔道の礼法や精神性に触れたい方',
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
              柔道体験について相談してみる
            </h2>
            <p className="mt-2 text-sm text-white/90">
              柔道未経験の方でも大丈夫です。まずはお気軽にお問い合わせください。
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-md transition-all duration-300 hover:bg-muted hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              お問い合わせフォームへ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
