export type PujaStep = {
  step: number;
  title: string;
  description: string;
  image: string;
};

export type Puja = {
  slug: string;
  title: string;
  shortTitle: string;
  image: string;
  tagline: string;
  navLabel: string;
  heroTitle: string;
  heroDescription: string;
  seoTitle: string;
  seoDescription: string;
  benefits: string[];
  idealFor: string[];
  includes: string[];
  process: string[];
  steps: PujaStep[];
  faqs: { question: string; answer: string }[];
};

export const phoneNumber = '6206471543';
export const whatsappNumber = '916206471543';

export const getWhatsAppLink = (service: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Namaste, I want to book ${service} in Bangalore.\n\nName:\nLocation:\nPreferred Date:\nAdditional Details:`
  )}`;

export const pujas: Puja[] = [
  {
    slug: 'griha-pravesh-puja-bangalore',
    title: 'Griha Pravesh Puja in Bangalore',
    shortTitle: 'Griha Pravesh Puja',
    image: '/images/banners/griha-pravesh-puja.webp',
    tagline: 'A sacred housewarming puja for peace, prosperity, and auspicious beginnings in your new home.',
    navLabel: 'Griha Pravesh',
    heroTitle: 'Book Griha Pravesh Puja in Bangalore with Experienced North Hindi Pandit',
    heroDescription:
      'Welcome your family into your new home with authentic shubh muhurat guidance, pure Vedic mantras, dwar puja, kalash sthapana, vastu shanti hawan, and complete samagri support across Bangalore.',
    seoTitle: 'Griha Pravesh Puja in Bangalore | North Hindi Pandit',
    seoDescription:
      'Book Griha Pravesh Puja in Bangalore with North Hindi Pandit for vastu shanti, housewarming rituals, shubh muhurat guidance, and complete puja samagri.',
    benefits: [
      'Brings divine blessings, positive energy, and spiritual harmony into your new residence.',
      'Includes authentic Vastu Shanti and Navagraha Hawan before shifting.',
      'Conducted with traditional North Indian vidhi and clear Hindi explanations for the family.',
      'Available for apartments, villas, independent houses, and office spaces across Bangalore.',
    ],
    idealFor: [
      'New flat possession and first entry into the home',
      'Housewarming after renovation or interior completion',
      'Families moving to Bangalore wanting authentic North Indian rituals',
      'Office openings, commercial spaces, and studio launches',
    ],
    includes: [
      'Pandit ji guidance for auspicious shubh muhurat and preparation checklist',
      'Dwar puja, Kalash sthapana, Ganesh avahan, and Navagraha prayers',
      'Sacred Vastu Shanti Hawan with herbal ahuti',
      'Complete puja samagri support based on the selected package',
    ],
    process: [
      'Share your Bangalore location, flat details, and preferred date on WhatsApp or call.',
      'Receive guidance on auspicious muhurat timings and a simple setup checklist.',
      'Pandit ji arrives on time and conducts the complete 5-stage housewarming vidhi.',
      'Concludes with Maha Aarti, prasad distribution, and elder family blessings.',
    ],
    steps: [
      {
        step: 1,
        title: 'Dwar Puja & Toran Sthapana',
        description:
          'Sacred worship at the threshold with mango leaf toran, swastika, and kalash before the auspicious first entry into the home.',
        image: '/images/rituals/griha-pravesh/step1-dwar-puja.webp',
      },
      {
        step: 2,
        title: 'Vastu Purusha Mandala Pujan',
        description:
          'Invoking the 81-pada Vastu Purusha and directional deities with sacred grain mandalas to eliminate architectural doshas.',
        image: '/images/rituals/griha-pravesh/step2-vastu-mandala.webp',
      },
      {
        step: 3,
        title: 'Dugdh Ubalan (Milk Boiling) Vidhi',
        description:
          'Traditional boiling of pure cow milk in a new vessel until it overflows, symbolising abundance, peace, and eternal prosperity.',
        image: '/images/rituals/griha-pravesh/step3-milk-boiling.webp',
      },
      {
        step: 4,
        title: 'Vastu Shanti & Navagraha Hawan',
        description:
          'Vedic fire ceremony with 108 mantra ahutis, pure ghee, dry fruits, and sacred wood to purify the home atmosphere.',
        image: '/images/rituals/griha-pravesh/step4-vastu-havan.webp',
      },
      {
        step: 5,
        title: 'Maha Aarti & Family Blessings',
        description:
          'Concluding camphor aarti with all family members, sprinkling holy kalash water in all corners, and sharing sweet prasad.',
        image: '/images/rituals/griha-pravesh/step5-maha-aarti.webp',
      },
    ],
    faqs: [
      {
        question: 'Do you provide Griha Pravesh Puja for flats and apartments in Bangalore?',
        answer:
          'Yes. We provide Griha Pravesh Puja for apartments, gated communities, villas, independent houses, and office spaces throughout Bangalore.',
      },
      {
        question: 'Can you help with same-day or urgent housewarming booking?',
        answer:
          'Yes, same-day and urgent bookings can be accommodated depending on shubh muhurat availability and pandit scheduling in your area.',
      },
    ],
  },
  {
    slug: 'satyanarayan-puja-bangalore',
    title: 'Satyanarayan Puja in Bangalore',
    shortTitle: 'Satyanarayan Puja',
    image: '/images/banners/satyanarayan-puja.webp',
    tagline: 'A sacred Vishnu puja for family peace, prosperity, and spiritual thanksgiving.',
    navLabel: 'Satyanarayan',
    heroTitle: 'Book Satyanarayan Puja in Bangalore for Family Peace and Blessings',
    heroDescription:
      'Arrange complete Shri Satyanarayan Katha and puja at home with Pandit Nilesh Kumar Pandey. Ideal for monthly Purnima, birthdays, anniversaries, housewarmings, and special family milestones across Bangalore.',
    seoTitle: 'Satyanarayan Puja in Bangalore | North Hindi Pandit',
    seoDescription:
      'Book Satyanarayan Puja in Bangalore with North Hindi Pandit for complete Katha, Vishnu puja, prasad rituals, and authentic North Indian vidhi at home.',
    benefits: [
      'Brings peace of mind, family harmony, spiritual gratitude, and divine prosperity.',
      'Ideal for Purnima, Sankranti, new business milestones, and birthdays.',
      'Traditional 5-chapter Katha recited and explained clearly in Hindi for all attendees.',
      'Convenient home service across Bangalore with optional complete samagri.',
    ],
    idealFor: [
      'Monthly Purnima Satyanarayan vrat and puja',
      'Housewarming and griha shanti ceremonies',
      'Business milestones, career promotions, and family thanksgiving',
      'Birthday, wedding anniversary, and naming celebrations',
    ],
    includes: [
      'Ganesh puja, Navagraha sankalp, and Kalash sthapana',
      'Full Satyanarayan Katha recitation with Vishnu sahasranama chanting',
      'Aarti, panchamrit distribution, and holy sheera prasad offering',
      'Puja samagri checklist and preparation support',
    ],
    process: [
      'Select your preferred date and share your Bangalore locality on WhatsApp or call.',
      'Receive a simple checklist for altar setup, flowers, and prasad ingredients.',
      'Pandit ji conducts the complete pujan, Katha recitation, and hawan.',
      'Ceremony finishes with family aarti and sanctified prasad distribution.',
    ],
    steps: [
      {
        step: 1,
        title: 'Altar & Mandap Sthapana',
        description:
          'Decorating the sacred wooden choki with yellow silk cloth, fresh banana stems, kalash, and placing Lord Vishnu murti.',
        image: '/images/rituals/satyanarayan/step1-altar-mandap.webp',
      },
      {
        step: 2,
        title: 'Panchamrit Snan & Vishnu Pujan',
        description:
          'Bathing the sacred idol with milk, curd, honey, ghee, and sugar water accompanied by fresh tulsi leaves and Vedic hymns.',
        image: '/images/rituals/satyanarayan/step2-panchamrit-snan.webp',
      },
      {
        step: 3,
        title: 'Shri Satyanarayan Katha Recitation',
        description:
          'Reciting the 5 sacred chapters of the Satyanarayan Mahatmya from the Skanda Purana with clear Hindi explanations.',
        image: '/images/rituals/satyanarayan/step3-katha-recitation.webp',
      },
      {
        step: 4,
        title: 'Hawan & Sacred Mantra Ahuti',
        description:
          'Performing sacred fire offerings with hawan samagri, camphor, and gugal to invoke divine grace for family well-being.',
        image: '/images/rituals/satyanarayan/step4-havan-ahuti.webp',
      },
      {
        step: 5,
        title: 'Sheera Prasad & Maha Aarti',
        description:
          'Offering the traditional panjiri / roasted wheat flour sheera prasad with bananas and concluding with a devotional aarti.',
        image: '/images/rituals/satyanarayan/step5-prasad-aarti.webp',
      },
    ],
    faqs: [
      {
        question: 'Do you perform Satyanarayan Katha in Hindi?',
        answer:
          'Yes. The Katha is recited in Sanskrit and explained in fluent Hindi so all family members can understand and follow every sacred chapter comfortably.',
      },
      {
        question: 'Is puja samagri available with the booking?',
        answer:
          'Yes. We can provide a simple samagri list or arrange the entire samagri package directly according to your preference.',
      },
    ],
  },
  {
    slug: 'ganesh-puja-bangalore',
    title: 'Ganesh Puja in Bangalore',
    shortTitle: 'Ganesh Puja',
    image: '/images/banners/ganesh-puja.webp',
    tagline: 'Invoke Lord Ganesha before every auspicious start for wisdom, prosperity, and obstacle removal.',
    navLabel: 'Ganesh Puja',
    heroTitle: 'Book Ganesh Puja in Bangalore for Auspicious New Beginnings',
    heroDescription:
      'Perform authentic Ganesh Puja for home, new office, business launch, vehicle blessing, education milestones, or Ganesh Chaturthi with an experienced North Hindi Pandit in Bangalore.',
    seoTitle: 'Ganesh Puja in Bangalore | North Hindi Pandit',
    seoDescription:
      'Book Ganesh Puja in Bangalore with North Hindi Pandit for home, office, new business, vehicle, education, and auspicious start ceremonies.',
    benefits: [
      'Seeks blessings of Vighnaharta to remove hurdles and grant auspicious beginnings.',
      'Ideal for home ceremonies, office inaugurations, and shop openings.',
      'Peaceful, devotional vidhi performed with proper Ganapati Atharvashirsha chanting.',
      'Flexible booking with complete samagri guidance across Bangalore.',
    ],
    idealFor: [
      'New business launch, shop opening, and corporate office inauguration',
      'Vehicle delivery or first-time driving blessing ceremony',
      'Education-related prayers before exams, degrees, or school admissions',
      'Ganesh Chaturthi and monthly Sankashti Chaturthi home celebrations',
    ],
    includes: [
      'Ganapati avahan, shodashopachara pujan, mantra chanting, and aarti',
      'Setup guidance for murti, fresh durva grass, and modak offerings',
      'Family participation during sankalp, pushpanjali, and aarti',
      'Optional combination with Vastu or new venture rituals',
    ],
    process: [
      'Send your preferred date, Bangalore address, and purpose of puja via WhatsApp or call.',
      'Receive booking confirmation and simple setup instructions.',
      'Pandit ji conducts the 5-step Ganesh puja with traditional devotion.',
      'Finish with modak prasad, aarti, and divine blessings.',
    ],
    steps: [
      {
        step: 1,
        title: 'Ganapati Avahan & Sthapana',
        description:
          'Consecration of the idol on a clean altar, invoking Lord Ganesha with Vedic mantras and applying chandan tilak.',
        image: '/images/rituals/ganesh-puja/step1-ganesh-avahan.webp',
      },
      {
        step: 2,
        title: 'Sankalp & Mandala Pujan',
        description:
          'Taking sacred sankalp with family names and gotra, invoking blessings on colored rice mandalas for auspicious success.',
        image: '/images/rituals/ganesh-puja/step2-mandala-sankalp.webp',
      },
      {
        step: 3,
        title: '21 Durva Grass & Modak Arpan',
        description:
          'Offering 21 blades of sacred green durva grass and fresh steamed modaks with chanting of the 108 names of Ganapati.',
        image: '/images/rituals/ganesh-puja/step3-durva-modak-puja.webp',
      },
      {
        step: 4,
        title: 'Ganesh Homa & Ahuti Vidhi',
        description:
          'Performing sacred fire offerings with gugal, pure ghee, and modak samagri to invoke obstacle-free prosperity.',
        image: '/images/rituals/ganesh-puja/step4-ganesh-havan.webp',
      },
      {
        step: 5,
        title: 'Modak Maha Aarti & Ashirwad',
        description:
          'Devotional singing of Sukhkarta Dukhharta aarti, distributing prasad, and receiving blessings for all participants.',
        image: '/images/rituals/ganesh-puja/step5-modak-maha-aarti.webp',
      },
    ],
    faqs: [
      {
        question: 'Can Ganesh Puja be done for office or shop opening in Bangalore?',
        answer:
          'Yes. We provide complete Ganesh Puja and Lakshmi-Kuber pujan for offices, showrooms, retail shops, clinics, and IT workspaces across Bangalore.',
      },
      {
        question: 'Do you provide North Indian style Ganesh Puja?',
        answer:
          'Yes. The ceremony is performed according to authentic North Indian customs with Hindi guidance for the entire family.',
      },
    ],
  },
  {
    slug: 'maha-mrityunjaya-jaap-bangalore',
    title: 'Maha Mrityunjaya Jaap in Bangalore',
    shortTitle: 'Maha Mrityunjaya Jaap',
    image: '/images/banners/maha-mrityunjaya-jaap.webp',
    tagline: 'A sacred Shiva mantra ritual for healing prayers, protection, peace, and spiritual strength.',
    navLabel: 'Maha Mrityunjaya',
    heroTitle: 'Book Maha Mrityunjaya Jaap in Bangalore for Health, Protection, and Peace',
    heroDescription:
      'Arrange authentic Maha Mrityunjaya Jaap and Shiva prayers at home in Bangalore for healing intentions, protection from negativity, and spiritual comfort during challenging life phases.',
    seoTitle: 'Maha Mrityunjaya Jaap in Bangalore | North Hindi Pandit',
    seoDescription:
      'Book Maha Mrityunjaya Jaap in Bangalore with North Hindi Pandit for Shiva mantra chanting, healing prayers, spiritual protection, and family peace at home.',
    benefits: [
      'Performed for spiritual strength, health recovery intentions, and inner peace of mind.',
      'Disciplined chanting of the sacred 32-syllable Tryambakam mantra with rudraksha mala.',
      'Comforting and uplifting ritual for family well-being during difficult life phases.',
      'Available at homes and private spaces across Bangalore with guided participation.',
    ],
    idealFor: [
      'Health recovery and well-being prayers for loved ones',
      'Protection, mental peace, and relief during stressful periods',
      'Shiva bhakti, planetary dosha shanti, and spiritual purification',
      'Family sankalp for longevity, positive vibrations, and divine grace',
    ],
    includes: [
      'Sankalp and Shivalinga invocation before mantra recitation',
      'Disciplined Maha Mrityunjaya mantra japa with rudraksha mala',
      'Samput hawan with sacred herbs, pure ghee, and gugal',
      'Concluding Shiva aarti and tying the holy protective raksha sutra',
    ],
    process: [
      'Share the purpose, family sankalp names, and date of the jaap via WhatsApp or call.',
      'Receive simple preparation guidance regarding Shiva offerings and setup.',
      'Pandit ji conducts the focused chanting, abhishek, and hawan.',
      'Ceremony concludes with aarti, charnamrit, and protective blessings.',
    ],
    steps: [
      {
        step: 1,
        title: 'Shiva Lingam & Yantra Sthapana',
        description:
          'Consecrating the sacred Shivalinga and Maha Mrityunjaya Yantra on a brass peeth with holy gangajal and chandan.',
        image: '/images/rituals/maha-mrityunjaya/step1-yantra-altar.webp',
      },
      {
        step: 2,
        title: 'Rudraksha Mala Japa',
        description:
          'Chanting the powerful 32-syllable Vedic mantra with dedicated 108-bead rudraksha malas for divine healing energy.',
        image: '/images/rituals/maha-mrityunjaya/step2-rudraksha-japa.webp',
      },
      {
        step: 3,
        title: 'Bilva Patra & Bhasma Archana',
        description:
          'Offering tri-leaf green bilva patra, sacred bhasma, white flowers, and milk to Lord Shiva with every mantra cycle.',
        image: '/images/rituals/maha-mrityunjaya/step3-bilva-archana.webp',
      },
      {
        step: 4,
        title: 'Samput Hawan & Mantra Ahuti',
        description:
          'Performing sacred fire offerings with samidha wood, pure cow ghee, and specialized Ayurvedic medicinal herbs.',
        image: '/images/rituals/maha-mrityunjaya/step4-samput-havan.webp',
      },
      {
        step: 5,
        title: 'Maha Aarti & Raksha Sutra',
        description:
          'Concluding with Shiva aarti, tying the sacred protective thread on the wrists of all family members, and blessing the home.',
        image: '/images/rituals/maha-mrityunjaya/step5-aarti-blessing.webp',
      },
    ],
    faqs: [
      {
        question: 'Can Maha Mrityunjaya Jaap be performed at home in Bangalore?',
        answer:
          'Yes. We provide complete home booking across Bangalore for families seeking sincere Shiva mantra chanting and guided participation.',
      },
      {
        question: 'Do you guide what items are needed for the jaap?',
        answer:
          'Yes. We share a clear checklist covering milk, bel patra, flowers, and holy water, and can arrange the hawan samagri directly.',
      },
    ],
  },
  {
    slug: 'bhoomi-puja-bangalore',
    title: 'Bhoomi Puja in Bangalore',
    shortTitle: 'Bhoomi Puja',
    image: '/images/banners/bhoomi-puja.webp',
    tagline: 'Begin construction, renovation, and plot development with sacred Vedic blessings.',
    navLabel: 'Bhoomi Puja',
    heroTitle: 'Book Bhoomi Puja in Bangalore Before Construction or Site Work',
    heroDescription:
      'Perform authentic Bhoomi Puja for residential plots, independent villas, commercial projects, and renovations with Pandit Nilesh Kumar Pandey across Bangalore.',
    seoTitle: 'Bhoomi Puja in Bangalore | North Hindi Pandit',
    seoDescription:
      'Book Bhoomi Puja in Bangalore with North Hindi Pandit for plot blessing, construction start rituals, Vastu prayers, and sacred land worship.',
    benefits: [
      'Seeks blessings of Mother Earth before digging, excavation, or foundation laying.',
      'Ideal for residential plots, villas, apartments, office build-outs, and renovations.',
      'Traditional North Indian vidhi with clear guidance for families, architects, and builders.',
      'Helps establish a positive, stable, and auspicious spiritual foundation for the building.',
    ],
    idealFor: [
      'Vacant residential plot puja before construction begins',
      'Villa foundation, commercial construction, and apartment ground-breaking',
      'Office, shop, showroom, and retail space interior fit-out start',
      'Land blessing before major renovation or property extension',
    ],
    includes: [
      'Ganesh puja, Bhoomi Devi avahan, and Navaratna sthapana',
      'Vastu-oriented directional prayers and family sankalp',
      'Foundation hawan and site sanctification rituals',
      'Guidance on shubh muhurat timing and site setup arrangements',
    ],
    process: [
      'Share your Bangalore site address and preferred date on WhatsApp or call.',
      'Receive confirmation along with basic site cleaning and setup guidance.',
      'Pandit ji performs the 5-stage Bhoomi Puja with Vedic mantras.',
      'Concludes with laying the first sanctified brick and family blessings.',
    ],
    steps: [
      {
        step: 1,
        title: 'Site Sanctification & Kalash Sthapana',
        description:
          'Cleaning the northeast (Ishanya) corner of the plot and setting up the sacred brass kalash with mango leaves and coconut.',
        image: '/images/rituals/bhoomi-puja/step1-site-sthapana.webp',
      },
      {
        step: 2,
        title: 'Bhoomi Devi & Vastu Avahan',
        description:
          'Invoking Mother Earth and the directional deities with flower offerings and Vedic mantras for stability and protection.',
        image: '/images/rituals/bhoomi-puja/step2-bhoomi-devi-avahan.webp',
      },
      {
        step: 3,
        title: 'Navratna & Foundation Stone Puja',
        description:
          'Placing 9 sacred gems, silver snake idol, and the first foundation brick with kumkum, haldi, and holy water.',
        image: '/images/rituals/bhoomi-puja/step3-foundation-puja.webp',
      },
      {
        step: 4,
        title: 'Vastu & Kuber Hawan',
        description:
          'Sacred fire offerings to remove subterranean energies and invoke prosperity and safety for all construction workers.',
        image: '/images/rituals/bhoomi-puja/step4-vastu-kuber-havan.webp',
      },
      {
        step: 5,
        title: 'Shubh Aarti & Coconut Breaking',
        description:
          'Breaking the auspicious coconut, performing aarti, distributing sweets, and inaugurating the site work with positive energy.',
        image: '/images/rituals/bhoomi-puja/step5-shubh-aarti.webp',
      },
    ],
    faqs: [
      {
        question: 'Do you provide Bhoomi Puja for construction sites in Bangalore?',
        answer:
          'Yes. We perform Bhoomi Puja for residential sites, builder projects, individual bungalows, and commercial spaces throughout Bangalore.',
      },
      {
        question: 'Can Bhoomi Puja be combined with Vastu-related rituals?',
        answer:
          'Yes. The ceremony naturally integrates Vastu Shanti and Navagraha prayers to ensure harmonious development.',
      },
    ],
  },
  {
    slug: 'marriage-puja-bangalore',
    title: 'Marriage Puja in Bangalore',
    shortTitle: 'Marriage Puja',
    image: '/images/banners/marriage-puja.webp',
    tagline: 'Traditional North Indian wedding rituals conducted with Vedic precision, warmth, and dignity.',
    navLabel: 'Marriage Puja',
    heroTitle: 'Book North Indian Marriage Puja in Bangalore with Hindi-Speaking Pandit',
    heroDescription:
      'From engagement and tilak ceremonies to wedding day vidhi, book an experienced North Indian pandit in Bangalore for varmala, kanyadaan, sacred pheras, saptapadi, and hawan.',
    seoTitle: 'Marriage Puja in Bangalore | North Hindi Pandit',
    seoDescription:
      'Book Marriage Puja in Bangalore with North Hindi Pandit for North Indian wedding rituals, engagement puja, pheras, havan, and complete shaadi vidhi.',
    benefits: [
      'Authentic North Indian wedding customs performed according to Vedic Vivah Sanskar.',
      'Fluent Hindi guidance so the bride, groom, and both families understand every ceremony.',
      'Covers pre-wedding rituals: sagai, tilak, haldi, mandap puja, and griha pravesh after marriage.',
      'Calm, dignified, and patient conduct ensuring a memorable ceremony.',
    ],
    idealFor: [
      'North Indian wedding ceremonies in Bangalore banquet halls and resorts',
      'Home weddings, intimate temple weddings, and destination-style celebrations',
      'Pre-wedding sagai, tilak, roka, and Ganesh pujan rituals',
      'Inter-cultural weddings requiring clear explanations in Hindi and English',
    ],
    includes: [
      'Wedding ritual timeline planning and shubh lagna timing coordination',
      'Varmala, kanyadaan, mangalsutra dharan, sacred pheras, and saptapadi',
      'Hawan with pure ghee and auspicious samagri',
      'Dignified guidance for the couple, parents, and wedding event teams',
    ],
    process: [
      'Share your wedding date, venue in Bangalore, and ceremony timings.',
      'Coordinate the ritual flow, samagri checklist, and required stage setup.',
      'Pandit ji conducts the complete Vivah Sanskar with grace and warmth.',
      'The ceremony concludes with elder blessings, sindoor daan, and congratulations.',
    ],
    steps: [
      {
        step: 1,
        title: 'Mandap Arrival & Jaimala',
        description:
          'Welcoming the groom with dwarchar, toran blessing, and the auspicious mutual exchange of floral garlands (jaimala).',
        image: '/images/rituals/marriage/step1-mandap-varmala.webp',
      },
      {
        step: 2,
        title: 'Kanyadaan & Hastamelap',
        description:
          'The sacred joining of hands by the parents, tying the holy granthi knot accompanied by sacred Vedic mantras.',
        image: '/images/rituals/marriage/step2-kanyadaan.webp',
      },
      {
        step: 3,
        title: 'Agni Parikrama (Sacred Pheras)',
        description:
          'Walking together around the holy witness agni fire with commitment to dharma, artha, kama, and moksha.',
        image: '/images/rituals/marriage/step3-agni-parikrama.webp',
      },
      {
        step: 4,
        title: 'Saptapadi (7 Sacred Vows)',
        description:
          'Taking 7 sacred steps together on northern betel leaves, promising mutual respect, health, prosperity, and companionship.',
        image: '/images/rituals/marriage/step4-saptapadi-vows.webp',
      },
      {
        step: 5,
        title: 'Sindoor Daan & Mangalsutra',
        description:
          'The groom anoints the bride with vermillion (sindoor) and ties the sacred mangalsutra, followed by elder family blessings.',
        image: '/images/rituals/marriage/step5-sindoor-mangalsutra.webp',
      },
    ],
    faqs: [
      {
        question: 'Do you perform complete North Indian wedding rituals in Bangalore?',
        answer:
          'Yes. We provide complete North Indian Vivah Sanskar services including jaimala, kanyadaan, pheras, saptapadi, and vidai rituals across Bangalore.',
      },
      {
        question: 'Can you perform marriage puja at homes, hotels, or banquet halls?',
        answer:
          'Yes. We perform wedding ceremonies at private residences, hotels, banquet halls, community centres, and temples throughout Bangalore.',
      },
    ],
  },
  {
    slug: 'rudrabhishek-puja-bangalore',
    title: 'Rudrabhishek Puja in Bangalore',
    shortTitle: 'Rudrabhishek Puja',
    image: '/images/banners/rudrabhishek-puja.webp',
    tagline: 'A sacred Shiva abhishek for peace, strength, positivity, and divine protection.',
    navLabel: 'Rudrabhishek',
    heroTitle: 'Book Rudrabhishek Puja in Bangalore with Trusted Shiv Bhakt Pandit',
    heroDescription:
      'Perform authentic Rudrabhishek Puja at home in Bangalore for spiritual upliftment, family peace, obstacle removal, and devotional worship of Lord Shiva.',
    seoTitle: 'Rudrabhishek Puja in Bangalore | North Hindi Pandit',
    seoDescription:
      'Book Rudrabhishek Puja in Bangalore with North Hindi Pandit for Shiva abhishek, mantra chanting, havan, and family blessings at home.',
    benefits: [
      'Dedicated Shiva puja performed with deep devotion and Shri Rudram chanting.',
      'Favored for inner peace, negativity removal, and spiritual cleansing.',
      'Ideal for Shravan month, Pradosham, Mondays, Mahashivratri, and special occasions.',
      'Comfortable doorstep home service across Bangalore with Hindi guidance.',
    ],
    idealFor: [
      'Shravan month and Pradosh vrat Shiva puja at home',
      'Mahashivratri and Monday special devotional prayers',
      'Family peace, negativity removal, and health intention ceremonies',
      'Personal spiritual devotion and Shiva bhakti occasions',
    ],
    includes: [
      'Shiva sankalp, panchamrit abhishek, Namakam chanting, and aarti',
      'Guidance for milk, gangajal, bel patra, dhatura, and white flowers',
      'Sacred hawan support depending on the chosen package',
      'Guided participation for all family members during aarti and charnamrit',
    ],
    process: [
      'Send your Bangalore address and preferred puja date on WhatsApp or call.',
      'Receive a simple preparation checklist and booking confirmation.',
      'Pandit ji conducts the 5-step Rudrabhishek with authentic Shiva vidhi.',
      'Concludes with karpoor aarti, charnamrit distribution, and blessings.',
    ],
    steps: [
      {
        step: 1,
        title: 'Shivalinga Sthapana & Avahan',
        description:
          'Consecrating the sacred brass and stone Shivalinga on a brass peeth with pure gangajal, chandan, and incense.',
        image: '/images/rituals/rudrabhishek/step1-shivling-sthapana.webp',
      },
      {
        step: 2,
        title: 'Panchamrit & Gangajal Abhishek',
        description:
          'Continuous sacred stream of milk, curd, honey, ghee, sugarcane juice, and holy water while chanting Vedic mantras.',
        image: '/images/rituals/rudrabhishek/step2-abhishekam-snan.webp',
      },
      {
        step: 3,
        title: 'Bilva Patra & Bhasma Shringaar',
        description:
          'Adorning Mahadev with fresh tri-leaf bilva patra, dhatura flowers, white kaner, and sacred tripundra bhasma.',
        image: '/images/rituals/rudrabhishek/step3-bilva-bhasma.webp',
      },
      {
        step: 4,
        title: 'Shiva Hawan & Namakam Ahuti',
        description:
          'Performing sacred fire offerings with hawan herbs and pure ghee, chanting Shri Rudram for peace and positivity.',
        image: '/images/rituals/rudrabhishek/step4-shiva-havan.webp',
      },
      {
        step: 5,
        title: 'Karpoor Maha Aarti & Ashirwad',
        description:
          'Glowing camphor aarti with family members, receiving holy charnamrit, and seeking Lord Shiva’s eternal blessings.',
        image: '/images/rituals/rudrabhishek/step5-karpura-aarti.webp',
      },
    ],
    faqs: [
      {
        question: 'Can Rudrabhishek Puja be performed at home in Bangalore?',
        answer:
          'Yes. We provide complete home Rudrabhishek Puja services across Bangalore for families and devotees seeking Lord Shiva’s blessings.',
      },
      {
        question: 'Is this puja available during Shravan month?',
        answer:
          'Yes. Rudrabhishek Puja is highly requested during Shravan month and Mondays; early date reservation is recommended.',
      },
    ],
  },
  {
    slug: 'shraadh-puja-bangalore',
    title: 'Shraadh Puja in Bangalore',
    shortTitle: 'Shraadh Puja',
    image: '/images/banners/shraadh-puja.webp',
    tagline: 'Respectful ancestral rituals performed with sincerity, tradition, and proper Vedic guidance.',
    navLabel: 'Shraadh Puja',
    heroTitle: 'Book Shraadh Puja in Bangalore with Experienced North Indian Pandit',
    heroDescription:
      'Arrange Shraadh, Tarpan, Pind Daan, and Pitru-related ceremonies in Bangalore with a respectful Hindi-speaking pandit who conducts the rituals following North Indian traditions.',
    seoTitle: 'Shraadh Puja in Bangalore | North Hindi Pandit',
    seoDescription:
      'Book Shraadh Puja in Bangalore with North Hindi Pandit for Pitru rituals, tithi shraddh, ancestral prayers, and respectful North Indian vidhi at home.',
    benefits: [
      'Conducted with sincerity, reverence, and proper ancestral ritual discipline.',
      'Guided calmly for families observing annual tithi Shraadh or Pitru Paksha.',
      'Suitable for home-based ceremonies or sacred private venues across Bangalore.',
      'Clear Hindi guidance for sankalp, pinda preparations, and family participation.',
    ],
    idealFor: [
      'Annual tithi Shraadh ceremony at home in Bangalore',
      'Pitru Paksha (Mahalaya) ancestral rituals and tarpan',
      'Pind Daan style home arrangements with sacred kusha and til',
      'Families seeking respectful North Indian vidhi and calm guidance',
    ],
    includes: [
      'Pandit ji guidance for ritual timing, kusha grass, and preparation',
      'Ancestral sankalp, tithi prayers, and Pind Daan vidhi',
      'Tarpan with gangajal, barley, and black sesame seeds',
      'A calm, respectful, and family-sensitive ceremony experience',
    ],
    process: [
      'Share the tithi, date, and Bangalore location for booking via WhatsApp or call.',
      'Receive a simple checklist of required items (kusha, til, flowers, satvik offerings).',
      'Pandit ji performs the 5-stage ancestral ritual with full sincerity.',
      'Concludes with brahman bhojan dakshina and family peace prayers.',
    ],
    steps: [
      {
        step: 1,
        title: 'Pitru Sankalp & Purvaja Avahan',
        description:
          'The family head sits facing south, holding sacred kusha grass and water to take solemn sankalp for ancestral peace.',
        image: '/images/rituals/shraadh/step1-pitru-sankalp.webp',
      },
      {
        step: 2,
        title: 'Kusha & Til Sthapana',
        description:
          'Arranging sacred black sesame seeds (til), barley grains, and darbha grass on fresh banana leaves with Vedic mantras.',
        image: '/images/rituals/shraadh/step2-kusha-til-sthapana.webp',
      },
      {
        step: 3,
        title: 'Pinda Daan Ceremony',
        description:
          'Preparing and offering sacred cooked rice, honey, and ghee pindas to honour three generations of ancestors.',
        image: '/images/rituals/shraadh/step3-pinda-daan.webp',
      },
      {
        step: 4,
        title: 'Tarpan & Visarjan Rituals',
        description:
          'Offering holy water oblations with gangajal and black sesame seeds from fingertips for the soul’s peace and liberation.',
        image: '/images/rituals/shraadh/step4-tarpan-visarjan.webp',
      },
      {
        step: 5,
        title: 'Brahman Bhojan & Family Ashirwad',
        description:
          'Offering dakshina, satvik meal offerings (panchagavya), and receiving ancestral blessings for lineage harmony.',
        image: '/images/rituals/shraadh/step5-brahman-bhojan-blessings.webp',
      },
    ],
    faqs: [
      {
        question: 'Do you perform Shraadh Puja at home in Bangalore?',
        answer:
          'Yes. We perform Shraadh Puja, annual tithi shraddh, and Pitru Paksha tarpan ceremonies at home across Bangalore with proper North Indian traditions.',
      },
      {
        question: 'Can you guide the family on the required preparations?',
        answer:
          'Yes. We guide families with a clear preparation checklist covering satvik food, kusha grass, gangajal, and black sesame seeds before the ceremony.',
      },
    ],
  },
  {
    slug: 'hanuman-puja-bangalore',
    title: 'Hanuman Puja in Bangalore | Sunderkand Paath Pandit',
    shortTitle: 'Hanuman Puja & Sunderkand',
    image: '/images/banners/hanuman-puja.webp',
    tagline: 'Sacred worship of Sankat Mochan Lord Hanuman for strength, protection, and overcoming life obstacles.',
    navLabel: 'Hanuman Puja',
    heroTitle: 'Book Hanuman Puja & Sunderkand Paath in Bangalore with Experienced Hindi Pandit',
    heroDescription:
      'Invite divine courage, peace, and spiritual protection into your home with authentic Sunderkand Paath, Bajrang Baan, Hanuman Chalisa, sacred sindoor arpan, and havan vidhi across Bangalore.',
    seoTitle: 'Hanuman Puja in Bangalore | Sunderkand Paath Pandit',
    seoDescription:
      'Book authentic Hanuman Puja and Sunderkand Paath in Bangalore with North Hindi Pandit. Includes Bajrang Baan, Sindoor Arpan, Hawan, and complete samagri support.',
    benefits: [
      'Removes negative energies, planetary afflictions (Shani dosha), and fear.',
      'Brings peace of mind, physical vitality, and spiritual strength to the entire family.',
      'Conducted with authentic Awadhi and Sanskrit chhandas with musical accompaniment where requested.',
      'Available for home ceremonies, Tuesdays, Saturdays, and Hanuman Jayanti.',
    ],
    idealFor: [
      'Tuesdays and Saturdays special bhakti puja at home',
      'Overcoming chronic obstacles, health troubles, or mental stress',
      'New house or business protection rituals',
      'Hanuman Jayanti and spiritual thanksgiving',
    ],
    includes: [
      'Pandit ji guidance for altar preparation and shubh muhurat',
      'Sankalp, Hanuman Avahan, and sacred Sindoor Shringaar',
      'Complete Sunderkand Paath, Bajrang Baan, and Hanuman Chalisa recitation',
      'Sacred Hanuman Hawan with guggul and pure ghee',
      'Boondi laddu bhog, Maha Aarti, and family blessings',
    ],
    process: [
      'Share your Bangalore location and preferred date on WhatsApp or call.',
      'Receive the puja preparation checklist and timing confirmation.',
      'Pandit ji arrives on time and conducts the sacred 5-stage Hanuman vidhi.',
      'Concludes with Aarti, prasad distribution, and raksha sutra.',
    ],
    steps: [
      {
        step: 1,
        title: 'Sankalp & Hanuman Avahan',
        description: 'Taking sacred vow with gangajal and invoking Lord Hanuman onto the consecrated peetham.',
        image: '/images/rituals/hanuman-puja/step1.webp',
      },
      {
        step: 2,
        title: 'Sindoor & Chameli Tel Arpan',
        description: 'Offering sacred chola of pure orange sindoor and fragrant chameli oil along with red flowers.',
        image: '/images/rituals/hanuman-puja/step2.webp',
      },
      {
        step: 3,
        title: 'Sunderkand & Bajrang Baan Paath',
        description: 'Devotional recitation of Goswami Tulsidas ji’s sacred Sunderkand and powerful Bajrang Baan.',
        image: '/images/rituals/hanuman-puja/step3.webp',
      },
      {
        step: 4,
        title: 'Sacred Hanuman Hawan',
        description: 'Offering sacred herbal ahuti with guggul, camphor, and pure ghee into the consecrated hawan kund.',
        image: '/images/rituals/hanuman-puja/step4.webp',
      },
      {
        step: 5,
        title: 'Boondi Laddu Bhog & Maha Aarti',
        description: 'Offering sweet boondi laddus and betel leaf (paan bida), followed by glowing camphor aarti and blessings.',
        image: '/images/rituals/hanuman-puja/step5.webp',
      },
    ],
    faqs: [
      {
        question: 'Can Hanuman Puja and Sunderkand Paath be performed at home in Bangalore?',
        answer: 'Yes, Pandit Nilesh Kumar Pandey conducts complete Hanuman Puja and melodious Sunderkand Paath at homes, apartments, and offices across all Bangalore localities.',
      },
      {
        question: 'What days are most auspicious for Hanuman Puja?',
        answer: 'Tuesdays and Saturdays are traditionally most auspicious for Lord Hanuman, but it can also be arranged on any shubh tithi or family occasion.',
      },
    ],
  },
  {
    slug: 'durga-puja-bangalore',
    title: 'Durga Puja in Bangalore | Navratri & Chandi Paath Pandit',
    shortTitle: 'Durga Puja & Navratri',
    image: '/images/banners/durga-puja.webp',
    tagline: 'Invoking the supreme divine mother for power, prosperity, protection, and obstacle destruction.',
    navLabel: 'Durga Puja',
    heroTitle: 'Book Durga Puja & Navratri Chandi Paath in Bangalore with Vedic Hindi Pandit',
    heroDescription:
      'Experience divine maternal grace and strength with authentic Durga Saptashati Paath, Navratri Kalash Sthapana, Chandi Hawan, and Kanya Pujan conducted with strict Vedic rituals across Bangalore.',
    seoTitle: 'Durga Puja in Bangalore | Navratri Chandi Paath Pandit Booking',
    seoDescription:
      'Book Durga Puja and Navratri Chandi Paath in Bangalore with experienced North Indian Hindi Pandit for Ghatasthapana, Saptashati, Chandi Hawan, and complete samagri.',
    benefits: [
      'Destroys negative forces, evil eye, and persistent obstacles in life.',
      'Brings prosperity, family peace, and victorious energy to household and ventures.',
      'Authentic North Indian vidhi with clear Sanskrit pronunciation and Hindi guidance.',
      'Full arrangement for Navratri (Chaitra & Sharad), Durga Ashtami, and private homams.',
    ],
    idealFor: [
      'Sharad and Chaitra Navratri 9-day or Ashtami puja',
      'Overcoming court cases, planetary blockages, and family stress',
      'New business launches, factory inaugurations, and home protection',
      'Special devotional vows and gratitude offerings to Maa Bhagwati',
    ],
    includes: [
      'Complete guidance for Ghatasthapana and Akhand Jyoti setup',
      'Durga Avahan, Shodashopachara Pujan, and red chunri offerings',
      'Sacred Durga Saptashati Paath or Navarna Mantra Japa',
      'Sacred Chandi Hawan with lotus seeds, kheer, and pure samagri',
      'Kanya Pujan guidance, Maha Aarti, and divine blessings',
    ],
    process: [
      'Contact via call or WhatsApp with your date and Bangalore address.',
      'Receive complete samagri list and timing instructions.',
      'Pandit ji conducts the authentic mother goddess rituals with full devotion.',
      'Concludes with peaceful hawan, kshama prarthana, and aarti.',
    ],
    steps: [
      {
        step: 1,
        title: 'Ghatasthapana & Durga Avahan',
        description: 'Establishing the sacred clay kalash with sacred grains, coconut, and invoking Maa Durga.',
        image: '/images/rituals/durga-puja/step1.webp',
      },
      {
        step: 2,
        title: 'Shodashopachara & Kumkum Archana',
        description: 'Offering red hibiscus, chandan, sindoor, and reciting divine 108 names of the Mother Goddess.',
        image: '/images/rituals/durga-puja/step2.webp',
      },
      {
        step: 3,
        title: 'Durga Saptashati Recitation',
        description: 'Chanting sacred verses from Markandeya Purana celebrating the victory of divine feminine grace.',
        image: '/images/rituals/durga-puja/step3.webp',
      },
      {
        step: 4,
        title: 'Sacred Chandi Hawan',
        description: 'Offering sacred herbal ahutis, lotus seeds, and pure cow ghee into the blazing sacrificial fire.',
        image: '/images/rituals/durga-puja/step4.webp',
      },
      {
        step: 5,
        title: 'Maha Aarti & Kanya Ashirwad',
        description: 'Performing vibrant camphor aarti, distributing halwa-chana prasad, and receiving maternal grace.',
        image: '/images/rituals/durga-puja/step5.webp',
      },
    ],
    faqs: [
      {
        question: 'Do you provide Ghatasthapana for Navratri at home in Bangalore?',
        answer: 'Yes, we provide authentic Ghatasthapana and Akhand Jyoti vidhi on Pratipada and complete Ashtami / Navami Hawan across Bangalore.',
      },
      {
        question: 'Is complete puja samagri provided for Chandi Hawan?',
        answer: 'Yes, we provide full samagri packages including dry fruits, lotus seeds, pure cow ghee, and hawan wood.',
      },
    ],
  },
  {
    slug: 'lakshmi-puja-bangalore',
    title: 'Lakshmi Puja in Bangalore | Diwali & Dhanteras Pandit Booking',
    shortTitle: 'Lakshmi Puja',
    image: '/images/banners/lakshmi-puja.webp',
    tagline: 'Sacred worship of Goddess Maha Lakshmi for financial abundance, fortune, and lasting peace.',
    navLabel: 'Lakshmi Puja',
    heroTitle: 'Book Maha Lakshmi Puja in Bangalore with North Indian Hindi Pandit',
    heroDescription:
      'Welcome prosperity, financial stability, and auspicious abundance into your home, shop, or office with traditional Sri Suktam recitation, Lotus archana, Kuber pujan, and Lakshmi Hawan in Bangalore.',
    seoTitle: 'Lakshmi Puja in Bangalore | Diwali Pujan Pandit Booking',
    seoDescription:
      'Book Maha Lakshmi Puja in Bangalore with experienced North Hindi Pandit for Diwali, Dhanteras, new business launch, Sri Suktam hawan, and complete puja samagri.',
    benefits: [
      'Attracts wealth, business growth, and eliminates financial distress.',
      'Bestows peace, domestic harmony, and spiritual contentment.',
      'Conducted with pure North Indian Vedic rituals, coin archana, and Sri Yantra pujan.',
      'Available for homes, shops, corporate offices, and tech workspaces in Bangalore.',
    ],
    idealFor: [
      'Diwali and Dhanteras Maha Lakshmi Pujan at home and workplace',
      'Inauguration of new shops, offices, startups, and showrooms',
      'Purnima and Friday special Lakshmi-Kuber pujan',
      'Overcoming debt and inviting business growth',
    ],
    includes: [
      'Pandit ji guidance on shubh muhurat and cash box (tijori) setup',
      'Ganesh-Lakshmi sthapana, Kalash puja, and Sri Yantra consecration',
      'Recitation of Sri Suktam, Kanakadhara Stotram, and Lakshmi Ashtakam',
      'Sacred Maha Lakshmi Hawan with lotus seeds, honey, and ghee',
      'Kheer prasad offering, Maha Aarti, and family blessings',
    ],
    process: [
      'Book online or via WhatsApp with your preferred timing and location.',
      'Receive the simple checklist for coins, sweets, and flowers.',
      'Pandit ji performs the complete prosperity vidhi with sacred mantras.',
      'Concludes with aarti, tilak, and tijori blessings.',
    ],
    steps: [
      {
        step: 1,
        title: 'Kalash & Lakshmi Sthapana',
        description: 'Consecrating the golden altar with mangal kalash, sacred rice mandala, and Ganesh-Lakshmi idols.',
        image: '/images/rituals/lakshmi-puja/step1.webp',
      },
      {
        step: 2,
        title: 'Lotus & Gold Coin Archana',
        description: 'Offering fresh pink lotus flowers, bilva leaves, and gold/silver coins with sacred mantras.',
        image: '/images/rituals/lakshmi-puja/step2.webp',
      },
      {
        step: 3,
        title: 'Sri Suktam Recitation',
        description: 'Vedic chanting of Rigvedic Sri Suktam invoking the eternal radiant presence of Maha Lakshmi.',
        image: '/images/rituals/lakshmi-puja/step3.webp',
      },
      {
        step: 4,
        title: 'Kuber & Lakshmi Hawan',
        description: 'Offering pure ghee, dry fruits, and sacred wood for removing debts and attracting prosperity.',
        image: '/images/rituals/lakshmi-puja/step4.webp',
      },
      {
        step: 5,
        title: 'Kheer Bhog & Maha Deepam Aarti',
        description: 'Offering rich milk kheer prasad, performing 5-wick brass deepam aarti, and blessing the cash locker.',
        image: '/images/rituals/lakshmi-puja/step5.webp',
      },
    ],
    faqs: [
      {
        question: 'Can Lakshmi Puja be conducted in office premises in Bangalore?',
        answer: 'Yes, we conduct Diwali and opening Lakshmi-Kuber pujas for offices, startups, tech parks, and commercial spaces across Bangalore.',
      },
      {
        question: 'What items are needed for Lakshmi Pujan?',
        answer: 'Standard items include lotus flowers, sweets (kheer/mithai), silver/gold coins, and pure ghee. We provide the complete samagri package.',
      },
    ],
  },
  {
    slug: 'saraswati-puja-bangalore',
    title: 'Saraswati Puja in Bangalore | Vidya Arambh Pandit Booking',
    shortTitle: 'Saraswati Puja',
    image: '/images/banners/saraswati-puja.webp',
    tagline: 'Worship of Goddess Saraswati for supreme intellect, educational success, wisdom, and arts.',
    navLabel: 'Saraswati Puja',
    heroTitle: 'Book Saraswati Puja & Vidya Arambh in Bangalore with North Hindi Pandit',
    heroDescription:
      'Bless your children’s education, career, creative expression, and artistic endeavors with authentic Saraswati Puja, Aksharabyasam (Vidya Arambh), Medha Suktam hawan, and book worship in Bangalore.',
    seoTitle: 'Saraswati Puja in Bangalore | Vidya Arambh Pandit Booking',
    seoDescription:
      'Book Saraswati Puja in Bangalore with North Hindi Pandit for Vasant Panchami, student educational blessings, Vidya Arambh, musical instruments pujan, and complete samagri.',
    benefits: [
      'Sharpens intellect, memory retention, concentration, and clarity of thought.',
      'Ideal for students appearing for board exams, competitive exams, and college admissions.',
      'Traditional Aksharabyasam ceremony for toddlers beginning their education.',
      'Conducted in clear Hindi with complete devotion and student involvement.',
    ],
    idealFor: [
      'Vasant Panchami festival celebrations at home, school, and academies',
      'Vidya Arambh / Aksharabyasam for young children taking their first letters',
      'Before major academic exams, board exams, or career milestones',
      'Blessing of musical instruments, books, laptops, and creative studios',
    ],
    includes: [
      'Pandit ji guidance on auspicious timing and study altar arrangement',
      'Saraswati Avahan, Shweta Vastra offering, and white flower archana',
      'Pustak-Lekhani (pen & book) pujan and Medha Suktam recitation',
      'Sacred Saraswati Hawan with payasam and pure cow ghee',
      'Vidya sankalp, pen blessing, Maha Aarti, and elder ashirwad',
    ],
    process: [
      'Share your Bangalore address and child’s name for sankalp.',
      'Receive preparation guidelines for study desk and books.',
      'Pandit ji conducts the ceremony, guiding students throughout the vidhi.',
      'Concludes with Akshara writing on rice, aarti, and blessings.',
    ],
    steps: [
      {
        step: 1,
        title: 'Shweta Vastra & Saraswati Avahan',
        description: 'Draping white silks and invoking Goddess Saraswati onto the purified study peetham.',
        image: '/images/rituals/saraswati-puja/step1.webp',
      },
      {
        step: 2,
        title: 'Pustak & Lekhani Pujan',
        description: 'Anointing sacred textbooks, pens, notebooks, and learning instruments with chandan and haldi.',
        image: '/images/rituals/saraswati-puja/step2.webp',
      },
      {
        step: 3,
        title: 'Medha Suktam & Vandana Chanting',
        description: 'Reciting Vedic Medha Suktam and Saraswati Vandana for sharp intellect and retention.',
        image: '/images/rituals/saraswati-puja/step3.webp',
      },
      {
        step: 4,
        title: 'Sacred Vidya Hawan',
        description: 'Offering pure hawan samagri, samidha sticks, and ghee for removing mental sluggishness.',
        image: '/images/rituals/saraswati-puja/step4.webp',
      },
      {
        step: 5,
        title: 'Aksharabyasam & Aarti',
        description: 'Guiding the student to write ‘Om’ and alphabets on sacred rice, followed by glowing camphor aarti.',
        image: '/images/rituals/saraswati-puja/step5.webp',
      },
    ],
    faqs: [
      {
        question: 'What is the right age for Vidya Arambh / Aksharabyasam?',
        answer: 'Traditionally, Aksharabyasam is performed when the child is between 2.5 to 5 years of age on Vasant Panchami, Vijayadashami, or any auspicious day.',
      },
      {
        question: 'Can you conduct Saraswati Puja in coaching centers or music schools in Bangalore?',
        answer: 'Yes, we regularly perform Saraswati Puja for schools, dance academies, music institutes, and coaching centers across Bangalore.',
      },
    ],
  },
  {
    slug: 'ram-puja-bangalore',
    title: 'Shri Ram Puja in Bangalore | Ramcharitmanas Paath Pandit',
    shortTitle: 'Shri Ram Puja',
    image: '/images/banners/ram-puja.webp',
    tagline: 'Devotional worship of Maryada Purushottam Lord Ram for righteousness, peace, and family harmony.',
    navLabel: 'Shri Ram Puja',
    heroTitle: 'Book Shri Ram Puja & Ramcharitmanas Paath in Bangalore with Hindi Pandit',
    heroDescription:
      'Bring righteousness, familial unity, and divine auspiciousness into your household with authentic Ram Darbar Puja, Ramcharitmanas Akhand/Sundarkand Paath, Ram Raksha Stotra, and Ram Hawan in Bangalore.',
    seoTitle: 'Shri Ram Puja in Bangalore | Ramcharitmanas Paath Pandit Booking',
    seoDescription:
      'Book Shri Ram Puja and Ramcharitmanas Paath in Bangalore with experienced North Hindi Pandit for Ram Navami, family harmony, Ram Raksha Stotra, and complete hawan.',
    benefits: [
      'Cultivates deep moral values, peace, and unity among all family members.',
      'Removes ancestral distress, negative energies, and fear of sudden mishaps.',
      'Conducted in melodious Awadhi style with traditional dohas and chaupais.',
      'Complete North Indian vidhi for Ram Navami, Diwali, and private milestones.',
    ],
    idealFor: [
      'Ram Navami festival celebrations at home and community halls',
      'Akhand Ramayan Paath (24 hours) or Sampoorna Sunderkand Paath',
      'Establishing peace and resolving misunderstandings among family members',
      'Spiritual milestone celebrations and elderly parents’ birthday blessings',
    ],
    includes: [
      'Altar setup guidance with Ram Darbar (Ram, Sita, Lakshman, Hanuman)',
      'Kalash sthapana, Panchamrit snan, and Tulsi mala offerings',
      'Recitation of Ramcharitmanas verses and Ram Raksha Stotra',
      'Sacred Ram Hawan with pure herbal samagri and cow ghee',
      'Panjiri and kheer prasad, Shri Ramchandra Kripalu Aarti, and blessings',
    ],
    process: [
      'Contact with preferred date and family details for sankalp.',
      'Receive guidelines for Ram Darbar setup and offerings.',
      'Pandit ji performs the complete Vedic and Pauranic Ram vidhi.',
      'Family participates in chanting, aarti, and receives sacred charnamrit.',
    ],
    steps: [
      {
        step: 1,
        title: 'Ram Darbar Sthapana & Avahan',
        description: 'Consecrating Shri Ram Darbar peetham with holy gangajal, yellow flowers, and akshat.',
        image: '/images/rituals/ram-puja/step1.webp',
      },
      {
        step: 2,
        title: 'Tulsi & Peetambar Shringaar',
        description: 'Adorning Lord Ram with fresh sacred tulsi malas, fragrant sandalwood, and yellow garments.',
        image: '/images/rituals/ram-puja/step2.webp',
      },
      {
        step: 3,
        title: 'Ramcharitmanas Chopai Recitation',
        description: 'Melodious recitation of inspiring verses narrating the divine qualities of Maryada Purushottam.',
        image: '/images/rituals/ram-puja/step3.webp',
      },
      {
        step: 4,
        title: 'Sacred Ram Hawan',
        description: 'Offering sacred ghee and herbs chanting the holy name of ‘Rama’ for domestic peace and purity.',
        image: '/images/rituals/ram-puja/step4.webp',
      },
      {
        step: 5,
        title: 'Shri Ramchandra Kripalu Aarti',
        description: 'Singing Saint Tulsidas’ timeless aarti with brass deepams, distributing sweet panjiri prasad.',
        image: '/images/rituals/ram-puja/step5.webp',
      },
    ],
    faqs: [
      {
        question: 'Do you conduct Akhand Ramayan Paath in Bangalore?',
        answer: 'Yes, we provide teams of experienced North Indian pandits for 24-hour Akhand Ramayan Paath as well as shorter 3-hour Ram Puja ceremonies.',
      },
      {
        question: 'Can Ram Puja be done on Ram Navami in apartments?',
        answer: 'Yes, we perform home and society hall Ram Navami pujas across all apartment complexes in Bangalore.',
      },
    ],
  },
  {
    slug: 'krishna-puja-bangalore',
    title: 'Shri Krishna Puja in Bangalore | Janmashtami Pandit Booking',
    shortTitle: 'Shri Krishna Puja',
    image: '/images/banners/krishna-puja.webp',
    tagline: 'Joyous devotional worship of Lord Krishna and Laddu Gopal for bliss, child blessings, and love.',
    navLabel: 'Shri Krishna Puja',
    heroTitle: 'Book Shri Krishna Puja & Laddu Gopal Seva in Bangalore with Hindi Pandit',
    heroDescription:
      'Celebrate supreme divine love, family happiness, and auspicious child blessings (Santana Gopal) with authentic Janmashtami Puja, Laddu Gopal Panchamrit Abhishek, and Bhagavad Gita hawan across Bangalore.',
    seoTitle: 'Shri Krishna Puja in Bangalore | Janmashtami Pandit Booking',
    seoDescription:
      'Book Shri Krishna Puja in Bangalore with North Hindi Pandit for Janmashtami, Laddu Gopal Panchamrit snan, Santana Gopal Puja, Makhan bhog, and complete Vedic vidhi.',
    benefits: [
      'Brings joy, sweetness, harmony, and mutual affection in matrimonial and family life.',
      'Santana Gopal prayers for couples praying for healthy and virtuous children.',
      'Traditional North Indian Brij-style Krishna seva and melodious bhajans.',
      'Available for Janmashtami midnight puja, monthly Rohini nakshatra, and home pujas.',
    ],
    idealFor: [
      'Krishna Janmashtami festival celebrations at home and apartments',
      'Santana Gopal Puja for childless couples seeking parenthood blessings',
      'Laddu Gopal home entry, birthday celebration, and daily seva guidance',
      'Family spiritual upliftment and devotion to Lord Govinda',
    ],
    includes: [
      'Pandit ji guidance on palna (swing) setup and midnight muhurat',
      'Panchamrit Abhishek with milk, curd, honey, ghee, and gangajal',
      'Mor Mukut, bansuri, and pitamber shringaar with fresh tulsi leaves',
      'Sacred Krishna Hawan with cow ghee and sweet samagri',
      'Makhan-mishri and panchamrit bhog, Maha Aarti, and family blessings',
    ],
    process: [
      'Share your Bangalore location and preferred date or Janmashtami slot.',
      'Receive the simple checklist for panchamrit, butter, and flowers.',
      'Pandit ji conducts the celebratory vidhi with authentic devotional chants.',
      'Concludes with jhula seva, aarti, and prasad distribution.',
    ],
    steps: [
      {
        step: 1,
        title: 'Panchamrit Snan & Abhishek',
        description: 'Bathing Lord Krishna with five sacred elixirs: milk, curd, honey, ghee, and gangajal.',
        image: '/images/rituals/krishna-puja/step1.webp',
      },
      {
        step: 2,
        title: 'Mor Mukut & Bansuri Shringaar',
        description: 'Adorning the deity with bright yellow silks, radiant peacock feather crown, and flutes.',
        image: '/images/rituals/krishna-puja/step2.webp',
      },
      {
        step: 3,
        title: 'Madhurashtakam & Gita Chanting',
        description: 'Reciting sweet Sanskrit hymns celebrating the all-attractive qualities of Lord Govinda.',
        image: '/images/rituals/krishna-puja/step3.webp',
      },
      {
        step: 4,
        title: 'Sacred Santana Gopal Hawan',
        description: 'Offering sweet hawan ahutis for children’s welfare, lineage continuity, and household joy.',
        image: '/images/rituals/krishna-puja/step4.webp',
      },
      {
        step: 5,
        title: 'Makhan Mishri Bhog & Jhula Aarti',
        description: 'Offering fresh white butter with rock sugar and gently rocking Bal Gopal in a flower-adorned swing.',
        image: '/images/rituals/krishna-puja/step5.webp',
      },
    ],
    faqs: [
      {
        question: 'Do you perform Janmashtami midnight puja in Bangalore?',
        answer: 'Yes, we conduct authentic midnight Janmashtami celebrations and abhishek rituals across Bangalore.',
      },
      {
        question: 'Is Santana Gopal Puja included in this service?',
        answer: 'Yes, Santana Gopal mantra japa and dedicated hawan are specially performed for couples praying for childbirth.',
      },
    ],
  },
  {
    slug: 'navagraha-puja-bangalore',
    title: 'Navagraha & Surya Puja in Bangalore | Grah Shanti Pandit Booking',
    shortTitle: 'Navagraha & Surya Puja',
    image: '/images/banners/navagraha-puja.webp',
    tagline: 'Vedic planetary pacification and Surya worship for health, longevity, and removing planetary doshas.',
    navLabel: 'Navagraha Puja',
    heroTitle: 'Book Navagraha Shanti & Surya Puja in Bangalore with Vedic Hindi Pandit',
    heroDescription:
      'Harmonize the 9 cosmic planetary energies and invoke Bhagwan Surya for vitality, career growth, health, and peace with authentic Navagraha Mandala Sthapana, 9 samidha hawan, and Vedic japa in Bangalore.',
    seoTitle: 'Navagraha Shanti & Surya Puja in Bangalore | Grah Shanti Pandit',
    seoDescription:
      'Book Navagraha Shanti and Surya Puja in Bangalore with North Hindi Pandit for planetary dosha nivaran, Shani Sade Sati, Aditya Hridaya Stotra, and 9-graha hawan.',
    benefits: [
      'Neutralizes adverse planetary transits (Shani Sade Sati, Rahu-Ketu, Mangal dosha).',
      'Boosts health, vitality, eyesight, and willpower through direct Surya worship.',
      'Brings career stability, government favor, and professional recognition.',
      'Conducted strictly according to Vedic astronomy and individual janma kundali guidance.',
    ],
    idealFor: [
      'Individuals experiencing career delays, health setbacks, or Sade Sati',
      'Sunday Surya worship and Sankranti / Ratha Saptami festivals',
      'Griha Shanti, wedding preparation, and business growth prayers',
      'Family peace and pacification of conflicting planetary influences',
    ],
    includes: [
      'Pandit ji guidance on kundali planetary alignment and shubh timing',
      '9-color grain mandala setup for all 9 cosmic deities',
      'Aditya Hridaya Stotra and specific graha mantra chanting',
      'Sacred Navagraha Hawan with 9 sacred woods (arka, palash, khadir, etc.)',
      'Graha daan guidance, Poornahuti, Maha Aarti, and raksha thread',
    ],
    process: [
      'Share your birth details or planetary concerns with your Bangalore address.',
      'Receive guidance on specific offerings (colored cloth, grains) and timing.',
      'Pandit ji draws the authentic mandala and performs the 9-planet vidhi.',
      'Concludes with peaceful hawan, planetary peace prayers, and blessings.',
    ],
    steps: [
      {
        step: 1,
        title: 'Navagraha Mandala Sthapana',
        description: 'Creating the sacred 9-section planetary mandala with consecrated grains, betel nuts, and colors.',
        image: '/images/rituals/navagraha-puja/step1.webp',
      },
      {
        step: 2,
        title: 'Surya Arghya & Aditya Hridaya Paath',
        description: 'Offering holy copper arghya with red flowers to Bhagwan Surya and chanting the victory hymn.',
        image: '/images/rituals/navagraha-puja/step2.webp',
      },
      {
        step: 3,
        title: 'Planetary Vedic Japa',
        description: 'Reciting authentic Vedic mantras for Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu.',
        image: '/images/rituals/navagraha-puja/step3.webp',
      },
      {
        step: 4,
        title: 'Nine Sacred Samidha Hawan',
        description: 'Offering specific medicinal tree woods and pure cow ghee for each of the nine cosmic deities.',
        image: '/images/rituals/navagraha-puja/step4.webp',
      },
      {
        step: 5,
        title: 'Poornahuti & Shanti Ashirwad',
        description: 'Concluding with sacred coconut poornahuti, shanti mantras, and tying protective raksha sutra.',
        image: '/images/rituals/navagraha-puja/step5.webp',
      },
    ],
    faqs: [
      {
        question: 'Why is Navagraha Shanti Hawan recommended before big life events?',
        answer: 'It pacifies conflicting planetary forces and aligns cosmic energies so that new ventures, marriages, and homes progress smoothly.',
      },
      {
        question: 'What are the 9 sacred woods used in Navagraha Hawan?',
        answer: 'The traditional samidhas include Arka (Sun), Palash (Moon), Khadira (Mars), Apamarga (Mercury), Ashvattha (Jupiter), Audumbara (Venus), Shami (Saturn), Durva (Rahu), and Kusha (Ketu).',
      },
    ],
  },
];

export const pujaMap = new Map(pujas.map((puja) => [puja.slug, puja]));
