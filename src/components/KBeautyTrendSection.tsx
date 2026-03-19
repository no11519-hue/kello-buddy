import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const stats = [
  {
    title: "전체 외국인 관광객 수",
    mainVal: "2024년 1,700만 명",
    subContent: (
      <div className="mt-4 relative h-24 w-full flex items-end">
        {/* Simplified Map background */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center grayscale">
          <svg viewBox="0 0 200 100" className="w-full h-full">
            <path d="M20,40 Q40,30 60,40 T100,40 T140,30 T180,50" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        {/* Simplified Line Graph */}
        <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
          <path d="M0,45 L30,40 L60,30 L100,5" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
          <circle cx="0" cy="45" r="2" fill="hsl(var(--primary))" />
          <circle cx="30" cy="40" r="2" fill="hsl(var(--primary))" />
          <circle cx="60" cy="30" r="2" fill="hsl(var(--primary))" />
          <circle cx="100" cy="5" r="3" fill="hsl(var(--primary))" />
          <g className="text-[6px] fill-muted-foreground font-bold">
            <text x="0" y="52">2021</text>
            <text x="25" y="52">2022</text>
            <text x="55" y="52">2023</text>
            <text x="85" y="52">2024</text>
          </g>
        </svg>
      </div>
    )
  },
  {
    title: "미용·뷰티 이용자 수 및 비중",
    mainVal: "약 250만 명",
    subTitle: "미용 서비스 이용자 수",
    extra: (
      <div className="mt-2 flex flex-col items-center">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <circle cx="18" cy="18" r="16" fill="none" stroke="#eee" strokeWidth="4" />
              <motion.circle
                cx="18" cy="18" r="16" fill="none" stroke="hsl(var(--primary))" strokeWidth="4"
                strokeDasharray="100 100" strokeDashoffset="85" strokeLinecap="round"
                initial={{ strokeDashoffset: 100 }}
                whileInView={{ strokeDashoffset: 85 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-primary">15%</div>
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold text-muted-foreground">전체 관광객 중 비중</p>
            <p className="text-lg font-black text-primary">약 15%</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "1인당 미용 목적 평균 지출",
    mainVal: "153만 원",
    extra: (
      <div className="mt-4 space-y-3 w-full">
        <div className="flex items-center gap-3 bg-white/40 p-2 rounded-xl border border-white/50">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">💳</div>
          <div className="text-left">
            <p className="text-[9px] font-bold text-muted-foreground">미용목적 카드 사용액 평균</p>
            <p className="text-sm font-black text-primary">153만 원</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white/40 p-2 rounded-xl border border-white/50">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">👛</div>
          <div className="text-left">
            <p className="text-[9px] font-bold text-muted-foreground">한국 내 전체 카드 사용액 평균</p>
            <p className="text-sm font-black text-accent text-rose-500">399만 원</p>
          </div>
        </div>
      </div>
    )
  }
];

const KBeautyTrendSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF5F7] to-[#FFE3EC] relative overflow-hidden">
      {/* Decorative Cherry Blossoms (Absolute) */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none">🌸</div>
      <div className="absolute bottom-20 right-10 opacity-20 pointer-events-none text-2xl">🌸</div>
      <div className="absolute top-1/2 right-1/4 opacity-10 pointer-events-none text-xl">✨</div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 break-keep">
              글로벌 관광객 유입과 <span className="text-rose-500">K-뷰티 소비 트렌드</span>
            </h2>
            <p className="text-lg sm:text-xl font-bold text-muted-foreground break-keep">
              외국인 관광객의 미용 서비스 이용 현황 및 지출 분석
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.15} direction="up" width="100%">
              <div className="h-full bg-white/40 backdrop-blur-md rounded-[2rem] p-8 border border-white/60 shadow-xl flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                <h3 className="text-base sm:text-lg font-black text-foreground/80 mb-2">{s.title}</h3>
                <p className="text-xl sm:text-2xl font-black text-rose-500 mb-1">{s.mainVal}</p>
                {s.subTitle && <p className="text-xs font-bold text-muted-foreground">{s.subTitle}</p>}
                <div className="w-full flex-grow flex items-center justify-center">
                  {s.subContent || s.extra}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Charts Container */}
        <div className="max-w-6xl mx-auto bg-white/50 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 border border-white/70 shadow-2xl overflow-hidden">
          <div className="text-center mb-12">
            <h3 className="text-xl sm:text-2xl font-black text-foreground">미용·뷰티 이용객 및 매출 성장 추이</h3>
            <div className="w-12 h-1 bg-rose-200 mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            {/* Left Column: Bar Chart */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center px-2">
                <span className="text-xs font-bold text-muted-foreground">미용 뷰티 이용객 수 (만 명)</span>
              </div>
              <div className="relative h-64 flex items-end justify-between px-4 pb-6 border-b border-rose-100">
                {[
                  { yr: "2021", val: 50, h: "30%", valTxt: "" },
                  { yr: "2022", val: 150, h: "50%", valTxt: "150만 명", active: true },
                  { yr: "2023", val: 210, h: "70%", valTxt: "210만 명", active: true },
                  { yr: "2024", val: 250, h: "90%", valTxt: "250만 명", highlight: true }
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center w-1/5 group relative">
                    {bar.valTxt && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className={`absolute -top-10 whitespace-nowrap px-2 py-1 rounded-lg text-[10px] font-black shadow-sm ${bar.highlight ? 'bg-rose-500 text-white' : 'bg-rose-100 text-rose-500'}`}
                      >
                        {bar.valTxt}
                        <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${bar.highlight ? 'bg-rose-500' : 'bg-rose-100'}`} />
                      </motion.div>
                    )}
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: bar.h }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                      className={`w-full rounded-t-xl shadow-lg transition-transform group-hover:scale-105 ${bar.highlight ? 'bg-gradient-to-t from-rose-600 to-rose-400' : 'bg-rose-200'}`}
                    />
                    <span className="absolute -bottom-6 text-[10px] font-bold text-muted-foreground">{bar.yr}</span>
                  </div>
                ))}
                {/* Y-axis helpers */}
                <div className="absolute left-0 h-full flex flex-col justify-between text-[8px] font-bold text-rose-200 -ml-8">
                  <span>300만</span><span>200만</span><span>150만</span><span>100만</span><span>50만</span><span>0</span>
                </div>
              </div>
            </div>

            {/* Right Column: Line Chart */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center px-2">
                <span className="text-xs font-bold text-muted-foreground">미용 시술 총 매출액 (백만 원)</span>
              </div>
              <div className="relative h-64 border-b border-rose-100">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                  {/* Grid Lines */}
                  {[0, 20, 40, 60, 80].map(y => (
                    <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#FFE4E9" strokeWidth="0.5" strokeDasharray="2,2" />
                  ))}
                  
                  {/* Path Area */}
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    d="M 10 90 L 30 70 L 60 40 L 90 20 L 90 100 L 10 100 Z"
                    fill="url(#trendGradient)"
                    className="opacity-30"
                  />
                  {/* Main Line */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    d="M 10 90 L 30 70 L 60 40 L 90 20"
                    fill="none"
                    stroke="#9F1239"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Data Points */}
                  {[
                    { x: 10, y: 90, val: "3,000만 명" },
                    { x: 30, y: 70, val: "" },
                    { x: 60, y: 40, val: "6,750만 명" },
                    { x: 90, y: 20, val: "7,000만 명", highlight: true }
                  ].map((p, i) => (
                    <g key={i}>
                      <circle cx={p.x} cy={p.y} r="2" fill="white" stroke="#9F1239" strokeWidth="1" />
                      {p.val && (
                        <foreignObject x={p.x - 15} y={p.y - 12} width="40" height="15">
                           <div className={`px-1 py-0.5 rounded text-[4px] font-black text-center shadow-sm ${p.highlight ? 'bg-rose-800 text-white' : 'bg-rose-700 text-white'}`}>
                            {p.val}
                           </div>
                        </foreignObject>
                      )}
                    </g>
                  ))}
                  <defs>
                    <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FB7185" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Years Labels */}
                <div className="absolute -bottom-6 w-full flex justify-between px-6 text-[10px] font-bold text-muted-foreground">
                  <span>2021</span><span>2022</span><span>2023</span><span>2024</span>
                </div>
                {/* Y Axis Guide */}
                <div className="absolute right-[-45px] h-full flex flex-col justify-between text-[8px] font-bold text-rose-300">
                  <span>7,000만</span><span>6,000만</span><span>5,000만</span><span>4,000만</span><span>3,000만</span><span>1,000만</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Flowers (Bottom Corner decoration) */}
        <div className="relative mt-20 flex justify-center opacity-10 grayscale-0 pointer-events-none text-4xl">
           <div className="animate-pulse">🌸</div>
           <div className="absolute -top-10 left-1/4 animate-bounce">🌸</div>
           <div className="absolute top-10 right-1/4 animate-bounce delay-75">🌸</div>
        </div>
      </div>
    </section>
  );
};

export default KBeautyTrendSection;
