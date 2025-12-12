'use client';

import { FadeInSection } from '@/components/common/FadeInSection';
import { motion } from 'framer-motion';

export function About() {
  return (
    <FadeInSection className="py-24 bg-bgLight">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-textMain mb-6 tracking-tight">
                私たちの想い
                <span className="block mt-2 w-20 h-1 bg-primary rounded-full" />
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-base sm:text-lg text-textMuted leading-relaxed mb-4">
                  私たちJ-Roadは、「柔道を通じて世界と日本をもっと近づけたい」という想いから生まれました。単なる観光商品やビジネスとしてのツアーではなく、柔道を愛する人たちが日本の柔道・文化・人との出会いを通して、人生の財産となる体験をしてほしいと考えています。
                </p>
                <p className="text-base sm:text-lg text-textMuted leading-relaxed">
                  お金儲けではなく、柔道界の発展と、世界中の柔道家が日本の柔道に触れ続けられる"道"をつくること。それがJ-Roadの使命です。
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center h-full"
          >
            <img
              src="/世界.png"
              alt="世界"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>
    </FadeInSection>
  );
}

