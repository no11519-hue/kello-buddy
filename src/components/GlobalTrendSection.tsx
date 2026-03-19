import ScrollReveal from "./ScrollReveal";

const GlobalTrendSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#f9ebf3] relative overflow-hidden">
      {/* Background decoration to blend with the flowery infographic */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 mb-12">
        <ScrollReveal width="100%">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-[900] text-[#2d0a28] mb-4 tracking-tight break-keep">
              글로벌 관광객 유입과 <span className="text-[#a8448d]">K-뷰티 소비 트렌드</span>
            </h2>
            <p className="text-lg md:text-xl text-[#6b4c65] font-bold opacity-90 break-keep">
              외국인 관광객의 미용 서비스 이용 현황 및 지출 분석
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Full width image container */}
      <div className="w-full relative z-10">
        <ScrollReveal width="100%">
          <div className="relative w-full overflow-hidden bg-[#f9ebf3]">
            <img 
              src="/그래프11.png" 
              alt="글로벌 관광객 유입과 K-뷰티 소비 트렌드 그래프" 
              className="w-full h-auto object-cover"
              style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden' }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GlobalTrendSection;
