import { Car, HeartHandshake, Map, ParkingCircle, ArrowRight } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../constants';
import { motion } from 'motion/react';

const icons: Record<string, any> = {
  Car,
  HeartHandshake,
  Map,
  ParkingCircle
};

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-yellow-600 font-bold tracking-wide uppercase">Nossos Serviços</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
            O que podemos fazer por você?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Soluções completas para quem já tem habilitação mas precisa de prática e confiança.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const IconComponent = icons[service.icon] || Car;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-6 flex-1">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="px-6 pb-6 bg-gray-50/50 border-t border-gray-100 pt-4">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, gostaria de saber mais sobre ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-black hover:text-yellow-600 font-bold text-sm group"
                  >
                    Saiba mais
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform text-yellow-500" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
