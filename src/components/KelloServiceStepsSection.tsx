import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const steps = [
  {
    id: 1,
    title: "매장 선택",
    desc: "원하는 지역과 매장을 지도나 리스트에서 찾아 선택합니다.",
    gifUrl: "/services/6.gif",
  },
  {
    id: 2,
    title: "원하는 서비스 선택",
    desc: "매장에서 제공하는 다양한 서비스와 옵션을 확인하고 고릅니다.",
    gifUrl: "/services/6.gif",
  },
  {
    id: 3,
    title: "예약 진행",
    desc: "방문 날짜와 시간을 지정하고 앱 내에서 결제 및 예약을 완료합니다.",
    gifUrl: "/services/6.gif",
  },
  {
    id: 4,
    title: "방문 및 이용",
    desc: "예약한 시간에 맞춰 오프라인 매장에 방문하여 서비스를 제공받습니다.",
    gifUrl: "/services/6.gif",
  },
  {
    id: 5,
    title: "완료",
    desc: "언어 장벽 없이 모든 서비스 이용이 성공적으로 완료됩니다.",
    gifUrl: "/services/6.gif",
  },
];

const KelloServiceStepsSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* 섹션 제목 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">How it works</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground break-keep">
            Kello 서비스
          </h2>
        </motion.div>

        {/* 캐러셀 영역 */}
        <div className="relative w-full px-12 max-w-[400px] mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {steps.map((step, idx) => (
                <CarouselItem
                  key={step.id}
                  className="pl-0 basis-full shrink-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(idx * 0.1, 0.4), duration: 0.5 }}
                    className="flex flex-col bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-border/40 p-3 h-full group hover:shadow-[0_8px_30px_rgba(233,30,99,0.08)] transition-all duration-300"
                  >
                    {/* GIF 영역 */}
                    <div className="w-full aspect-[9/18] overflow-hidden rounded-2xl bg-muted/30 relative">
                      <img
                        src={step.gifUrl}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                      />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* 이전/다음 버튼 (PC에서 유용) */}
            <div className="hidden lg:block">
              <CarouselPrevious className="-left-4 xl:-left-12 bg-white/80 backdrop-blur-sm border-border/30 hover:bg-primary hover:text-white transition-all w-12 h-12" />
              <CarouselNext className="-right-4 xl:-right-12 bg-white/80 backdrop-blur-sm border-border/30 hover:bg-primary hover:text-white transition-all w-12 h-12" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* 모바일 가로 스크롤바 숨김 처리 */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default KelloServiceStepsSection;
