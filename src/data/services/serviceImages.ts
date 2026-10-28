/**
 * PMS GLASS - Dynamic Service Gallery Image Resolver
 * Resolves watermarked images for each service category from disk.
 */

export const serviceFolderMap: Record<string, { folder: string; count: number }> = {
  facades: { folder: 'frontMall_watermarked', count: 17 },
  handrails: { folder: 'handrill_watermarked', count: 17 },
  mirrors: { folder: 'mirror_watermarked', count: 40 },
  pergolas: { folder: 'pergola_watermarked', count: 14 },
  'decorative-mirrors': { folder: 'decorMirror_watermarked', count: 20 },
  showers: { folder: 'shawar_watermarked', count: 30 },
  accessories: { folder: 'accessories_watermarked', count: 4 },
};

export function getServiceImages(serviceId: string, fallbackGallery?: string[]): string[] {
  const config = serviceFolderMap[serviceId];
  if (!config) {
    return fallbackGallery && fallbackGallery.length > 0 ? fallbackGallery : [];
  }

  return Array.from({ length: config.count }, (_, i) =>
    `/images/services/${config.folder}/${i + 1}.jpg`
  );
}
