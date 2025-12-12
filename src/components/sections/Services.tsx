'use client';

import { FadeInSection } from '@/components/common/FadeInSection';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: '柔道体験',
    description: '日本の道場で柔道を体験できるプログラム。',
    link: '/services/judo-experience',
    image: 'https://images.unsplash.com/photo-1542818454-dc05decf9db3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: '柔道ツーリズム',
    description: '数日〜1週間程度の滞在で、日本の道場稽古と観光・文化体験を組み合わせたオーダーメイドツアー。',
    link: '/services/judo-tourism',
    image: 'https://images.unsplash.com/photo-1542818454-dc05decf9db3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: '柔道留学斡旋支援(今後展開予定)',
    description: '数ヶ月〜数年単位の中長期滞在を想定した、道場・学校・住環境などのトータルコーディネート。',
    link: '/services/judo-study',
    image: 'https://images.unsplash.com/photo-1542818454-dc05decf9db3?auto=format&fit=crop&w=800&q=80',
  },
];

export function Services() {
  return (
    <FadeInSection className="py-24 bg-primarySoft">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-textMain mb-4 tracking-tight">
            サービス内容
          </h2>
          <p className="text-lg text-textMuted max-w-2xl mx-auto">
            「日本旅行の際に道場に行きたい」「信頼できる人から日本文化を学びたい」というニーズに応える、柔道特化のプログラムを用意しています。
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-full"
            >
              <Link href={service.link} className="block h-full">
                <div className="card-hover rounded-3xl bg-white overflow-hidden shadow-xl border border-borderSubtle h-full flex flex-col">
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-textMain mb-3 tracking-tight group-hover:text-primary transition-colors">
                      {service.title.includes('(今後展開予定)') ? (
                        <>
                          {service.title.split('(今後展開予定)')[0]}
                          <span className="text-sm">(今後展開予定)</span>
                        </>
                      ) : (
                        service.title
                      )}
                    </h3>
                    <p className="text-base text-textMuted leading-relaxed mb-4 flex-grow">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      詳細を見る
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}

