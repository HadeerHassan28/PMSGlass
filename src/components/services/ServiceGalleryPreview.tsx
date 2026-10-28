'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Images } from 'lucide-react';
import { Service } from '@/types';
import { getServiceImages } from '@/data/services/serviceImages';
import { ServiceLightboxModal } from './ServiceLightboxModal';

interface ServiceGalleryPreviewProps {
  service: Service;
  loc: 'ar' | 'en';
  isAr: boolean;
}

export function ServiceGalleryPreview({ service, loc, isAr }: ServiceGalleryPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const allImages = getServiceImages(service.id, service.gallery);

  // Take up to 3 thumbnails (skipping the main hero image 1.jpg if there are >= 4 images)
  const previewList = allImages.length >= 4 ? allImages.slice(1, 4) : allImages.slice(0, 3);
  const remainingCount = Math.max(1, allImages.length - 2);

  const openLightboxAt = (targetSrc: string) => {
    const found = allImages.indexOf(targetSrc);
    setActiveIdx(found >= 0 ? found : 0);
    setIsOpen(true);
  };

  const getRemainingLabel = (count: number) => {
    if (isAr) {
      return `+${count} ${count <= 10 ? 'صور أخرى' : 'صورة أخرى'}`;
    }
    return `+${count} more`;
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {previewList.map((imgSrc, idx) => {
          const isLastSlot = idx === 2 && allImages.length > 3;

          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openLightboxAt(imgSrc)}
              className="group relative h-20 sm:h-24 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-pms-gold/50 cursor-pointer shadow-sm transition-all duration-200"
              role="button"
              tabIndex={0}
              aria-label={`Open gallery image ${idx + 1}`}
            >
              <Image
                src={imgSrc}
                alt={`${service.title[loc]} - Thumbnail ${idx + 1}`}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 33vw, 20vw"
              />

              {/* 3rd Thumbnail: Dark Translucent Glassmorphism Overlay */}
              {isLastSlot && (
                <div className="absolute inset-0 bg-black/75 backdrop-blur-[3px] border border-pms-gold/40 rounded-xl flex flex-col items-center justify-center p-1 text-center transition-colors group-hover:bg-black/65">
                  <Images className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pms-gold mb-0.5 shrink-0" />
                  <span className="text-white text-[11px] sm:text-xs font-bold tracking-tight">
                    {getRemainingLabel(remainingCount)}
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <ServiceLightboxModal
        isOpen={isOpen}
        images={allImages}
        title={service.title[loc]}
        currentIndex={activeIdx}
        isAr={isAr}
        onClose={() => setIsOpen(false)}
        onIndexChange={setActiveIdx}
      />
    </>
  );
}

