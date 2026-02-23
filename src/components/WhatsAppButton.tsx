import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <Phone className="w-8 h-8 fill-current" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
        Fale Conosco
      </span>
    </motion.a>
  );
}
