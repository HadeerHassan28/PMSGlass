'use client';

import React from 'react';
import Image from 'next/image';

interface BlurBackdropImageProps {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  children?: React.ReactNode;
}

/**
 * Reusable component for Luxury "Blur Backdrop" image presentation.
 * Features a blurred background layer (`absolute inset-0 object-cover filter blur-xl opacity-40 scale-110`)
 * and a foreground image rendered with `object-contain` to avoid clipping.
 */
export function BlurBackdropImage({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  loading,
  priority = false,
  children,
}: BlurBackdropImageProps) {
  return (
    <div className={`relative overflow-hidden bg-black/40 flex items-center justify-center ${className}`}>
      {/* Blurred background layer */}
      <Image
        src={src}
        alt=""
        fill
        className="absolute inset-0 object-cover filter blur-xl opacity-40 scale-110 pointer-events-none"
        aria-hidden="true"
        sizes={sizes}
      />
      {/* Foreground image with object-contain */}
      <Image
        src={src}
        alt={alt}
        fill
        loading={loading}
        priority={priority}
        className={`object-contain relative z-10 ${imgClassName}`}
        sizes={sizes}
      />
      {children}
    </div>
  );
}

