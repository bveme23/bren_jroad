'use client';

import { FadeInSection } from '@/components/common/FadeInSection';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function CTA() {
  return (
    <FadeInSection className="py-24 bg-gradient-to-br from-bgDark via-primaryDark to-bgDark text-white relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      <section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            柔道を通じて、<span className="text-gradient">世界と日本をつなぐ</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
            まずはお気軽にご相談ください。
            <br />
            あなたの目的やレベルに合わせて、最適なプランをご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary text-center"
            >
              お問い合わせする
            </Link>
            <Link
              href="/services/judo-tourism"
              className="btn-secondary text-center"
            >
              サービスを見る
            </Link>
          </div>
        </motion.div>
      </section>
    </FadeInSection>
  );
}

