'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Maximize2, Images } from 'lucide-react';
import { useLocale } from 'next-intl';
import { BlurBackdropImage } from '@/components/ui/BlurBackdropImage';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const isAr = useLocale() === 'ar';
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length]);

  const maxVisible = 4;
  const visibleImages = images.length > maxVisible ? images.slice(0, maxVisible) : images;
  const remainingCount = images.length - (maxVisible - 1);

  return (
    <div>
      {/* 4-Card Grid with 4th Card More-Overlay */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleImages.map((img, idx) => {
          const isLastSlot = idx === 3 && images.length > maxVisible;

          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer border border-slate-200 dark:border-white/10 hover:border-pms-gold/50 shadow-lg bg-black/40"
            >
              <BlurBackdropImage
                src={img}
                alt={`${title} - Photo ${idx + 1}`}
                className="w-full h-full"
                imgClassName="p-3 transition-transform duration-500 group-hover:scale-105"
              />

              {!isLastSlot ? (
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="p-3 rounded-full bg-pms-gold text-black shadow-glow flex items-center gap-2 font-bold text-sm">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 z-20 bg-black/70 backdrop-blur-sm border border-pms-gold/40 rounded-2xl flex flex-col items-center justify-center p-4 text-center transition-all group-hover:bg-black/60">
                  <Images className="w-6 h-6 text-pms-gold mb-2 shrink-0 drop-shadow-md" />
                  <span className="text-white text-base sm:text-lg font-extrabold tracking-wide">
                    +{remainingCount}
                  </span>
                  <span className="text-gray-300 text-xs sm:text-sm font-semibold mt-0.5">
                    {isAr ? (remainingCount <= 10 ? 'صور أخرى' : 'صورة أخرى') : 'more photos'}
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
          >
            <div className="absolute top-4 right-4 left-4 flex justify-between items-center z-10">
              <div className="text-white/80 font-medium text-sm md:text-base px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md">
                {title} • {currentIndex + 1} / {images.length}
              </div>
              <button onClick={closeLightbox} className="p-3 rounded-full bg-white/10 hover:bg-pms-gold hover:text-black text-white transition-colors backdrop-blur-md" aria-label="Close modal">
                <X className="w-6 h-6" />
              </button>
            </div>

            {images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-pms-gold hover:text-black text-white transition-colors backdrop-blur-md z-10" aria-label="Previous image">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-pms-gold hover:text-black text-white transition-colors backdrop-blur-md z-10" aria-label="Next image">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden flex items-center justify-center">
              <motion.div key={currentIndex} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} className="relative w-full h-full">
                <BlurBackdropImage src={images[currentIndex]} alt={`${title} - Enlarged image ${currentIndex + 1}`} className="w-full h-full" imgClassName="p-2" priority />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
