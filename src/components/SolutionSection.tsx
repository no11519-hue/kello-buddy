import { motion } from "framer-motion";
import { Languages, Smartphone, Globe2, TrendingUp } from "lucide-react";
import KelloText from "./KelloText";

const solutions = [
  {
    icon: Languages,
    title: "다국어 예약 시스템",
    desc: "모든 예약과 소통이 자동 번역되어 외국어 스트레스 제로",
    gradient: "from-kello-green to-primary",
  },
  {
    icon: Smartphone,
    title: "외국인 친화 UX",
    desc: "외국인에게 최적화된 예약 환경으로 이탈률 방지",
    gradient: "from-kello-coral to-accent",
  },
  {
    icon: Globe2,
    title: "관광객 대상 플랫폼 노출",
    desc: "한국 방문 예정인 관광객에게 다이렉트 매장 홍보",
    gradient: "from-kello-gold to-accent",
  },
  {
    icon: TrendingUp,
    title: "예약 → 방문 → 매출 연결",
    desc: "노쇼 없는 100% 선결제로 확실한 방문과 매출 보장",
    gradient: "from-primary to-accent",
  },
];

const SolutionSection = () => {
  return (
<section className="py-24 bg-spring-peach relative overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.1) 0%, transparent 50%)" }} />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-kello-gold/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">Solution</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-foreground mb-4 sm:mb-6 leading-tight break-keep">
            <KelloText />가 외국인 고객과<br />사장님을 연결해드립니다
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl p-6 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} mb-5 shadow-sm`}>
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-foreground mb-3">{s.title}</h3>
              <p className="text-foreground/80 font-bold leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
