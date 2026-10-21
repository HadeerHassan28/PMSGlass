'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterContactInfoProps {
  title: string;
  address: string;
  hours: string;
}

export function FooterContactInfo({
  title,
  address,
  hours,
}: FooterContactInfoProps) {
  return (
    <div className="lg:col-span-3 space-y-3">
      <h4 className="text-white font-bold text-base mb-4 border-b border-pms-gold/40 pb-2 inline-block">
        {title}
      </h4>
      <ul className="space-y-3 text-sm text-gray-300">
        <li className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-pms-gold shrink-0 mt-1" />
          <span>{address}</span>
        </li>
        <li className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-pms-gold shrink-0" />
          <a
            dir="ltr"
            href="tel:+201017905067"
            className="hover:text-pms-gold dir-ltr"
          >
            +20 101 790 5067
          </a>
        </li>
        <li className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-pms-gold shrink-0" />
          <a
            href="mailto:pmsglassinfo@gmail.com"
            className="hover:text-pms-gold"
          >
            pmsglassinfo@gmail.com
          </a>
        </li>
        <li className="flex items-start gap-3">
          <Clock className="w-4 h-4 text-pms-gold shrink-0 mt-1" />
          <span>{hours}</span>
        </li>
      </ul>
    </div>
  );
}
