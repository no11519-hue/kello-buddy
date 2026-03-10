import { motion } from "framer-motion";
import { Globe, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="bg-slate-950 flex flex-col w-full">
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
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
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
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 mb-8"
          >
            <Globe className="h-4 w-4 text-kello-gold" />
            <span className="text-sm font-medium text-primary-foreground/90">사장님 전용 파트너 제휴</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-gradient-hero mb-6 break-keep drop-shadow-md">
            외국인 손님이 매출이 됩니다
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-primary-foreground/90 leading-relaxed mb-10 font-medium max-w-4xl mx-auto break-keep">
            KELLO는 외국인 관광객이<br className="hidden md:block" />
            한국 매장을 쉽게 예약하도록 연결합니다
          </p>

          <motion.a
            href="#cta-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground font-bold px-8 py-5 rounded-full text-xl shadow-kello-glow hover:scale-105 transition-transform"
          >
            <Phone className="h-6 w-6" />
            외국인 고객 받기 시작하기
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
