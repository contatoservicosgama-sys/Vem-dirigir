import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-yellow-600 font-bold tracking-wide uppercase">Depoimentos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
            O que nossos alunos dizem
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-yellow-400 font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-black">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">Aluna Satisfeita</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <span className="text-black font-bold text-lg">+500</span>
            <span className="ml-2 text-gray-700">alunos já perderam o medo de dirigir conosco!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
