'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { AboutHero } from '@/components/about/AboutHero';
import { ChairmanSection } from '@/components/about/ChairmanSection';
import { MissionVisionSection } from '@/components/about/MissionVisionSection';
import { MilestoneSection } from '@/components/about/MilestoneSection';
import { TechnicalSpecs } from '@/components/about/TechnicalSpecs';
import { AboutCtaBanner } from '@/components/about/AboutCtaBanner';

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations('About');
  const isAr = locale === 'ar';

  return (
    <div className="space-y-16 py-12">
      {/* 1. Hero Section */}
      <AboutHero
        badge={t('badge')}
        title={t('title')}
        description={t('description')}
      />

      {/* 2. Chairman's Statement */}
      <ChairmanSection
        badge={t('chairmanBadge')}
        title={t('chairmanTitle')}
        text={t('chairmanText')}
        role={t('chairmanRole')}
      />

      {/* 3. Mission & Vision */}
      <MissionVisionSection
        missionTitle={t('missionTitle')}
        missionText={t('missionText')}
        visionTitle={t('visionTitle')}
        visionText={t('visionText')}
      />

      {/* 4. Success Milestone & Recognition */}
      <MilestoneSection
        badge={t('milestoneBadge')}
        title={t('milestoneTitle')}
        text={t('milestoneText')}
        scope={t('milestoneScope')}
        isAr={isAr}
      />

      {/* 5. Technical & Engineering Capabilities */}
      <TechnicalSpecs
        title={t('capabilitiesTitle')}
        description={t('capabilitiesDesc')}
        isAr={isAr}
      />

      {/* 6. Minimalist Consultation CTA Banner */}
      <AboutCtaBanner
        title={t('ctaTitle')}
        description={t('ctaDesc')}
        btnText={t('ctaBtn')}
        isAr={isAr}
      />
    </div>
  );
}
