import { motion } from "framer-motion";
import KelloText from "./KelloText";
import ScrollReveal from "./ScrollReveal";

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
    <section className="py-24 bg-[#fdf3f8] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-16 max-w-3xl mx-auto">
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
          </div>
        </ScrollReveal>

        <div className="w-full relative z-10 overflow-hidden">
          <ScrollReveal width="100%">
            <div className="relative overflow-hidden bg-[#fdf3f8]">
              <img 
                src="/그래프.png" 
                alt="매출 증가 그래프" 
                className="w-full h-auto object-cover"
                style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default RevenueGraphSection;
