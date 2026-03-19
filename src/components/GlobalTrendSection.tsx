import ScrollReveal from "./ScrollReveal";

const GlobalTrendSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#f9ebf3] relative overflow-hidden">
      {/* Decorative Globs removed or lightened for absolute seamless look */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

      <div className="w-full relative z-10 px-0 sm:px-4 md:px-0">
        <ScrollReveal width="100%">
          <div className="relative w-full overflow-hidden bg-[#f9ebf3]">
            <img 
              src="/그래프11.png" 
              alt="글로벌 관광객 유입과 K-뷰티 소비 트렌드" 
              className="w-full h-auto object-cover"
              style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden' }}
            />
            {/* Subtle gloss overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-white/10 pointer-events-none" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GlobalTrendSection;
