import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold text-white sm:text-4xl"
        >
          <span className="block text-yellow-400">Pronto para assumir o volante?</span>
          <span className="block mt-2">Peça seu orçamento agora e resolva hoje mesmo.</span>
        </motion.h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-black bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-xl md:px-10 shadow-lg transition-all transform hover:-translate-y-1"
            >
              <Phone className="w-6 h-6 mr-2 text-black" />
              Falar no WhatsApp Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
