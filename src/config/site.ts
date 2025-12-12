export const siteConfig = {
  name: "J-Road｜柔道で世界と日本をつなぐスポーツツーリズム",
  description:
    "海外から日本を訪れる柔道家・柔道ファンに向けて、本物の道場体験と日本文化を安心して楽しめるスポーツツーリズムを提供するサービスサイト。",
  language: "ja",
  navigation: [
    { label: "ホーム", path: "/" },
    { label: "柔道体験", path: "/services/judo-experience" },
    { label: "柔道ツーリズム", path: "/services/judo-tourism" },
    { label: "柔道留学支援(今後展開予定)", path: "/services/judo-study" },
    { label: "メンバー", path: "/members" },
    { label: "お問い合わせ", path: "/contact" },
    { label: "柔道に向けた想い", path: "/message-to-all-japan-judo-federation" },
  ],
  theme: {
    colors: {
      background: "#ffffff",
      primary: "#1c2e4a",
      accent: "#dddddd",
      text: "#333333",
    },
  },
  socials: {
    email: "jroad1010@gmail.com",
  },
};

export type SiteNavigationItem = (typeof siteConfig.navigation)[number];
