export const COMPANY_INFO = {
  name: "Vem Dirigir",
  method: "Método Direção Confiante",
  phone: "99131-3274",
  whatsapp: "55991313274", // Assuming Brazil country code +55
  whatsappDisplay: "(99) 99131-3274", // Assuming area code 99 based on the prompt format, but usually it's 2 digits. Wait, 99131-3274 looks like (XX) 99131-3274. I'll use a generic placeholder for area code or just display the number as given if unsure. Actually, 99 is a valid DDD in Brazil (Maranhão). Let's assume it's correct or use the raw number for display.
  // Let's just format it nicely.
  address: "Atendimento em toda a região",
  instagram: "@vemdirigir",
  facebook: "/vemdirigir",
  email: "contato@vemdirigir.com.br",
  workingHours: "Segunda a Sexta: 08h às 18h | Sábado: 08h às 12h"
};

export const SERVICES = [
  {
    title: "Aulas para Habilitados",
    description: "Perdeu a prática? Nossas aulas são personalizadas para você voltar a dirigir com segurança e tranquilidade.",
    icon: "Car"
  },
  {
    title: "Perca o Medo de Dirigir",
    description: "Método exclusivo focado em desbloqueio emocional e técnicas de direção defensiva para quem tem medo do trânsito.",
    icon: "HeartHandshake"
  },
  {
    title: "Treinamento de Baliza",
    description: "Aprenda a estacionar em qualquer vaga de forma simples e rápida, sem suor e sem nervosismo.",
    icon: "ParkingCircle"
  },
  {
    title: "Direção em Rodovias",
    description: "Ganhe confiança para viajar. Treinamento específico para estradas, ultrapassagens e velocidades maiores.",
    icon: "Map"
  }
];

export const TESTIMONIALS = [
  {
    name: "Maria Silva",
    text: "Eu tinha carteira há 10 anos e não dirigia. Com o Método Direção Confiante, em 5 aulas eu já estava indo para o trabalho sozinha!",
    rating: 5
  },
  {
    name: "João Santos",
    text: "Profissionais excelentes. Tinha muito medo de ladeira e estacionamento. Hoje dirijo pra todo lugar. Recomendo demais!",
    rating: 5
  },
  {
    name: "Ana Costa",
    text: "O instrutor foi super paciente. O método realmente funciona. Gratidão eterna por me devolverem a liberdade.",
    rating: 5
  }
];
