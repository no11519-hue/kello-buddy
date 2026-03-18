import { motion } from "framer-motion";
import { Globe, Phone, TicketPercent, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import KelloText from "./KelloText";

const HeroSection = () => {
  return (
    <section className="bg-spring-pink flex flex-col w-full relative">
      {/* Top Video Area */}
      <div className="relative w-full h-[45vh] lg:h-[55vh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroBg}
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback if video tag is not supported */}
          <img src={heroBg} alt="한국 거리를 즐기는 외국인 관광객들" className="w-full h-full object-cover" />
        </video>
        {/* Soft gradient to blend with the dark background below */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(350_40%_98%)] via-white/20 to-transparent" />
      </div>

      {/* Content Area Below the Video */}
      <div className="container relative z-10 mx-auto px-6 pb-24 pt-12 md:pb-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 mb-8 shadow-sm"
          >
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold text-primary">사장님 전용 파트너 제휴</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-foreground mb-6 break-keep drop-shadow-md">
            외국인 손님이 매출이 됩니다
          </h1>
          <p className="text-sm sm:text-base md:text-2xl text-foreground/80 leading-relaxed mb-10 font-bold max-w-4xl mx-auto break-keep">
            <KelloText />는 외국인 관광객이 <br className="hidden md:block" />
            한국 매장을 쉽게 예약하도록 연결합니다
          </p>

          <motion.button
            onClick={() => window.dispatchEvent(new Event('open-promo-popup'))}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground font-bold px-6 py-4 md:px-8 md:py-5 rounded-full text-base md:text-xl shadow-kello-glow hover:scale-105 transition-transform relative z-10"
          >
            <Phone className="h-5 w-5 md:h-6 md:w-6" />
            외국인 고객 받고 매출 올리기
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mt-4 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground/60 tracking-tight"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-primary/70" />
            <span>신청 1분 <span className="mx-1 text-foreground/30">·</span> 확인 후 순차 연락 <span className="mx-1 text-foreground/30">·</span> DM 문의 가능</span>
          </motion.div>

          {/* Post-it Note Promotion */}
          <motion.div
            id="benefits"
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
            className="mt-16 w-full max-w-sm bg-[#fef08a] p-6 md:p-8 shadow-[5px_5px_15px_rgba(0,0,0,0.1)] relative border border-[#fde047] origin-top text-left"
            style={{
              borderRadius: "2px 2px 20px 5px", // Slight curl effect
            }}
          >
            {/* Post-it Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm shadow-sm rotate-[-3deg]" />

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-4 text-center sm:text-left">
              <TicketPercent className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600 hidden sm:block" />
              <h3 className="text-xl sm:text-2xl font-black text-amber-900 break-keep leading-tight drop-shadow-sm">
                2026년은 <KelloText /> 초기 파트너에게<br className="hidden sm:block" />
                <span className="text-red-500 border-b-2 border-red-500 font-extrabold mt-1 inline-block text-2xl sm:text-3xl">무료로 제공합니다.</span>
              </h3>
            </div>

            <p className="text-amber-900/90 font-bold leading-relaxed break-keep mb-6 text-base md:text-lg border-t border-amber-900/20 pt-4">
              플랫폼 초기 확장을 위해<br className="hidden sm:block" />
              2026년 동안은 제휴 매장이<br className="hidden sm:block" />
              <KelloText /> 서비스를 무료로 사용할 수 있습니다.
            </p>
            <p className="text-amber-900 font-black break-keep text-lg md:text-xl drop-shadow-sm">
              외국인 고객을 먼저 만나보는 기회,<br className="hidden sm:block" />
              지금 참여하세요! ✨
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
