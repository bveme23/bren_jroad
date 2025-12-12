import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/PageHeader';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'お問い合わせ｜柔道体験・留学のご相談',
  description:
    '柔道ツーリズムや柔道留学に関するご相談・ご質問はこちらから。目的やご希望を丁寧に伺い、最適なプランをご提案します。',
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-16">
      <PageHeader
        title="お問い合わせ"
        subtitle="柔道体験・留学のご相談、メディア取材、パートナーシップのご提案など、以下のフォームまたはメールからお気軽にお寄せください。"
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="rounded-3xl border border-subtle bg-card p-8 shadow-japanese">
            <form className="space-y-6" action={`mailto:${siteConfig.socials.email}`} method="post">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary">
                  お名前
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-input px-4 py-3 text-sm focus:border-primary focus:outline-none bg-background"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary">
                  メールアドレス
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-input px-4 py-3 text-sm focus:border-primary focus:outline-none bg-background"
                />
              </div>
              <div>
                <label htmlFor="request" className="block text-sm font-medium text-primary">
                  ご相談内容
                </label>
                <textarea
                  id="request"
                  name="request"
                  rows={6}
                  placeholder="例：柔道ツーリズムの相談で、来年春に5日間の滞在を検討しています"
                  className="mt-2 w-full rounded-lg border border-input px-4 py-3 text-sm focus:border-primary focus:outline-none bg-background"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-accent shadow-japanese"
              >
                入力内容を送信する
              </button>
              <p className="text-xs text-muted">
                フォームが送信できない場合は、<a href={`mailto:${siteConfig.socials.email}`} className="text-primary underline">{siteConfig.socials.email}</a> まで直接メールでお問い合わせください。
              </p>
            </form>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-subtle bg-muted p-6 text-sm text-muted">
            <div>
              <h2 className="text-base font-semibold text-primary">お問い合わせ先</h2>
              <p className="mt-2">
                {siteConfig.socials.email}
                <br />
                平日 09:00-18:00（日本時間）
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-primary">対応言語</h2>
              <p className="mt-2">日本語・英語・フランス語</p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-primary">ご相談例</h2>
              <ul className="mt-2 space-y-1">
                <li>・柔道ツーリズムのプランについて知りたい</li>
                <li>・留学先の道場・学校選びを相談したい</li>
                <li>・企業研修やチーム遠征の相談をしたい</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
