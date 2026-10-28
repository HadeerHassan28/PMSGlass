'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceLightboxControls } from './ServiceLightboxControls';

interface ServiceLightboxModalProps {
  isOpen: boolean;
  images: string[];
  title: string;
  currentIndex: number;
  isAr: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function ServiceLightboxModal({
  isOpen,
  images,
  title,
  currentIndex,
  isAr,
  onClose,
  onIndexChange,
}: ServiceLightboxModalProps) {
  const total = images.length;

  const nextImage = useCallback(() => {
    onIndexChange((currentIndex + 1) % total);
  }, [currentIndex, total, onIndexChange]);

  const prevImage = useCallback(() => {
    onIndexChange((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onIndexChange]);

  // Lock body scroll and listen for keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') isAr ? prevImage() : nextImage();
      if (e.key === 'ArrowLeft') isAr ? nextImage() : prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, isAr, nextImage, prevImage]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6 md:p-8 select-none"
        >
          <ServiceLightboxControls
            title={title}
            currentIndex={currentIndex}
            totalImages={total}
            isAr={isAr}
            onClose={onClose}
            onPrev={prevImage}
            onNext={nextImage}
          />

          {/* Active Image Display Container */}
          <div className="relative w-full max-w-5xl h-[70vh] sm:h-[78vh] rounded-2xl overflow-hidden flex items-center justify-center border border-pms-gold/20 shadow-2xl bg-black/40">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="relative w-full h-full"
            >
              <Image
                src={images[currentIndex]}
                alt={`${title} - ${currentIndex + 1}`}
                fill
                loading="lazy"
                className="object-contain pointer-events-none"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </motion.div>
          </div>

          {/* Bottom Quick Jump Indicator Bar */}
          {total > 1 && (
            <div className="absolute bottom-4 left-4 right-4 flex justify-center items-center gap-1.5 z-20 pointer-events-none overflow-x-auto py-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-pms-gold/20 pointer-events-auto max-w-full overflow-x-auto">
                {images.slice(0, 15).map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => onIndexChange(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      dotIdx === currentIndex
                        ? 'w-6 bg-pms-gold'
                        : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to image ${dotIdx + 1}`}
                  />
                ))}
                {total > 15 && (
                  <span className="text-[10px] text-pms-gold font-mono px-1">
                    +{total - 15}
                  </span>
                )}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
