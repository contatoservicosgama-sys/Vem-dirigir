import { ShieldCheck, Clock, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-yellow-600 font-bold tracking-wide uppercase">Sobre Nós</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
            Especialistas em Direção para Habilitados
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Nossa missão é devolver a sua liberdade de ir e vir, proporcionando segurança e técnica para enfrentar o trânsito do dia a dia.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-lg"
            >
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-yellow-400">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-bold text-black">Segurança Total</p>
              <p className="mt-2 ml-16 text-base text-gray-600">
                Carros equipados com duplo comando e instrutores altamente capacitados para garantir sua segurança em cada aula.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-lg"
            >
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-yellow-400">
                <Clock className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-bold text-black">Experiência Comprovada</p>
              <p className="mt-2 ml-16 text-base text-gray-600">
                Anos de experiência ajudando centenas de motoristas a superarem o medo e a insegurança no trânsito.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-lg"
            >
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-yellow-400">
                <Users className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-bold text-black">Atendimento Personalizado</p>
              <p className="mt-2 ml-16 text-base text-gray-600">
                Entendemos sua dificuldade específica e criamos um plano de aula focado na sua necessidade real.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
