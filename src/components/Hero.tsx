import { ArrowRight, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-black pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-semibold mb-6 border border-yellow-400/20">
              <span className="flex h-2 w-2 rounded-full bg-yellow-400 mr-2"></span>
              Método Direção Confiante
            </div>
            
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Vença o medo de dirigir e</span>{' '}
              <span className="block text-yellow-400 xl:inline">conquiste sua liberdade</span>
            </h1>
            
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Aulas práticas personalizadas para habilitados. Recupere sua confiança no volante com instrutores pacientes e especializados.
            </p>
            
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-black bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Falar no WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#services"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-full text-white bg-transparent hover:bg-gray-800 md:py-4 md:text-lg md:px-10 shadow-sm transition-all duration-300"
                >
                  Ver Serviços
                </a>
              </div>
              
              <div className="mt-6 flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Instrutores Credenciados</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Carros Seguros</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Pessoa dirigindo com confiança"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                  <div>
                    <p className="text-white font-bold text-lg">Direção Segura</p>
                    <p className="text-yellow-400 text-sm">Aprenda no seu tempo</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
