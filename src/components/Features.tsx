import { Check, Star, Award, DollarSign, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    name: 'Atendimento Rápido',
    description: 'Agende suas aulas com facilidade e rapidez pelo WhatsApp.',
    icon: Clock,
  },
  {
    name: 'Profissionais Qualificados',
    description: 'Instrutores credenciados e com vasta experiência em treinamento para habilitados.',
    icon: Award,
  },
  {
    name: 'Garantia de Qualidade',
    description: 'Método comprovado com centenas de alunos satisfeitos.',
    icon: Star,
  },
  {
    name: 'Preço Justo',
    description: 'Pacotes acessíveis que cabem no seu bolso.',
    icon: DollarSign,
  },
];


export default function Features() {
  return (
    <section className="py-16 bg-yellow-400 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-black">
            Por que escolher o Vem Dirigir?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-800 mx-auto">
            Diferenciais que fazem a nossa escola ser a melhor opção para você.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-yellow-500/20 hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-yellow-400 mb-4">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-black">{feature.name}</h3>
              <p className="mt-2 text-base text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
