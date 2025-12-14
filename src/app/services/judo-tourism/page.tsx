'use client';

import { PageHeader } from '@/components/sections/PageHeader';
import { TextWithImage } from '@/components/sections/TextWithImage';
import { InfoGrid } from '@/components/sections/InfoGrid';
import { CTASection } from '@/components/sections/CTASection';
import { ScheduleTable } from '@/components/sections/ScheduleTable';
import { JudoPlanCalculator } from '@/components/sections/JudoPlanCalculator';
import { JapaneseDivider } from '@/components/decorative/JapaneseDivider';
import { JapaneseBackground } from '@/components/decorative/JapaneseBackground';
import { useI18n } from '@/i18nContext';

export default function JudoTourismPage() {
  const { t } = useI18n();
  return (
    <div className="pb-16 relative">
      <PageHeader 
        title={t('tourism.title')} 
        subtitle={t('tourism.subtitle')} 
      />

      <section className="relative w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/judo_dojo.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          {/* Semi-transparent black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* 柔道ツーリズムについて */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl tracking-tight text-shadow-subtle mb-6">
                {t('tourism.about.title')}
              </h2>
              <div className="text-base text-white md:text-lg leading-relaxed space-y-4">
                <p>
                  {t('tourism.about.text1')}<strong className="font-semibold text-primary">{t('tourism.about.text1_strong')}</strong>{t('tourism.about.text1_end')}
                </p>
                <p>
                  {t('tourism.about.text2')}
                </p>
                <p>
                  {t('tourism.about.text3')}
                </p>
              </div>
            </div>

            {/* サービスプランシミュレーター */}
            <JudoPlanCalculator />
          </div>
        </div>
      </section>

      <JapaneseDivider />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* 左側: サービス例 */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl tracking-tight text-shadow-subtle mb-8">
              {t('tourism.services.title')}
            </h2>
            <ul className="space-y-4 text-base text-muted-foreground md:text-lg leading-relaxed">
              {[
                t('tourism.services.item1'),
                t('tourism.services.item2'),
                t('tourism.services.item3'),
                t('tourism.services.item4'),
                t('tourism.services.item5'),
                t('tourism.services.item6'),
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground italic">
              {t('tourism.services.note')}
            </p>
          </div>

          {/* 右側: 1日の流れ（モデルプラン） */}
          <div>
            <ScheduleTable
              title="1日の流れ（モデルプラン）"
              schedules={[
                {
                  label: '1拠点の場合',
                  schedule: [
                    { time: '08:30', activity: '集合・道場へ移動（指定の駅／ホテルロビーに集合、道場へ移動、到着後更衣室・荷物置き場などをご案内）' },
                    { time: '09:00', activity: 'オリエンテーション・準備（道場内でのマナー・ルールのご説明、その日の稽古メニュー概要の共有、着替え・ストレッチなどの事前準備）' },
                    { time: '09:15', activity: '道場稽古に参加（準備運動・受け身など基礎動作、打ち込み・技の反復練習、レベルに応じた乱取り、または基礎中心のメニュー）' },
                    { time: '11:30', activity: '整理体操・片付け・着替え（クールダウンと簡単な振り返り、道場の清掃・片付けに参加、着替え・写真撮影）' },
                    { time: '11:45', activity: '解散（現地解散、もしくは最寄り駅までご案内。午後は自由行動にお使いいただけます）' },
                  ],
                },
                {
                  label: '2拠点の場合',
                  schedule: [
                    { time: '08:30', activity: '集合・第1道場へ移動（指定の駅／ホテルロビーに集合、第1道場へ移動、到着後更衣室・荷物置き場などをご案内）' },
                    { time: '09:00', activity: 'オリエンテーション・準備（道場内でのマナー・ルールのご説明、その日の稽古メニュー概要の共有、着替え・ストレッチなどの事前準備）' },
                    { time: '09:15', activity: '第1道場で稽古に参加（準備運動・受け身など基礎動作、打ち込み・技の反復練習、レベルに応じた乱取り、または基礎中心のメニュー）' },
                    { time: '11:30', activity: '整理体操・片付け・着替え（クールダウンと簡単な振り返り、道場の清掃・片付けに参加、着替え・写真撮影）' },
                    { time: '11:45', activity: '第1道場を出発・第2道場へ移動（移動時間約30分）' },
                    { time: '12:15', activity: '第2道場到着・準備（到着後、更衣室・荷物置き場のご案内、着替え・ストレッチなどの事前準備）' },
                    { time: '12:30', activity: '第2道場で稽古に参加（準備運動、打ち込み・技の反復練習、レベルに応じた乱取りなど、約3時間の稽古）' },
                    { time: '15:30', activity: '整理体操・片付け・着替え（クールダウンと簡単な振り返り、道場の清掃・片付けに参加、着替え・写真撮影）' },
                    { time: '15:45', activity: '解散（現地解散、もしくは最寄り駅までご案内）' },
                  ],
                },
                {
                  label: '3拠点の場合',
                  schedule: [
                    { time: '08:30', activity: '集合・第1道場へ移動（指定の駅／ホテルロビーに集合、第1道場へ移動、到着後更衣室・荷物置き場などをご案内）' },
                    { time: '09:00', activity: 'オリエンテーション・準備（道場内でのマナー・ルールのご説明、その日の稽古メニュー概要の共有、着替え・ストレッチなどの事前準備）' },
                    { time: '09:15', activity: '第1道場で稽古に参加（準備運動・受け身など基礎動作、打ち込み・技の反復練習、レベルに応じた乱取り、または基礎中心のメニュー）' },
                    { time: '11:30', activity: '整理体操・片付け・着替え（クールダウンと簡単な振り返り、道場の清掃・片付けに参加、着替え・写真撮影）' },
                    { time: '11:45', activity: '第1道場を出発・第2道場へ移動（移動時間約30分）' },
                    { time: '12:15', activity: '第2道場到着・準備（到着後、更衣室・荷物置き場のご案内、着替え・ストレッチなどの事前準備）' },
                    { time: '12:30', activity: '第2道場で稽古に参加（準備運動、打ち込み・技の反復練習、レベルに応じた乱取りなど、約3時間の稽古）' },
                    { time: '15:30', activity: '整理体操・片付け・着替え（クールダウンと簡単な振り返り、道場の清掃・片付けに参加、着替え・写真撮影）' },
                    { time: '15:45', activity: '第2道場を出発・第3道場へ移動（移動時間約30分）' },
                    { time: '16:15', activity: '第3道場到着・準備（到着後、更衣室・荷物置き場のご案内、着替え・ストレッチなどの事前準備）' },
                    { time: '16:30', activity: '第3道場で稽古に参加（準備運動、打ち込み・技の反復練習、レベルに応じた乱取りなど、約3時間の稽古）' },
                    { time: '19:30', activity: '整理体操・片付け・着替え（クールダウンと簡単な振り返り、道場の清掃・片付けに参加、着替え・写真撮影）' },
                    { time: '19:45', activity: '解散（現地解散、もしくは最寄り駅までご案内）' },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>


      <CTASection
        title={t('tourism.cta.title')}
        text={t('tourism.cta.text')}
        cta={{ text: t('tourism.cta.button'), link: '/contact' }}
      />
    </div>
  );
}
