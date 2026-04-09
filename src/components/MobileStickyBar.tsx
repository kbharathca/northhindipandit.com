import { MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppLink, phoneNumber } from '@/data/pujas';

type MobileStickyBarProps = {
  whatsappLabel?: string;
};

export const MobileStickyBar = ({ whatsappLabel = 'Puja Booking' }: MobileStickyBarProps) => {
  return (
    <div className="mobile-sticky-shell lg:hidden">
      <div className="mobile-sticky-bar">
        <a href={`tel:${phoneNumber}`} className="mobile-sticky-button mobile-sticky-call">
          <Phone size={20} />
          <span>Call Now</span>
        </a>
        <a href={getWhatsAppLink(whatsappLabel)} className="mobile-sticky-button mobile-sticky-whatsapp">
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
