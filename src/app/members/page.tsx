'use client';

import { useI18n } from '@/i18nContext';

const getMember = (t: (key: string) => string) => ({
  name: '瀬戸口雄輝',
  role: t('members.role'),
  bio: t('members.bio'),
});

export default function MembersPage() {
  const { t } = useI18n();
  const member = getMember(t);
  
  return (
    <div className="relative min-h-screen">
      {/* 背景画像 - 全画面固定 */}
      <div 
        className="fixed top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url(/瀬戸口さん_表面.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* コンテンツレイヤー */}
      <div className="relative z-10 min-h-screen pb-32">
        {/* 名前 - 左上に白文字 */}
        <div className="absolute top-24 left-6 md:top-28 md:left-12 z-20">
          <h1 
            className="text-white text-3xl md:text-4xl lg:text-5xl font-black"
            style={{
              fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif',
              textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.6)',
              letterSpacing: '0.2em',
              lineHeight: '1.1',
              fontWeight: '900',
            }}
          >
            {t('members.ceo')}｜{member.name}
          </h1>
        </div>

        {/* メインコンテンツ - 名前と同じ左位置に白文字で配置（箱なし） */}
        <div className="absolute top-40 left-6 md:top-48 md:left-12 z-20 space-y-6">
          {/* 詳細情報 */}
          <div className="space-y-4">
            {/* 学歴 */}
            <div>
              <h3 
                className="text-lg font-bold text-white mb-2" 
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '1.05em' }}
              >
                {t('members.education.title')}
              </h3>
              <p 
                className="text-sm text-white md:text-base" 
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '1.05em' }}
              >
                {t('members.education.text')}
              </p>
            </div>

            {/* 柔道の大会成績 */}
            <div>
              <h3 
                className="text-lg font-bold text-white mb-2" 
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '1.05em' }}
              >
                {t('members.achievements.title')}
              </h3>
              <div 
                className="space-y-1 text-sm text-white md:text-base" 
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '1.05em' }}
              >
                <p>{t('members.achievements.age')}</p>
                <p>{t('members.achievements.experience')}</p>
                <p>{t('members.achievements.national1')}</p>
                <p>{t('members.achievements.national2')}</p>
                <p>{t('members.achievements.prefecture')}</p>
              </div>
            </div>

            {/* 職歴 */}
            <div>
              <h3 
                className="text-lg font-bold text-white mb-2" 
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '1.05em' }}
              >
                {t('members.career.title')}
              </h3>
              <p 
                className="text-sm text-white md:text-base" 
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '1.05em' }}
              >
                {t('members.career.text')}
              </p>
            </div>

            {/* 出身地 */}
            <div>
              <h3 
                className="text-lg font-bold text-white mb-2" 
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '1.05em' }}
              >
                {t('members.origin.title')}
              </h3>
              <p 
                className="text-sm text-white md:text-base" 
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '1.05em' }}
              >
                {t('members.origin.text')}
              </p>
            </div>
          </div>

          {/* メッセージコンテンツ */}
          <div className="mt-8">
            <p 
              className="text-sm text-white leading-relaxed md:text-base md:leading-relaxed whitespace-pre-line max-w-xl" 
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
            >
              {member.bio}
            </p>
          </div>
        </div>
      </div>

      {/* 2枚目の背景画像セクション - 下にスクロールした際に表示 */}
      <div className="relative min-h-screen">
        {/* 2枚目の背景画像 */}
        <div 
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: 'url(/グッチ背面.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        {/* スペーサー - 2枚目の背景を表示するための高さ */}
        <div className="relative z-10 min-h-screen" />
      </div>
    </div>
  );
}
