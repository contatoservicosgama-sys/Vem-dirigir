import { Facebook, Instagram, Phone, MapPin, Clock, Car } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Car className="w-8 h-8 text-yellow-400" />
              <span>Vem<span className="text-yellow-400">Dirigir</span></span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Método Direção Confiante. Ajudando você a dirigir com segurança e tranquilidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                <span className="text-gray-300">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                <span className="text-gray-300">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                <span className="text-gray-300">{COMPANY_INFO.workingHours}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-yellow-400 transition-colors">Início</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">Serviços</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-yellow-400 transition-colors">Depoimentos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Vem Dirigir. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
