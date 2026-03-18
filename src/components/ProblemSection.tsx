import { motion } from "framer-motion";
import { MessageCircleX, ShieldX, UserX } from "lucide-react";

const problems = [
  {
    icon: MessageCircleX,
    title: "한국어 예약",
    desc: "번역기만으로는 한계가 있는 한국어 중심 메신저 예약 시스템",
    color: "text-kello-coral",
    bg: "bg-kello-coral/10",
  },
  {
    icon: UserX,
    title: "국내 번호 요구",
    desc: "한국 전화번호가 없으면 본인 인증과 예약 보증을 할 수 없는 구조",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: ShieldX,
    title: "전화 예약",
    desc: "현지 통화가 불가능하거나 언어 소통이 안 되어 전화 문의 자체를 포기",
    color: "text-kello-gold",
    bg: "bg-kello-gold/10",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-spring-pink relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-kello-coral/5 rounded-full blur-3xl -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/3" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="bg-primary/5 border-l-4 border-primary p-4 sm:p-6 rounded-r-xl mb-6 text-left max-w-fit mx-auto relative shadow-sm">
            <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight tracking-tight break-keep">
              "사장님들 외국인 고객손님 불편하셨죠?"
            </h2>
          </div>
          <div className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed break-keep flex flex-col gap-5 mt-6 max-w-3xl mx-auto text-left">
            <div className="glass-card p-6 rounded-3xl">
              <span className="font-bold text-kello-coral text-sm md:text-base mb-2 block">언어 장벽</span>
              <p className="text-foreground">"회원권 유도, 가격 안내, 환불 정책 등 세부 설명을 외국인에게 전달하기가 너무 어려워요."</p>
            </div>
            <div className="glass-card p-6 rounded-3xl">
              <span className="font-bold text-primary text-sm md:text-base mb-2 block">인증 장벽</span>
              <p className="text-foreground">"한국 번호가 없어 실명인증이 안 되니, 노쇼 시 연락이 안 되는 문제가 발생하면 업체가 불이익을 받게 돼요."</p>
            </div>
            <div className="glass-card p-6 rounded-3xl">
              <span className="font-bold text-kello-gold text-sm md:text-base mb-2 block">신뢰 장벽</span>
              <p className="text-foreground">"정보가 부족한 외국인들이 가격에 의심을 가지고 신뢰가 부족해요."</p>
            </div>
            <strong className="text-primary mt-6 sm:mt-8 mb-4 block text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight drop-shadow-sm">
              <span className="font-black bg-clip-text text-transparent" style={{ backgroundImage: "var(--kello-gradient-hero)" }}>Kello</span>는 이 문제를 완벽하게 해결합니다.
            </strong>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative glass-card rounded-3xl p-8 md:p-10 flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${p.bg} mb-6`}>
                <p.icon className={`h-8 w-8 ${p.color}`} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-foreground mb-3 block">
                {p.title}
              </h3>
              <p className="text-foreground/90 font-bold text-sm sm:text-base md:text-lg leading-relaxed break-keep">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
