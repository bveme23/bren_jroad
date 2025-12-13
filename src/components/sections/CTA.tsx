'use client';

import { FadeInSection } from '@/components/common/FadeInSection';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function CTA() {
  return (
    <FadeInSection className="py-20 bg-gradient-to-b from-white to-gray-50">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primarySoft to-white border-2 border-primary rounded-xl p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 text-foreground">
            柔道を通じて、世界と日本をつなぐ
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            まずはお気軽にご相談ください。
            <br />
            あなたの目的やレベルに合わせて、最適なプランをご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary"
            >
              お問い合わせする
            </Link>
            <Link
              href="/services/judo-tourism"
              className="btn-secondary"
            >
              サービスを見る
            </Link>
          </div>
        </motion.div>
      </section>
    </FadeInSection>
  );
}

