'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaPrimary: { text: string; link: string };
  ctaSecondary?: { text: string; link: string };
}

export function Hero({ title, subtitle, backgroundImage, ctaPrimary, ctaSecondary }: HeroProps) {
  const keyPhrase = '柔道界を変える';
  // \nを改行として処理し、空行を除外
  const titleLines = title
    .replace(/\\n/g, '\n') // エスケープされた\nを実際の改行に変換
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '');
  
  const titleWithBreaks = titleLines.map((line, index) => {
    if (line.includes(keyPhrase)) {
      const titleParts = line.split(keyPhrase);
      return (
        <span key={index}>
          {titleParts[0]}
          <span className="text-gradient">{keyPhrase}</span>
          {titleParts[1]}
          {index < titleLines.length - 1 && <br />}
        </span>
      );
    }
    return (
      <span key={index}>
        {line}
        {index < titleLines.length - 1 && <br />}
      </span>
    );
  });
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-bgDark via-primaryDark to-bgDark">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      {/* Background image overlay */}
      {backgroundImage && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
      )}
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/20 text-white text-sm font-semibold tracking-wider border border-primary/30">
                J-Road
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-snug"
            >
              {titleWithBreaks}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href={ctaPrimary.link}
                className="btn-primary text-center"
              >
                {ctaPrimary.text}
              </Link>
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.link}
                  className="btn-secondary text-center"
                >
                  {ctaSecondary.text}
                </Link>
              )}
            </motion.div>
          </div>
          
          {/* Right: Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <img
              src="/logo.png?v=2"
              alt="J-Road Logo"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm font-medium">スクロール</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
