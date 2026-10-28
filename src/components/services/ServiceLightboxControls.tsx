'use client';

import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceLightboxControlsProps {
  title: string;
  currentIndex: number;
  totalImages: number;
  isAr: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function ServiceLightboxControls({
  title,
  currentIndex,
  totalImages,
  isAr,
  onClose,
  onPrev,
  onNext,
}: ServiceLightboxControlsProps) {
  // In RTL, the left arrow advances forward (next) and the right arrow goes backward (prev)
  const handleLeftClick = isAr ? onNext : onPrev;
  const handleRightClick = isAr ? onPrev : onNext;

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-auto">
        <div className="flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/60 backdrop-blur-md border border-pms-gold/30 shadow-lg">
          <span className="text-white font-semibold text-xs sm:text-sm truncate max-w-[180px] sm:max-w-md">
            {title}
          </span>
          <span className="text-pms-gold/80 text-xs sm:text-sm font-mono font-bold">
            {currentIndex + 1} / {totalImages}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-pms-gold text-white hover:text-black border border-pms-gold/30 hover:border-pms-gold transition-all duration-200 backdrop-blur-md shadow-lg"
          aria-label={isAr ? 'إغلاق المعرض' : 'Close gallery'}
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Prev / Next Navigation Buttons */}
      {totalImages > 1 && (
        <>
          <button
            onClick={handleLeftClick}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-pms-gold text-white hover:text-black border border-pms-gold/30 hover:border-pms-gold transition-all duration-200 backdrop-blur-md shadow-2xl z-20"
            aria-label={isAr ? 'الصورة التالية' : 'Previous image'}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleRightClick}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-pms-gold text-white hover:text-black border border-pms-gold/30 hover:border-pms-gold transition-all duration-200 backdrop-blur-md shadow-2xl z-20"
            aria-label={isAr ? 'الصورة السابقة' : 'Next image'}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </>
      )}
    </>
  );
}
