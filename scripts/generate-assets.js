const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images/projects',
  'public/images/services',
];

dirs.forEach(d => {
  fs.mkdirSync(d, { recursive: true });
});

function createSvg(title, category, iconType = 'facade') {
  let iconSvg = '';
  if (iconType === 'facade' || iconType === 'malls' || iconType === 'retail') {
    iconSvg = `
      <rect x="500" y="220" width="200" height="340" rx="6" fill="rgba(245,184,0,0.08)" stroke="#F5B800" stroke-width="2"/>
      <line x1="500" y1="300" x2="700" y2="300" stroke="#F5B800" stroke-width="1.5" stroke-opacity="0.6"/>
      <line x1="500" y1="380" x2="700" y2="380" stroke="#F5B800" stroke-width="1.5" stroke-opacity="0.6"/>
      <line x1="500" y1="460" x2="700" y2="460" stroke="#F5B800" stroke-width="1.5" stroke-opacity="0.6"/>
      <line x1="566" y1="220" x2="566" y2="560" stroke="#F5B800" stroke-width="1.5" stroke-opacity="0.6"/>
      <line x1="633" y1="220" x2="633" y2="560" stroke="#F5B800" stroke-width="1.5" stroke-opacity="0.6"/>
    `;
  } else if (iconType === 'handrail' || iconType === 'villas') {
    iconSvg = `
      <line x1="380" y1="300" x2="820" y2="300" stroke="#F5B800" stroke-width="6" stroke-linecap="round"/>
      <rect x="420" y="320" width="160" height="220" rx="4" fill="rgba(255,255,255,0.08)" stroke="#F5B800" stroke-width="2"/>
      <rect x="620" y="320" width="160" height="220" rx="4" fill="rgba(255,255,255,0.08)" stroke="#F5B800" stroke-width="2"/>
      <rect x="400" y="540" width="400" height="24" rx="4" fill="#F5B800" fill-opacity="0.3" stroke="#F5B800" stroke-width="2"/>
    `;
  } else if (iconType === 'mirror' || iconType === 'decorative-mirrors') {
    iconSvg = `
      <rect x="480" y="240" width="240" height="300" rx="20" fill="rgba(255,255,255,0.12)" stroke="#F5B800" stroke-width="3"/>
      <rect x="500" y="260" width="200" height="260" rx="14" fill="none" stroke="#F5B800" stroke-width="1.5" stroke-dasharray="6 4"/>
      <circle cx="600" cy="500" r="10" fill="none" stroke="#F5B800" stroke-width="2"/>
      <line x1="520" y1="280" x2="680" y2="440" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
    `;
  } else if (iconType === 'pergola') {
    iconSvg = `
      <line x1="380" y1="260" x2="820" y2="260" stroke="#F5B800" stroke-width="6"/>
      <line x1="420" y1="260" x2="420" y2="560" stroke="#F5B800" stroke-width="4"/>
      <line x1="780" y1="260" x2="780" y2="560" stroke="#F5B800" stroke-width="4"/>
      <polygon points="400,260 800,260 760,340 440,340" fill="rgba(245,184,0,0.15)" stroke="#F5B800" stroke-width="2"/>
    `;
  } else if (iconType === 'shower') {
    iconSvg = `
      <rect x="460" y="240" width="280" height="320" rx="6" fill="rgba(255,255,255,0.06)" stroke="#F5B800" stroke-width="2.5"/>
      <line x1="600" y1="240" x2="600" y2="560" stroke="#F5B800" stroke-width="1.5"/>
      <rect x="575" y="380" width="6" height="50" rx="3" fill="#F5B800"/>
      <circle cx="530" cy="270" r="12" fill="none" stroke="#F5B800" stroke-width="2"/>
    `;
  } else {
    // accessories / hardware / apartments
    iconSvg = `
      <circle cx="600" cy="380" r="90" fill="none" stroke="#F5B800" stroke-width="3"/>
      <rect x="585" y="260" width="30" height="60" rx="4" fill="#F5B800"/>
      <rect x="585" y="440" width="30" height="60" rx="4" fill="#F5B800"/>
      <rect x="480" y="365" width="60" height="30" rx="4" fill="#F5B800"/>
      <rect x="660" y="365" width="60" height="30" rx="4" fill="#F5B800"/>
      <circle cx="600" cy="380" r="30" fill="rgba(245,184,0,0.2)" stroke="#F5B800" stroke-width="2"/>
    `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#15171C"/>
      <stop offset="50%" stop-color="#101114"/>
      <stop offset="100%" stop-color="#0A0B0D"/>
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F5B800"/>
      <stop offset="100%" stop-color="#FFDE6A"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.08)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.01)"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="800" fill="url(#bg)"/>

  <!-- Background decorative grid -->
  <g stroke="rgba(245,184,0,0.08)" stroke-width="1">
    <line x1="150" y1="0" x2="150" y2="800"/>
    <line x1="300" y1="0" x2="300" y2="800"/>
    <line x1="450" y1="0" x2="450" y2="800"/>
    <line x1="600" y1="0" x2="600" y2="800"/>
    <line x1="750" y1="0" x2="750" y2="800"/>
    <line x1="900" y1="0" x2="900" y2="800"/>
    <line x1="1050" y1="0" x2="1050" y2="800"/>
    <line x1="0" y1="200" x2="1200" y2="200"/>
    <line x1="0" y1="400" x2="1200" y2="400"/>
    <line x1="0" y1="600" x2="1200" y2="600"/>
  </g>

  <!-- Ambient Golden Glow -->
  <circle cx="600" cy="380" r="220" fill="#F5B800" opacity="0.06"/>

  <!-- Center Card Backdrop -->
  <rect x="250" y="140" width="700" height="480" rx="24" fill="url(#cardGrad)" stroke="#F5B800" stroke-width="1.5" stroke-opacity="0.3"/>

  <!-- Icon Graphic -->
  ${iconSvg}

  <!-- Header Badge -->
  <rect x="420" y="70" width="360" height="42" rx="21" fill="rgba(0,0,0,0.7)" stroke="#F5B800" stroke-width="1.5"/>
  <text x="600" y="97" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#F5B800" text-anchor="middle" letter-spacing="2">PMS GLASS • ${category.toUpperCase()}</text>

  <!-- Title Bottom -->
  <text x="600" y="690" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="800" fill="#FFFFFF" text-anchor="middle">${title}</text>
  <text x="600" y="725" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" fill="#94A3B8" text-anchor="middle">Luxury Architectural Glass &amp; Aluminum Solutions</text>
</svg>`;
}

const serviceImages = [
  { path: 'public/images/services/facades.svg', title: 'Glass Facades (Stores, Malls, Doors)', cat: 'Services', type: 'facade' },
  { path: 'public/images/services/handrails.svg', title: 'Glass Handrails & Balustrades', cat: 'Services', type: 'handrail' },
  { path: 'public/images/services/mirrors.svg', title: 'Architectural Clear & Tinted Mirrors', cat: 'Services', type: 'mirror' },
  { path: 'public/images/services/pergolas.svg', title: 'Glass Pergolas & Canopies', cat: 'Services', type: 'pergola' },
  { path: 'public/images/services/decorative-mirrors.svg', title: 'Decorative & Touch LED Mirrors', cat: 'Services', type: 'decorative-mirrors' },
  { path: 'public/images/services/showers.svg', title: 'Custom Luxury Shower Cabins', cat: 'Services', type: 'shower' },
  { path: 'public/images/services/accessories.svg', title: 'Glass Accessories & SS Hardware', cat: 'Services', type: 'accessories' },
];

const projectImages = [
  // Malls
  { path: 'public/images/projects/malls-1.svg', title: 'Textile Mall Glass Facades & Skylights', cat: 'Commercial Malls', type: 'malls' },
  { path: 'public/images/projects/malls-2.svg', title: 'Grand Avenue Mall Atrium Glass', cat: 'Commercial Malls', type: 'malls' },
  // Retail
  { path: 'public/images/projects/retail-1.svg', title: 'Flagship Luxury Brand Storefront', cat: 'Retail Stores', type: 'retail' },
  { path: 'public/images/projects/retail-2.svg', title: 'Automotive & Tech Showroom Glass', cat: 'Retail Stores', type: 'retail' },
  // Villas
  { path: 'public/images/projects/villas-1.svg', title: 'Modern Villa Panoramic Facade', cat: 'Luxury Villas', type: 'villas' },
  { path: 'public/images/projects/villas-2.svg', title: 'Private Palace Pergola & Showers', cat: 'Luxury Villas', type: 'villas' },
  // Apartments
  { path: 'public/images/projects/apartments-1.svg', title: 'Skyline Penthouse Glass Balconies', cat: 'Residential Apartments', type: 'apartments' },
  { path: 'public/images/projects/apartments-2.svg', title: 'Duplex Custom Mirrors & Showers', cat: 'Residential Apartments', type: 'apartments' },
];

[...serviceImages, ...projectImages].forEach(item => {
  fs.writeFileSync(item.path, createSvg(item.title, item.cat, item.type));
});

console.log('All Service and Project images generated successfully.');
