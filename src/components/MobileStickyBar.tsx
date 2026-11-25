import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { getWhatsAppLink, phoneNumber } from '@/data/pujas';

type MobileStickyBarProps = {
  whatsappLabel?: string;
};

export const MobileStickyBar = ({ whatsappLabel = 'Puja Booking' }: MobileStickyBarProps) => {
  return (
    <aside aria-label="Mobile Quick Booking Bar" className="mobile-sticky-shell lg:hidden">
      <div className="mobile-sticky-bar">
        {/* Call Now Button with Saffron-Crimson Gradient */}
        <a
          href={`tel:${phoneNumber}`}
          className="mobile-sticky-btn cta-call"
          aria-label={`Call Pandit Ji at ${phoneNumber}`}
        >
          <Phone size={18} className="animate-pulse" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button with Emerald Green Gradient */}
        <a
          href={getWhatsAppLink(whatsappLabel)}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-sticky-btn cta-whatsapp"
          aria-label="Book Puja on WhatsApp"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
