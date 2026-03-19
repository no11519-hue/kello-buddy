import ScrollReveal from "./ScrollReveal";

const GlobalTrendSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <ScrollReveal width="100%">
          <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-primary/10 bg-white group">
            <img 
              src="/그래프11.png" 
              alt="글로벌 관광객 유입과 K-뷰티 소비 트렌드" 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.01]"
            />
            {/* Subtle overlay to match kello aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GlobalTrendSection;
