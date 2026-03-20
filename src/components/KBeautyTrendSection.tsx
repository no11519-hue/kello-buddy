import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const stats = [
  {
    title: "전체 외국인 관광객 수",
    mainVal: "2024년 1,700만 명",
    subContent: (
      <div className="mt-4 relative h-24 w-full flex items-end">
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
    ),
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
            <p className="text-xl font-black text-muted-foreground">전체 관광객 중 비중</p>
            <p className="text-2xl font-black text-primary">약 15%</p>
          </div>
        </div>
      </div>
    ),
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
            <p className="text-sm font-black text-rose-500">399만 원</p>
          </div>
        </div>
      </div>
    ),
  },
];

const KBeautyTrendSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF5F7] to-[#FFE3EC] relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none">🌸</div>
      <div className="absolute bottom-20 right-10 opacity-20 pointer-events-none text-2xl">🌸</div>
      <div className="absolute top-1/2 right-1/4 opacity-10 pointer-events-none text-xl">✨</div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 break-keep">
              글로벌 관광객 유입과 <br className="sm:hidden" /> <span className="text-rose-500">K-뷰티 소비 트렌드</span>
            </h2>
            <p className="text-lg sm:text-xl font-bold text-muted-foreground break-keep">
              외국인 관광객의 미용 서비스 이용 현황 및 지출 분석
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto items-stretch">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.15} direction="up" width="100%" className="flex">
              <div className="flex-1 bg-white/40 backdrop-blur-md rounded-[2rem] p-8 border border-white/60 shadow-xl flex flex-col items-center text-center group hover:-translate-y-1 transition-transform min-h-[320px]">
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
        <ScrollReveal width="100%" delay={0.2}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-black text-foreground">미용·뷰티 이용객 및 매출 성장 추이</h3>
              <div className="w-16 h-1 bg-rose-300 mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

              {/* ── LEFT: Bar Chart ── */}
              <div className="bg-white/50 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/70 shadow-xl">
                <div className="relative h-80 sm:h-96 mt-10">
                  {/* Y-axis labels */}
                  {["300만", "250만", "200만", "150만", "100만", "50만", "0"].map((v, i) => {
                    const percentages = [100, 83.3, 66.6, 50, 33.3, 16.6, 0];
                    return (
                      <div key={v} className="absolute left-0 text-xs font-bold text-rose-300"
                        style={{ bottom: `${percentages[i]}%`, transform: "translateY(50%)" }}>
                        {v}
                      </div>
                    );
                  })}
                  {/* Grid lines */}
                  {[0, 16.6, 33.3, 50, 66.6, 83.3, 100].map(p => (
                    <div key={p} className="absolute w-full border-t border-dashed border-rose-100"
                      style={{ bottom: `${p}%`, left: "2rem" }} />
                  ))}
                  {/* Bars */}
                  <div className="absolute inset-0 flex items-end justify-around pl-10 pb-8 gap-3">
                    {[
                      { yr: "2021", pct: 40, valTag: null },
                      { yr: "2022", pct: 55, valTag: { text: "150만 명", highlight: false } },
                      { yr: "2023", pct: 72, valTag: { text: "210만 명", highlight: false } },
                      { yr: "2024", pct: 90, valTag: { text: "250만 명", highlight: true } },
                    ].map((bar, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center h-full justify-end relative">
                        {bar.valTag && (
                          <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            className={`absolute whitespace-nowrap text-sm font-black px-3 py-1 rounded-xl shadow-md z-10 ${bar.valTag.highlight ? "bg-rose-600 text-white text-base" : "bg-rose-100 text-rose-600"}`}
                            style={{ bottom: `calc(${bar.pct}% + 2rem)` }}
                          >
                            {bar.valTag.text}
                            <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 ${bar.valTag.highlight ? "bg-rose-600" : "bg-rose-100"}`} />
                          </motion.div>
                        )}
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${bar.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                          className={`w-full max-w-[60px] rounded-t-2xl shadow-lg ${i === 3 ? "bg-gradient-to-t from-rose-700 via-rose-500 to-rose-400" : "bg-gradient-to-t from-rose-300 to-rose-200"}`}
                        />
                        <span className="absolute -bottom-6 text-sm font-bold text-muted-foreground">{bar.yr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Line / Area Chart ── */}
              <div className="bg-white/50 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/70 shadow-xl">
                <div className="flex justify-end mb-2">
                  <span className="text-xs font-bold text-muted-foreground">미용 시술 총 매출액 (억 원)</span>
                </div>
                {/* Chart area */}
                <div className="relative h-80 sm:h-96">
                  {/* Y-axis labels LEFT */}
                  {["7000", "6000", "5000", "4000", "3000", "2000", "1000", "0"].map((v, i) => {
                    const p = (parseInt(v) / 7000) * 100;
                    return (
                      <div key={v} className="absolute left-0 text-[10px] font-bold text-rose-300"
                        style={{ bottom: `${p}%`, transform: "translateY(50%)" }}>
                        {v}
                      </div>
                    );
                  })}

                  {/* SVG — viewBox has negative top space for labels */}
                  <div className="absolute inset-0 px-10 pb-8">
                    <svg
                      viewBox="0 -120 300 350"
                      className="w-full h-full overflow-visible"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="areaGrad2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Grid lines - precisely mapped to labels */}
                      {[0, 28.57, 57.14, 85.71, 114.28, 142.85, 171.42, 200].map(y => (
                        <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#FFE4E9" strokeWidth="0.5" strokeDasharray="4,4" />
                      ))}

                      {/* Area fill */}
                      <motion.path
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        d="M 20 185 C 60 175, 80 160, 100 130 C 130 95, 170 65, 220 50 L 280 30 L 280 200 L 20 200 Z"
                        fill="url(#areaGrad2)"
                      />

                      {/* Line */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                        d="M 20 185 C 60 175, 80 160, 100 130 C 130 95, 170 65, 220 50 L 280 30"
                        fill="none"
                        stroke="#9F1239"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Data point circles - precisely aligned with grid lines */}
                      {[
                        { x: 20,  y: 171.42 }, // 1000
                        { x: 100, y: 114.28 }, // 3000
                        { x: 220, y: 28.57  }, // 6000
                        { x: 280, y: 0      }, // 7000
                      ].map((p, i) => (
                        <motion.circle
                          key={i}
                          cx={p.x} cy={p.y} r="6"
                          fill="white" stroke="#9F1239" strokeWidth="2.5"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1 + i * 0.2 }}
                        />
                      ))}

                      {/* ── 6,000억 label — centered on x=220, y=28.57 ── */}
                      <line x1="220" y1="-15" x2="220" y2="23" stroke="#fda4af" strokeWidth="1.5" strokeDasharray="3,2" />
                      <foreignObject x="150" y="-65" width="140" height="50">
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                          <div style={{
                            background: "#ffe4e6",
                            color: "#e11d48",
                            fontSize: "12px",
                            fontWeight: 900,
                            padding: "4px 12px",
                            borderRadius: "12px",
                            whiteSpace: "nowrap",
                            boxShadow: "0 4px 12px rgba(225,29,72,0.15)",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px"
                          }}>
                            <span style={{ backgroundColor: "#e11d48", color: "#fff", width: "16px", height: "16px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>?</span>
                            6,000억 원
                          </div>
                        </div>
                      </foreignObject>

                      {/* ── 7,000억 label — centered on x=280, y=0 ── */}
                      <line x1="280" y1="-55" x2="280" y2="-8" stroke="#9f1239" strokeWidth="1.5" strokeDasharray="3,2" />
                      <foreignObject x="210" y="-105" width="140" height="50">
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                          <div style={{
                            background: "#9f1239",
                            color: "#fff",
                            fontSize: "12px",
                            fontWeight: 900,
                            padding: "4px 12px",
                            borderRadius: "12px",
                            whiteSpace: "nowrap",
                            boxShadow: "0 4px 16px rgba(159,18,57,0.3)",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px"
                          }}>
                            <span style={{ backgroundColor: "#fff", color: "#9f1239", width: "16px", height: "16px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>?</span>
                            7,000억 원
                          </div>
                        </div>
                      </foreignObject>

                      {/* Kello와 추가 수익 annotation — centered between 2023-2024 */}
                      <foreignObject x="100" y="70" width="160" height="80">
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                          <div style={{
                            color: "#9f1239",
                            fontSize: "13px",
                            fontWeight: 900,
                            textAlign: "center",
                            lineHeight: 1.3,
                            backgroundColor: "rgba(255,255,255,0.7)",
                            padding: "4px 8px",
                            borderRadius: "8px",
                            backdropFilter: "blur(2px)"
                          }}>
                            Kello와<br />추가 수익
                          </div>
                          <div style={{ color: "#e11d48", fontSize: "20px", marginTop: "1px", fontWeight: "bold" }}>↑</div>
                        </div>
                      </foreignObject>
                    </svg>

                    {/* X Axis */}
                    <div className="absolute bottom-0 w-full flex justify-between px-10 text-sm font-bold text-muted-foreground">
                      <span>2021</span><span>2022</span><span>2023</span><span>2024</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* Decorative bottom */}
        <div className="mt-16 flex justify-center gap-6 opacity-15 pointer-events-none text-3xl">
          <span className="animate-pulse">🌸</span>
          <span className="animate-bounce">🌸</span>
          <span className="animate-pulse delay-75">🌸</span>
        </div>
      </div>
    </section>
  );
};

export default KBeautyTrendSection;
