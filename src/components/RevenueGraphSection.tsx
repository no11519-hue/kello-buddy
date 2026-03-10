import { motion } from "framer-motion";

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
    <section className="py-24 bg-kello-blue-light/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">Revenue Growth</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight break-keep">
            외국인 고객 몇 명만 늘어도<br />매출이 이렇게 증가합니다
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium mb-2">
            평균 객단가 8만원 기준
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 relative z-10">
          <h3 className="text-center font-bold text-muted-foreground mb-8">
            외국인 고객 증가 vs 예상 매출 증가
          </h3>
          <div className="flex justify-around items-end h-72 md:h-96 w-full max-w-2xl mx-auto gap-4 md:gap-8 pt-8 px-4 border-b-2 border-border/50 relative">
            {graphData.map((d, i) => (
              <div key={i} className="flex flex-col items-center justify-end h-full w-full group">
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: d.height, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                  className="w-full bg-gradient-to-t from-primary/80 to-accent rounded-t-lg relative shadow-kello flex items-end justify-center pb-4 min-h-[50px] transition-transform group-hover:scale-[1.02]"
                >
                  <span className="absolute -top-10 font-black text-xl text-foreground break-keep text-center w-full">
                    {d.revenue}
                  </span>
                </motion.div>
                <div className="mt-4 text-center">
                  <span className="font-bold text-base md:text-lg block text-foreground break-keep">{d.guests}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueGraphSection;
