'use client';

import { FadeInSection } from '@/components/common/FadeInSection';
import { motion } from 'framer-motion';
import { JudoIcon } from '@/components/icons/JudoIcon';
import { DojoIcon } from '@/components/icons/DojoIcon';
import { BowIcon } from '@/components/icons/BowIcon';

const features = [
  {
    title: '本物の道場での稽古',
    description: '競技実績・指導歴の豊富な指導者が在籍する、日本の本物の道場を厳選。レベル・目的に合わせた稽古環境をコーディネートします。',
    icon: <JudoIcon className="text-primary" size={40} />,
  },
  {
    title: '日本文化を深く学ぶプログラム',
    description: '柔道だけでなく、礼法、歴史、食文化、観光などを組み合わせた「学び」としての旅程を提案します。',
    icon: <DojoIcon className="text-primary" size={40} />,
  },
  {
    title: '信頼できるプロフェッショナルのサポート',
    description: '柔道界に20年以上関わるメンバーが監修。渡航前の相談から滞在中のサポートまで、安心できる伴走体制を整えています。',
    icon: <BowIcon className="text-primary" size={40} />,
  },
];

export function WhyJRoad() {
  return (
    <FadeInSection className="py-24 bg-white">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-textMain mb-4 tracking-tight">
            J-Roadが選ばれる理由
          </h2>
          <p className="text-lg text-textMuted max-w-2xl mx-auto">
            『ただの観光』ではなく、『柔道を中心にした日本体験』をデザインします。
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover rounded-3xl bg-white p-8 border border-borderSubtle shadow-lg"
            >
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-primarySoft">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-textMain mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-base text-textMuted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}

