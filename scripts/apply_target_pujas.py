# Script to update src/data/pujas.ts with new and enhanced pujas

new_pujas_code = '''
  {
    slug: 'mool-shanti-puja-bangalore',
    title: 'Mool Shanti Puja in Bangalore | Gandmool Nakshatra Shanti Pandit',
    shortTitle: 'Mooli Shanti Puja',
    image: '/images/banners/mool-shanti-puja.webp',
    tagline: 'Vedic Nakshatra dosh nivaran, 27-well teerth jal snan, and Grah Shanti hawan for child and family well-being.',
    navLabel: 'Mooli Shanti',
    heroTitle: 'Book Mooli Shanti & Gandmool Puja in Bangalore with North Hindi Pandit',
    heroDescription:
      'Perform authentic Mooli Shanti (Gand Mool Nakshatra Shanti) puja in Bangalore for babies or individuals born under Ashwini, Ashlesha, Magha, Jyeshtha, Moola, or Revati nakshatras. Complete with 27-tree leaves, 27-well sacred water snan, Nakshatra hawan, and Chhaya Patra daan.',
    seoTitle: 'Mool Shanti Puja in Bangalore | Mooli Shanti & Gandmool Pandit',
    seoDescription:
      'Book Mool Shanti Puja in Bangalore (Mooli Shanti). Authentic North Indian Pandit for Gand Mool Nakshatra dosh nivaran, 27th-day baby puja, hawan & samagri.',
    benefits: [
      'Eliminates Gand Mool Nakshatra dosha for newborn babies, safeguarding health and parental harmony.',
      'Pacifies inauspicious planetary transitions and brings long-term peace, longevity, and prosperity.',
      'Includes sacred Abhishek using teerth jal, 27 medicinal tree barks, and consecrated herbs.',
      'Conducted strictly adhering to Vedic Parashara Samhita and North Indian astrological traditions.',
    ],
    idealFor: [
      'Newborn babies born in Gand Mool Nakshatras (Ashwini, Ashlesha, Magha, Jyeshtha, Moola, Revati)',
      '27th day after child birth (on the return of the birth nakshatra)',
      'Adults facing recurring career hurdles or health issues due to unperformed Mool Shanti in childhood',
      'Families seeking astrological harmony and ancestral protection',
    ],
    includes: [
      'Janma Kundali & Nakshatra analysis by experienced Gurukul-trained North Indian Pandit',
      '27-tree leaves (Saptamrittika), holy waters, and specialized Mool Shanti samagri',
      'Navagraha, Nakshatra, and Kuldevi-Kuldevta avahan & sthapana',
      'Specialized Gand Mool Havan with cow ghee, medicinal samidhas, and 108 ahutis',
      'Bronze Chhaya Patra (shadow reflection) daan, Go-daan sankalp, and father-child first darshan vidhi',
    ],
    process: [
      'Share the newborn or native\'s birth date, time, nakshatra, and Bangalore home address.',
      'Pandit ji calculates the exact auspicious muhurat (typically on the 27th day birth nakshatra repetition).',
      'Pandit ji arrives with the complete 27-herbs and teerth snan samagri checklist.',
      'Concludes with sacred Nakshatra hawan, Chhaya Patra viewing, and elders\' blessings.',
    ],
    steps: [
      {
        step: 1,
        title: 'Sankalp & Nakshatra Devata Avahan',
        description: 'Initiating the ceremony with Gotra sankalp, invoking the ruling deity of the birth nakshatra, and establishing the sacred kalash.',
        image: '/images/rituals/mool-shanti/step1.webp',
      },
      {
        step: 2,
        title: '27 Teerth & 27 Tree Leaf Snan',
        description: 'Purification bath through a specialized sieve using water blended from 27 sacred rivers and leaves of 27 medicinal trees.',
        image: '/images/rituals/mool-shanti/step2.webp',
      },
      {
        step: 3,
        title: 'Navagraha & Nakshatra Mandala Pujan',
        description: 'Drawing sacred geometric mandalas for the 9 planets and 27 constellations with consecrated grains and herbal powders.',
        image: '/images/rituals/mool-shanti/step3.webp',
      },
      {
        step: 4,
        title: 'Mool Shanti Hawan & 108 Ahutis',
        description: 'Vedic fire oblation offering sacred samidha, pure cow ghee, and nakshatra-specific herbs to remove planetary afflictions.',
        image: '/images/rituals/mool-shanti/step4.webp',
      },
      {
        step: 5,
        title: 'Chhaya Patra Daan & Shanti Ashirwad',
        description: 'Father views the baby\'s reflection in clarified butter (ghee) before donating the bronze vessel, concluding with protective mantras.',
        image: '/images/rituals/mool-shanti/step5.webp',
      },
    ],
    faqs: [
      {
        question: 'When should Mooli Shanti Puja be performed?',
        answer: 'Traditionally, Mool Shanti is performed on the 27th day after the baby\'s birth when the birth nakshatra recurs. If missed, it can be performed on any subsequent occurrence of that nakshatra or during an auspicious muhurat.',
      },
      {
        question: 'Which nakshatras require Mool Shanti Puja?',
        answer: 'The 6 Gand Mool nakshatras ruled by Ketu and Mercury: Ashwini, Ashlesha, Magha, Jyeshtha, Moola, and Revati require Mool Shanti puja.',
      },
      {
        question: 'Can Mool Shanti Puja be performed for adults?',
        answer: 'Yes. If Gand Mool Shanti was not conducted in childhood, adults facing persistent health, marital, or career obstacles can perform this Vedic remedy anytime with proper sankalp.',
      },
    ],
  },
  {
    slug: 'antim-sanskar-bangalore',
    title: 'Antim Sanskar Pandit in Bangalore | Dah Sanskar & Terahwi Vidhi',
    shortTitle: 'Antim Sanskar',
    image: '/images/banners/antim-sanskar.webp',
    tagline: 'Respectful North Indian funeral rites, Asthi Visarjan, Garud Puran paath, and 13-day Terahwi Shanti karma.',
    navLabel: 'Antim Sanskar',
    heroTitle: 'Book Antim Sanskar Pandit in Bangalore for North Indian Vedic Funeral Rites',
    heroDescription:
      'Compassionate, respectful, and traditional North Indian funeral rites across Bangalore crematoriums and homes. Covering Dah Sanskar, Asthi Sanchay, 10th-day Dasgatra, 11th-day Ekadasha, 12th-day Dwadasha, and 13th-day Terahwi Shanti Hawan with complete Vedic dignity.',
    seoTitle: 'Antim Sanskar Pandit in Bangalore | Dah Sanskar & Terahwi Vidhi',
    seoDescription:
      'Urgent booking for Antim Sanskar Pandit in Bangalore. Respectful North Indian funeral rites, crematorium Dah Sanskar, Asthi Visarjan, Garud Puran & 13-day Terahwi.',
    benefits: [
      'Ensures the departed soul achieves Moksha and peaceful transition according to Garuda Purana.',
      'Compassionate and dignified Hindi-speaking pandit available on urgent call across Bangalore.',
      'Covers complete 13-day timeline: Dah Sanskar, Asthi Sanchay, Dasgatra, Ekadasha, and Terahwi.',
      'Transparent samagri assistance for white vastra, tulsi, gangajal, barley flour, and sesame.',
    ],
    idealFor: [
      'Immediate Dah Sanskar / funeral rites at any Bangalore crematorium or shamshan ghat',
      'Asthi Sanchay (bone collection) and Asthi Visarjan rituals',
      'Daily Garud Puran Paath recitation at home during the 10 to 13 day period of mourning',
      '10th-day Dasgatra, 11th-day Ekadasha, 12th-day Dwadasha, and 13th-day Terahwi Brahmin Bhojan',
    ],
    includes: [
      'Immediate pandit arrival at Bangalore hospital, residence, or crematorium',
      'Complete antim yatra preparation with Gangajal, tulsi leaf, kusha, and sacred chants',
      'Mukhagni, Dah Sanskar vidhi, and kapal kriya guidance at the crematorium',
      '10-day Pind Daan rituals and nightly Garud Puran reading support',
      '13th day Shanti Hawan, Navagraha Shanti, Pagdi / Dastaar rasam, and Brahman Bhojan',
    ],
    process: [
      'Call Pandit Nilesh Kumar Pandey directly on 6206471543 for immediate emergency funeral coordination.',
      'Pandit ji arrives at your Bangalore residence or crematorium with necessary funeral samagri.',
      'Step-by-step Dah Sanskar and Asthi collection rituals are conducted with strict Vedic solemnity.',
      'Continued guidance throughout the 13-day mourning period ending with peaceful Terahwi Shanti Hawan.',
    ],
    steps: [
      {
        step: 1,
        title: 'Antim Yatra & Mukhagni Dah Sanskar',
        description: 'Vedic preparation of the sacred bier, offering Gangajal and tulsi, followed by crematorium rites and solemn Mukhagni.',
        image: '/images/rituals/antim-sanskar/step1.webp',
      },
      {
        step: 2,
        title: 'Asthi Sanchay & Visarjan Vidhi',
        description: 'Collecting sacred bone remains on the 2nd or 3rd day, followed by prayers for immersion in holy waters (Sangam or Cauvery).',
        image: '/images/rituals/antim-sanskar/step2.webp',
      },
      {
        step: 3,
        title: 'Garud Puran Paath Recitation',
        description: 'Daily chanting and Hindi explanation of the Garuda Purana at home, illuminating the soul’s journey and bringing solace to the family.',
        image: '/images/rituals/antim-sanskar/step3.webp',
      },
      {
        step: 4,
        title: 'Dasgatra, Ekadasha & Sapindikarana',
        description: '10th to 12th day Pind Daan offerings with barley, black sesame, and kusha grass to form the spiritual body for transit.',
        image: '/images/rituals/antim-sanskar/step4.webp',
      },
      {
        step: 5,
        title: 'Terahwi Shanti Hawan & Brahman Bhojan',
        description: 'The 13th-day concluding purification hawan, feeding 13 Brahmins, Dan-Dakshina, and formally marking the return to normal life.',
        image: '/images/rituals/antim-sanskar/step5.webp',
      },
    ],
    faqs: [
      {
        question: 'Do you arrange Antim Sanskar Pandit on urgent notice in Bangalore?',
        answer: 'Yes. We understand the sensitivity and urgency of bereavement. Pandit ji is available on immediate call across all Bangalore crematoriums including Wilson Garden, Hebbal, Kalpalli, and Panathur.',
      },
      {
        question: 'Do you conduct the entire 13-day death rituals (Terahwi)?',
        answer: 'Yes. We conduct the complete Vedic sequence including Dah Sanskar, Asthi Sanchay, 10th-day Dasgatra, 11th-day Ekadasha, 12th-day Sapindikarana, and 13th-day Terahwi Shanti Hawan with Brahman Bhojan.',
      },
      {
        question: 'Can you arrange the Garud Puran Paath at our Bangalore home?',
        answer: 'Yes, Pandit ji recites the holy Garuda Purana each evening with clear Hindi meaning so the grieving family finds spiritual strength and solace.',
      },
    ],
  },
  {
    slug: 'pitru-paksha-puja-bangalore',
    title: 'Pitar Paksh Puja in Bangalore | Pitru Paksha Tarpan & Shanti Hawan',
    shortTitle: 'Pitar Paksh Puja',
    image: '/images/banners/pitru-paksha-puja.webp',
    tagline: 'Sacred Mahalaya Pitru Tarpan, Tithi Shradh, and Pitra Dosh Nivaran hawan during the holy 16 days of Pitru Paksha.',
    navLabel: 'Pitar Paksh',
    heroTitle: 'Book Pitar Paksh Puja in Bangalore with North Indian Vedic Pandit',
    heroDescription:
      'Seek blessings from ancestors and liberate departed souls during the 16 holy days of Pitru Paksha (Pitar Paksh). Sincere daily Til-Jal Tarpan, Pinda Daan, Sarva Pitru Amavasya Shradh, and Pitra Dosh Shanti Hawan across Bangalore homes.',
    seoTitle: 'Pitar Paksh Puja in Bangalore | Pitru Paksha Tarpan Pandit',
    seoDescription:
      'Book Pitar Paksh Puja in Bangalore (Pitru Paksha). Traditional North Indian Pandit for Mahalaya Tarpan, Pinda Daan, Sarva Pitru Amavasya & Pitra Dosh Hawan.',
    benefits: [
      'Appeases three generations of maternal and paternal ancestors (Pitri, Pitamaha, Prapitamaha).',
      'Removes severe Pitra Dosha causing career stagnation, financial distress, and family disharmony.',
      'Conducted during the highly auspicious 16 lunar days of Bhadrapada / Ashwin Krishna Paksha.',
      'Includes sacred black sesame (Til), Kusha grass, Gangajal, barley flour Pind, and Gau-Gras.',
    ],
    idealFor: [
      'Families observing annual Mahalaya Pitru Paksha (Pitar Paksh) in Bangalore',
      'Individuals with diagnosed Pitru Dosha in their birth horoscope / Janma Kundali',
      'Performing Shradh on the exact lunar Tithi of departed parents or grandparents',
      'Sarva Pitru Amavasya (Mahalaya Amavasya) collective ancestral oblations',
    ],
    includes: [
      'Pandit ji guidance on the exact Tithi, muhurat, and fasting rules for Pitar Paksh',
      'Purification, sacred Kusha ring (Pavitri), and black sesame Til-Jal Tarpan',
      'Preparation of 3 or 5 sacred barley flour Pindas with honey, milk, and ghee',
      'Pitra Hawan, Panchbali (cow, dog, crow, ant, and guest food offering), and Brahman Bhojan',
      'Dakshina, vastra daan, and complete family ashervad',
    ],
    process: [
      'Share the lunar tithi of your ancestors or choose Sarva Pitru Amavasya with your Bangalore location.',
      'Receive the complete preparatory checklist (white flowers, black sesame, barley flour, cow milk).',
      'Pandit ji conducts the authentic North Indian Pitru Tarpan and Pind Daan rituals at your home.',
      'Concludes with Panchbali offerings, Brahmin feeding, and family peace prayers.',
    ],
    steps: [
      {
        step: 1,
        title: 'Kusha Pavitri & Pitru Avahan',
        description: 'Purification, wearing the sacred kusha ring, facing South, and invoking ancestral souls with sacred Vedic mantras.',
        image: '/images/rituals/pitru-paksha/step1.webp',
      },
      {
        step: 2,
        title: 'Deva, Rishi & Divya-Pitru Tarpan',
        description: 'Offering sacred water blended with white barley and black sesame seeds to deities, ancient sages, and family forebears.',
        image: '/images/rituals/pitru-paksha/step2.webp',
      },
      {
        step: 3,
        title: 'Pinda Daan & Kusha Sthapana',
        description: 'Offering consecrated balls of barley, rice, honey, and sesame on beds of sacred kusha grass to nourish ancestral spirits.',
        image: '/images/rituals/pitru-paksha/step3.webp',
      },
      {
        step: 4,
        title: 'Pitra Dosh Shanti Hawan',
        description: 'Offering oblations of kheer, pure cow ghee, and sacred samidha into the holy fire to release past karmic debts.',
        image: '/images/rituals/pitru-paksha/step4.webp',
      },
      {
        step: 5,
        title: 'Panchbali & Brahman Bhojan Daan',
        description: 'Sharing holy food portions with the cow, dog, crow, and ants, followed by respectful Brahmin feast and dakshina.',
        image: '/images/rituals/pitru-paksha/step5.webp',
      },
    ],
    faqs: [
      {
        question: 'What is the significance of performing Puja during Pitar Paksh (Pitru Paksha)?',
        answer: 'During the 16 days of Pitru Paksha, the veil between the physical realm and Pitru Loka is at its thinnest. Rituals performed with sesame and water directly reach ancestors, granting them peace and showering the family with longevity and prosperity.',
      },
      {
        question: 'What if I do not know the exact death tithi of my ancestors?',
        answer: 'If the exact lunar date is unknown, the scriptures advise performing the puja on Sarva Pitru Amavasya (the final day of Pitru Paksha), which covers all departed souls.',
      },
      {
        question: 'Do you provide complete samagri for Pitar Paksh Puja in Bangalore?',
        answer: 'Yes. We provide complete authentic samagri including black sesame (kala til), kusha grass, barley flour, honey, sacred thread, and hawan woods.',
      },
    ],
  },
'''

with open('src/data/pujas.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Griha Pravesh keywords
content = content.replace(
    "title: 'Griha Pravesh Puja in Bangalore',",
    "title: 'Grihapravesh Puja in Bangalore | Griha Pravesh Hindi Pandit',",
)
content = content.replace(
    "shortTitle: 'Griha Pravesh Puja',",
    "shortTitle: 'Grihapravesh Puja',",
)
content = content.replace(
    "seoTitle: 'Griha Pravesh Puja in Bangalore | North Hindi Pandit',",
    "seoTitle: 'Grihapravesh Puja in Bangalore | Griha Pravesh Hindi Pandit',",
)
content = content.replace(
    "seoDescription:\n      'Book Griha Pravesh Puja in Bangalore with North Hindi Pandit for vastu shanti, housewarming rituals, shubh muhurat guidance, and complete puja samagri.',",
    "seoDescription:\n      'Book Grihapravesh Puja in Bangalore (Griha Pravesh). Authentic North Hindi Pandit for Vastu Shanti Hawan, Shubh Muhurat, same-day booking & complete samagri.',",
)

# 2. Update Navagraha keywords to Navgrah Shanti
content = content.replace(
    "title: 'Navagraha & Surya Puja in Bangalore | Grah Shanti Pandit Booking',",
    "title: 'Navgrah Shanti Puja in Bangalore | Navagraha Dosh Nivaran Pandit',",
)
content = content.replace(
    "shortTitle: 'Navagraha & Surya Puja',",
    "shortTitle: 'Navgrah Shanti Puja',",
)
content = content.replace(
    "navLabel: 'Navagraha Puja',",
    "navLabel: 'Navgrah Shanti',",
)
content = content.replace(
    "seoTitle: 'Navagraha Shanti & Surya Puja in Bangalore | Grah Shanti Pandit',",
    "seoTitle: 'Navgrah Shanti Puja in Bangalore | Navagraha Grah Shanti Pandit',",
)
content = content.replace(
    "seoDescription:\n      'Book Navagraha Shanti and Surya Puja in Bangalore with North Hindi Pandit for planetary dosha nivaran, Shani Sade Sati, Aditya Hridaya Stotra, and 9-graha hawan.',",
    "seoDescription:\n      'Book Navgrah Shanti Puja in Bangalore with North Hindi Pandit. 9 Graha Dosh Nivaran, Rahu-Ketu, Shani Sade Sati, Navagraha hawan & samagri at home.',",
)

# 3. Update Shraadh keywords to Shradh Puja
content = content.replace(
    "title: 'Shraadh Puja in Bangalore',",
    "title: 'Shradh Puja in Bangalore | Shraadh, Tarpan & Pind Daan Pandit',",
)
content = content.replace(
    "shortTitle: 'Shraadh Puja',",
    "shortTitle: 'Shradh Puja',",
)
content = content.replace(
    "navLabel: 'Shraadh Puja',",
    "navLabel: 'Shradh Puja',",
)
content = content.replace(
    "seoTitle: 'Shraadh Puja in Bangalore | North Hindi Pandit',",
    "seoTitle: 'Shradh Puja in Bangalore | Shraadh Tarpan & Pind Daan Pandit',",
)
content = content.replace(
    "seoDescription:\n      'Book Shraadh Puja in Bangalore with North Hindi Pandit for Pitru rituals, tithi shraddh, ancestral prayers, and respectful North Indian traditions.',",
    "seoDescription:\n      'Book Shradh Puja in Bangalore (Shraadh). Authentic North Indian Pandit for Varshik Shradh, Tithi Shradh, Pitru Tarpan, Pind Daan & Brahman Bhojan.',",
)

# 4. Insert the 3 new pujas right before `export const pujaMap`
target_marker = 'export const pujaMap = new Map(pujas.map((puja) => [puja.slug, puja]));'
if target_marker in content:
    # insert before the closing bracket of `export const pujas: Puja[] = [`
    last_bracket_idx = content.rfind('];', 0, content.find(target_marker))
    if last_bracket_idx != -1:
        updated_content = content[:last_bracket_idx] + new_pujas_code + content[last_bracket_idx:]
        with open('src/data/pujas.ts', 'w', encoding='utf-8') as f:
            f.write(updated_content)
        print("Successfully updated src/data/pujas.ts with all 9 target keyword optimizations!")
    else:
        print("Could not find closing bracket before pujaMap.")
else:
    print("Could not find pujaMap marker in content.")
