import { motion } from "framer-motion";
import { Search, MapPin, CalendarCheck } from "lucide-react";
import KelloText from "./KelloText";

const steps = [
  {
    icon: Search,
    num: "1",
    title: <>외국인이 여행 준비 중<br/>K-뷰티 체험 검색</>,
    desc: "",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: MapPin,
    num: "2",
    title: <><KelloText /> 플랫폼에서<br/>예약 가능한 매장 발견</>,
    desc: "",
    color: "from-kello-gold to-accent",
  },
  {
    icon: CalendarCheck,
    num: "3",
    title: <>예약 → 선결제 → 매장방문</>,
    desc: "",
    color: "from-kello-green to-emerald-600",
  },
];

const CustomerFlowSection = () => {
  return (
    <section className="py-24 bg-spring-purple relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-kello-gold/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto relative z-10"
        >
          <span className="inline-block text-sm font-bold text-primary tracking-widest uppercase mb-4">How it works</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-foreground mb-4 sm:mb-6 leading-tight break-keep">
            외국인 고객은 이렇게<br />매장을 찾습니다
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto z-10">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0 opacity-50" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card rounded-3xl p-8 flex flex-col items-center text-center relative"
              >
                <div className={`w-12 h-12 rounded-full text-white font-black text-xl flex items-center justify-center bg-gradient-to-br ${step.color} shadow-lg mb-6 relative -mt-14 ring-4 ring-white`}>
                  {step.num}
                </div>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-md opacity-10 absolute top-10 pointer-events-none`}>
                </div>
                <step.icon className="h-10 w-10 text-primary mb-4 relative z-10" />
                <h3 className="text-lg sm:text-xl font-black text-foreground mb-3 whitespace-pre-line leading-snug">{step.title}</h3>
                {step.desc && (
                  <p className="text-muted-foreground font-medium leading-relaxed break-keep">
                    {step.desc}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFlowSection;
