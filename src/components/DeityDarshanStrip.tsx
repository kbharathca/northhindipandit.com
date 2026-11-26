
'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface Deity {
  id: string;
  name: string;
  title: string;
  image: string;
  link: string;
}

export const deities: Deity[] = [
  {
    id: 'ganesha',
    name: 'श्री गणेश',
    title: 'प्रथम पूज्य विघ्नहर्ता',
    image: '/images/gods/ganesha.webp',
    link: '/services/ganesh-puja-bangalore/',
  },
  {
    id: 'grihapravesh',
    name: 'गृह प्रवेश',
    title: 'मंगल कलश व वास्तु शांति',
    image: '/images/gods/grihapravesh.webp',
    link: '/services/griha-pravesh-puja-bangalore/',
  },
  {
    id: 'shiva',
    name: 'महादेव शिव',
    title: 'देवाधिदेव रुद्राभिषेक',
    image: '/images/gods/shiva.webp',
    link: '/services/rudrabhishek-puja-bangalore/',
  },
  {
    id: 'mahamrityunjaya',
    name: 'महा मृत्युंजय',
    title: 'आरोग्य व दीर्घायु जाप',
    image: '/images/gods/mahamrityunjaya.webp',
    link: '/services/maha-mrityunjaya-jaap-bangalore/',
  },
  {
    id: 'lakshmi',
    name: 'माता लक्ष्मी',
    title: 'धन-वैभव महालक्ष्मी पूजन',
    image: '/images/gods/lakshmi.webp',
    link: '/services/lakshmi-puja-bangalore/',
  },
  {
    id: 'vishnu',
    name: 'भगवान विष्णु',
    title: 'श्री सत्यनारायण कथा',
    image: '/images/gods/vishnu.webp',
    link: '/services/satyanarayan-puja-bangalore/',
  },
  {
    id: 'hanuman',
    name: 'श्री हनुमान',
    title: 'संकटमोचन सुंदरकांड पाठ',
    image: '/images/gods/hanuman.webp',
    link: '/services/hanuman-puja-bangalore/',
  },
  {
    id: 'durga',
    name: 'माँ दुर्गा',
    title: 'सर्वशक्ति चंडी पाठ व हवन',
    image: '/images/gods/durga.webp',
    link: '/services/durga-puja-bangalore/',
  },
  {
    id: 'ram',
    name: 'श्री राम',
    title: 'मर्यादा पुरुषोत्तम राम पूजा',
    image: '/images/gods/ram.webp',
    link: '/services/ram-puja-bangalore/',
  },
  {
    id: 'krishna',
    name: 'श्री कृष्ण',
    title: 'आनंदकंद लल्ला गोपाल सेवा',
    image: '/images/gods/krishna.webp',
    link: '/services/krishna-puja-bangalore/',
  },
  {
    id: 'saraswati',
    name: 'माँ सरस्वती',
    title: 'ज्ञान व विद्यारंभ पूजन',
    image: '/images/gods/saraswati.webp',
    link: '/services/saraswati-puja-bangalore/',
  },
  {
    id: 'surya',
    name: 'भगवान सूर्य',
    title: 'प्रत्यक्ष नवग्रह शांति पूजा',
    image: '/images/gods/surya.webp',
    link: '/services/navagraha-puja-bangalore/',
  },
  {
    id: 'bhoomipuja',
    name: 'भूमि पूजन',
    title: 'शिलान्यास व भूमि देवी पूजन',
    image: '/images/gods/bhoomipuja.webp',
    link: '/services/bhoomi-puja-bangalore/',
  },
  {
    id: 'vivah',
    name: 'विवाह संस्कार',
    title: 'वैदिक विवाह व सप्तपदी',
    image: '/images/gods/vivah.webp',
    link: '/services/marriage-puja-bangalore/',
  },
  {
    id: 'shraadh',
    name: 'पितृ तर्पण',
    title: 'श्राद्ध व पिंडदान कर्म',
    image: '/images/gods/shraadh.webp',
    link: '/services/shraadh-puja-bangalore/',
  },
];

export function DeityDarshanStrip() {
  return (
    <div
      className="w-full bg-gradient-to-r from-amber-100/90 via-orange-50/95 to-amber-100/90 border-t border-b border-amber-200/60 shadow-xs relative z-10"
      role="region"
      aria-label="पावन सर्वदेव दर्शन"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-1.5 flex items-center justify-between gap-2 overflow-hidden">
        {/* Subtle Devotional Label for Tablets / Desktops */}
        <div className="hidden xl:flex items-center gap-1.5 shrink-0 pl-1 pr-3 border-r border-amber-300/60 text-saffron font-bold text-xs">
          <span className="text-sm">ॐ</span>
          <span className="font-serif tracking-wide text-ink/80 text-[11px] uppercase">पावन दर्शन</span>
        </div>

        {/* Horizontal Row of Rounded God Images with 100% Verified Direct Links */}
        <div className="w-full flex items-center justify-start md:justify-center gap-3 sm:gap-4 md:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-0.5 px-1">
          {deities.map((deity) => (
            <Link
              key={deity.id}
              href={deity.link}
              title={`${deity.name} - ${deity.title}`}
              className="flex flex-col items-center shrink-0 group cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 focus:outline-hidden focus:ring-1 focus:ring-saffron rounded-full"
            >
              {/* Rounded Avatar with Golden Halo Gradient Border */}
              <div className="p-[1.5px] sm:p-[2px] rounded-full bg-gradient-to-tr from-amber-400 via-orange-500 to-red-500 shadow-xs group-hover:shadow-md group-hover:from-yellow-300 group-hover:to-red-600 transition-all duration-300">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full overflow-hidden bg-white relative">
                  <Image
                    src={deity.image}
                    alt={deity.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              {/* Micro Label Below */}
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold text-ink/80 text-center tracking-tight mt-0.5 whitespace-nowrap group-hover:text-saffron transition-colors">
                {deity.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Right Subtle Slogan / Icon for Desktops */}
        <div className="hidden xl:flex items-center gap-1 shrink-0 pl-3 border-l border-amber-300/60 text-saffron text-xs font-semibold">
          <span>सर्वे भवन्तु सुखिनः</span>
        </div>
      </div>
    </div>
  );
}
