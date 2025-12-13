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
    <section className="relative h-[700px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {backgroundImage && (
          <div
            className="w-full h-full object-cover opacity-50"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Red Accent Border Top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-primary"></div>

      {/* Decorative Japanese Pattern Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary/20 rounded-lg rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary/20 rounded-lg -rotate-12"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 animate-fade-in"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <img 
              src="/logo.png?v=2" 
              alt="J-Road Logo" 
              className="h-36 sm:h-48 w-auto mx-auto drop-shadow-2xl relative z-10" 
            />
          </div>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl leading-tight"
        >
          {titleLines.map((line, index) => {
            if (line.includes(keyPhrase)) {
              const titleParts = line.split(keyPhrase);
              return (
                <span key={index}>
                  {titleParts[0]}
                  <span className="text-primary block sm:inline mt-2 sm:mt-0">
                    {keyPhrase}
                  </span>
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
          })}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="w-16 h-0.5 bg-white/30"></div>
          <span className="mx-4 text-primary text-2xl">◆</span>
          <div className="w-16 h-0.5 bg-white/30"></div>
        </motion.div>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/90 text-lg sm:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href={ctaPrimary.link}
            className="btn-primary"
          >
            {ctaPrimary.text}
          </Link>
          {ctaSecondary && (
            <Link
              href={ctaSecondary.link}
              className="btn-secondary"
            >
              {ctaSecondary.text}
            </Link>
          )}
        </motion.div>

        {/* Small feature badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-white/80 text-sm"
        >
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span>Authentic Training</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span>Cultural Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span>Expert Instructors</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 100"
          className="w-full h-16 sm:h-20"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 100 L0 40 Q300 0 600 40 T1200 40 L1200 100 Z" 
            fill="white" 
          />
        </svg>
      </div>
    </section>
  );
}
