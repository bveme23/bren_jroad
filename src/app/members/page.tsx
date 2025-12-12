import type { Metadata } from 'next';

const members = [
  {
    name: '瀬戸口雄輝',
    role: '代表 / 柔道指導者',
    bio: '柔道名門校に進学し、メンバーとして活躍した。その後、教員となり私立中高一貫校で担任兼柔道部顧問として勤める。現在は東京都の私学に勤務し柔道ならびに保健体育を指導している。そして、J-Road全体のコンセプト設計と道場ネットワークを統括している。',
  },
];

export const metadata: Metadata = {
  title: 'メンバー｜J-Roadを支える専門チーム',
  description: '柔道界と国際交流に精通したJ-Roadのメンバーをご紹介。世界と日本を柔道でつなぐ専門チームがサポートします。',
};

export default function MembersPage() {
  const member = members[0];
  
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
            CEO｜{member.name}
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
                学歴
              </h3>
              <p 
                className="text-sm text-white md:text-base" 
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '1.05em' }}
              >
                天理大学体育学部体育学科 卒業
              </p>
            </div>

            {/* 柔道の大会成績 */}
            <div>
              <h3 
                className="text-lg font-bold text-white mb-2" 
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '1.05em' }}
              >
                柔道の大会成績
              </h3>
              <div 
                className="space-y-1 text-sm text-white md:text-base" 
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '1.05em' }}
              >
                <p>年齢：28歳</p>
                <p>柔道歴：20年</p>
                <p>小中高大社で全国大会出場</p>
                <p>大学の時に全国大会上位入賞</p>
                <p>神奈川県成年の部 国体代表</p>
              </div>
            </div>

            {/* 職歴 */}
            <div>
              <h3 
                className="text-lg font-bold text-white mb-2" 
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '1.05em' }}
              >
                職歴
              </h3>
              <p 
                className="text-sm text-white md:text-base" 
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '1.05em' }}
              >
                教員6年目
              </p>
            </div>

            {/* 出身地 */}
            <div>
              <h3 
                className="text-lg font-bold text-white mb-2" 
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '1.05em' }}
              >
                出身地
              </h3>
              <p 
                className="text-sm text-white md:text-base" 
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '1.05em' }}
              >
                神奈川県出身
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
