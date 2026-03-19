import { motion } from "framer-motion";
import KelloText from "./KelloText";

const graphData = [
  {
    guests: "10명 증가",
    revenue: "+80만원",
    height: "20%",
  },
  {
    guests: "30명 증가",
    revenue: "+240만원",
    height: "60%",
  },
  {
    guests: "50명 증가",
    revenue: "+400만원",
    height: "100%",
  },
];

const RevenueGraphSection = () => {
  return (
    <section className="py-24 bg-spring-yellow relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">Revenue Growth</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-foreground mb-4 sm:mb-6 leading-tight break-keep">
            외국인 고객 몇 명만 늘어도<br className="hidden sm:block" />매출이 이렇게 증가합니다
          </h2>
          <div className="flex flex-col items-center gap-2 mb-8">
            <p className="text-sm sm:text-base md:text-lg text-rose-500 font-bold break-keep">
              K-뷰티를 찾는 외국인 관광객은 단순 시술이 아닌 '프리미엄 패키지'를 선호합니다.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              (Kello 예상 외국인 평균 객단가: 15만원)
            </p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md rounded-[2.5rem] p-6 sm:p-10 md:p-16 shadow-2xl border border-rose-100 relative overflow-hidden group">
          {/* Graph Heading */}
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-foreground mb-1">
              한 달에 딱 <span className="text-rose-500">10명</span>만 늘어도, <span className="text-rose-600">매출 앞자리</span>가 바뀝니다.
            </h3>
            <div className="w-16 h-1 bg-rose-200 rounded-full" />
          </div>

          {/* Real Graph Container */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full mt-10">
            {/* Guide Lines */}
            {[0, 75, 150, 300, 450].map((val) => (
              <div key={val} className="absolute w-full border-t border-dashed border-rose-100 flex items-center" style={{ bottom: `${(val / 500) * 100}%` }}>
                <span className="text-[10px] sm:text-xs font-bold text-rose-300 -ml-12 sm:-ml-16 w-10 sm:w-14 text-right">
                  {val === 0 ? "0원" : `${val}만원`}
                </span>
              </div>
            ))}

            {/* X-Axis Labels */}
            <div className="absolute bottom-[-30px] w-full flex justify-between px-4 sm:px-10 text-xs sm:text-sm font-black text-rose-400">
              <span>0명</span>
              <span>5명</span>
              <span>10명</span>
              <span>20명</span>
              <span>30명</span>
            </div>

            {/* The Curve Overlay (SVG) */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
              {/* Baseline Area */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M 0 100 Q 15 95, 30 90 Q 60 85, 100 80 L 100 100 L 0 100 Z"
                fill="url(#baseGradient)"
                className="opacity-20"
              />
              {/* Kello Extra Revenue Area */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                d="M 0 100 Q 15 90, 30 70 Q 60 40, 100 10 L 100 80 Q 60 85, 30 90 Q 15 95, 0 100 Z"
                fill="url(#extraGradient)"
              />
              {/* Main Growth Curve Line */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                d="M 0 100 Q 15 90, 30 70 Q 60 40, 100 10"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
              
              <defs>
                <linearGradient id="baseGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#f1f5f9" />
                </linearGradient>
                <linearGradient id="extraGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--primary) / 0.1)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating Value Labels */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="absolute left-[30%] bottom-[30%] -translate-x-1/2"
            >
              <div className="bg-white px-3 py-1 rounded-full shadow-lg border-2 border-primary/20 flex flex-col items-center">
                <span className="text-[10px] font-black text-rose-400 leading-none mb-0.5">10명</span>
                <span className="text-sm font-black text-foreground">150만원</span>
                <div className="absolute -bottom-1 w-2 h-2 bg-white border-r-2 border-b-2 border-primary/20 rotate-45" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2 }}
              className="absolute right-[5%] top-[5%] -translate-x-1/2"
            >
              <div className="bg-primary px-4 py-1.5 rounded-full shadow-xl flex flex-col items-center animate-bounce">
                <span className="text-[10px] font-black text-white/80 leading-none mb-0.5">30명</span>
                <span className="text-base font-black text-white">450만원</span>
                <div className="absolute -bottom-1 w-2 h-2 bg-primary rotate-45" />
              </div>
            </motion.div>

            {/* Labels inside graph */}
            <div className="absolute bottom-[12%] right-[20%] text-[10px] sm:text-xs font-black text-rose-500/60 uppercase tracking-widest italic">
              Kello 추가 수익
            </div>
            <div className="absolute bottom-[4%] left-[45%] text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest italic">
              기존 매출
            </div>
          </div>

          {/* Footer Text */}
          <p className="mt-16 text-center text-[10px] sm:text-xs text-muted-foreground font-medium break-keep">
            *외국인 관광객 프리미엄 시술(두피 스파, 펌, 아트 네일 등) 평균 객단가 15만 원 기준
          </p>
        </div>
      </div>
    </section>
  );
};

export default RevenueGraphSection;
