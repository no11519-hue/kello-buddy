import { motion } from "framer-motion";
import { Scissors, Palmtree, Sparkles } from "lucide-react";

const examples = [
  {
    icon: Scissors,
    title: "헤어샵",
    guests: "외국인 고객 20명",
    price: "객단가 12만원",
    revenue: "+240만원",
    color: "text-kello-coral",
    bg: "bg-kello-coral/10",
  },
  {
    icon: Sparkles,
    title: "네일샵",
    guests: "외국인 고객 30명",
    price: "객단가 7만원",
    revenue: "+210만원",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Palmtree,
    title: "피부관리샵",
    guests: "외국인 고객 25명",
    price: "객단가 15만원",
    revenue: "+375만원",
    color: "text-kello-gold",
    bg: "bg-kello-gold/10",
  },
];

const RevenueExamplesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-kello-gold/5 rounded-full blur-3xl -translate-x-1/3" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">Examples</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight break-keep">
            외국인 고객 증가 실제 매출 예시
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {examples.map((ex, i) => (
            <motion.div
              key={ex.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative glass-card rounded-3xl p-8 hover:shadow-kello-glow transition-all group flex flex-col items-center text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${ex.bg} mb-6`}>
                <ex.icon className={`h-8 w-8 ${ex.color}`} />
              </div>
              <h3 className={`text-2xl font-black ${ex.color} mb-6 block`}>
                {ex.title}
              </h3>
              <div className="space-y-2 mb-8 text-muted-foreground font-medium text-lg">
                <p>{ex.guests}</p>
                <p>{ex.price}</p>
              </div>
              <div className="mt-auto w-full pt-6 border-t border-border">
                <span className="text-sm font-semibold text-muted-foreground block mb-1">예상 월 매출 증가</span>
                <span className="text-3xl font-black text-foreground">{ex.revenue}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueExamplesSection;
