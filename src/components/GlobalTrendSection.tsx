import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const GlobalTrendSection = () => {
  return (
    <section className="py-20 bg-[#f9f1f6]/30 relative overflow-hidden font-sans">
      {/* Background soft pink gradient / flower patterns if possible */}
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-12">
            <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-[#2d0a28] mb-2 tracking-tight">
              글로벌 관광객 유입과 <span className="text-[#a8448d]">K-뷰티 소비 트렌드</span>
            </h2>
            <p className="text-lg md:text-xl text-[#6b4c65] font-semibold mb-10">
              외국인 관광객의 미용 서비스 이용 현황 및 지출 분석
            </p>
          </div>
        </ScrollReveal>

        {/* Top 3 Cards Row */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {/* Card 1: 전체 외국인 관광객 수 */}
          <ScrollReveal delay={0.1} width="100%">
            <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 border border-[#f0dee6] shadow-[0_8px_30px_rgb(168,68,141,0.08)] flex flex-col items-center text-center h-full">
              <h3 className="text-[1.1rem] font-bold text-[#4a3648] mb-4">전체 외국인 관광객 수</h3>
              <div className="text-[2rem] font-black text-[#2d0a28] mb-6">
                2024년 <span className="text-[#a8448d]">1,700만 명</span>
              </div>
              {/* World/Chart visual placeholder as per image */}
              <div className="relative w-full h-32 flex items-center justify-center opacity-70">
                <img src="/placeholder.svg" className="w-24 h-24 text-[#e8bed5]" alt="map" />
                <div className="absolute bottom-4 right-4 flex gap-2 text-[10px] text-[#a8448d]/50 font-bold">
                  <span>2021</span>
                  <span>2022</span>
                  <span>2023</span>
                  <span>2024</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: 미용·뷰티 이용자 수 및 비중 */}
          <ScrollReveal delay={0.2} width="100%">
            <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 border border-[#f0dee6] shadow-[0_8px_30px_rgb(168,68,141,0.08)] flex flex-col items-center text-center h-full">
              <h3 className="text-[1.1rem] font-bold text-[#4a3648] mb-1">미용·뷰티 이용자 수 및 비중</h3>
              {/* Icon Row */}
              <div className="flex gap-4 mb-4 text-[#a8448d]/40">
                <div className="w-8 h-8">💄</div>
                <div className="w-8 h-8">🧴</div>
              </div>
              <div className="text-center">
                <p className="text-[#6b4c65] text-sm font-bold mb-1">미용 서비스 이용자 수</p>
                <div className="text-[2rem] font-black text-[#2d0a28] mb-1">
                  약 <span className="text-[#ff5aa5]">250만 명</span>
                </div>
                <p className="text-[#6b4c65] text-sm font-bold mb-4">전체 관광객 총 비중</p>
                <div className="text-[2rem] font-black text-[#2d0a28]">
                  약 <span className="text-[#a8448d]">15%</span>
                </div>
              </div>
              {/* Donut Chart as per image */}
              <div className="mt-4 relative w-20 h-20">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 scale-[1.2]">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#fce7ee" strokeWidth="20" />
                  <circle 
                    cx="50" cy="50" r="40" fill="transparent" 
                    stroke="#ff5aa5" strokeWidth="20" 
                    strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.15)} 
                  />
                </svg>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: 지출액 분석 */}
          <ScrollReveal delay={0.3} width="100%">
            <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 border border-[#f0dee6] shadow-[0_8px_30px_rgb(168,68,141,0.08)] flex flex-col items-center text-center h-full">
              <h3 className="text-[1.1rem] font-bold text-[#4a3648] mb-6">1인당 미용 목적 평균 지출</h3>
              <div className="w-full space-y-6">
                <div>
                   <div className="text-[2.2rem] font-black text-[#a8448d] leading-none mb-1">153만 원</div>
                   <p className="text-[#6b4c65] text-xs font-bold break-keep">미용목적 카드 사용액 평균</p>
                </div>
                <div className="w-full h-[1px] bg-[#f0dee6]" />
                <div>
                   <div className="text-[1.8rem] font-black text-[#6b4c65] leading-none mb-1">399만 원</div>
                   <p className="text-[#6b4c65]/60 text-xs font-bold break-keep">한국 내 전체 카드 사용액 평균</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Large Growth Chart Container (The one matching the bottom image section) */}
        <ScrollReveal delay={0.4} width="100%">
          <div className="bg-white/80 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 border border-[#f0dee6] shadow-[0_8px_40px_rgb(168,68,141,0.06)]">
            <h3 className="text-[1.6rem] md:text-[1.8rem] font-black text-[#2d0a28] mb-12 text-center">
              미용·뷰티 이용객 및 매출 성장 추이
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Bar Chart Side */}
              <div className="w-full">
                <div className="flex justify-between items-center mb-6">
                   <span className="text-xs font-bold text-[#a8448d]">미용 뷰티 이용객 수 (만 명)</span>
                </div>
                <div className="flex items-end justify-between h-56 gap-4 px-2 relative border-b-2 border-[#f0dee6]">
                  {[
                    { year: "2021", val: 50, color: "#f8d9eb", text: "" },
                    { year: "2022", val: 120, color: "#f0b6d9", text: "150만 명" },
                    { year: "2023", val: 180, color: "#e88fbf", text: "210만 명" },
                    { year: "2024", val: 250, color: "#a8448d", text: "250만 명" },
                  ].map((bar, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center relative">
                      {bar.text && (
                        <div className={`absolute -top-10 px-2 py-0.5 rounded-md text-[10px] font-black ${idx === 3 ? 'bg-[#a8448d] text-white' : 'bg-[#eecade] text-[#a8448d]'}`}>
                          {bar.text}
                        </div>
                      )}
                      <motion.div 
                        initial={{height:0}} 
                        whileInView={{height: `${(bar.val/250) * 100}%`}} 
                        transition={{duration:1, delay: idx * 0.15}} 
                        className="w-full rounded-t-lg" 
                        style={{backgroundColor: bar.color}}
                      />
                      <span className={`text-[11px] mt-3 font-bold ${idx === 3 ? 'text-[#a8448d]' : 'text-[#6b4c65]/50'}`}>{bar.year}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Line Chart Side */}
              <div className="w-full">
                <div className="flex justify-between items-center mb-6">
                   <span className="text-xs font-bold text-[#ff5aa5]">미용 시술 총 매출액 (백만 원)</span>
                </div>
                <div className="relative h-56 px-4 border-b-2 border-[#f0dee6]">
                  <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                     <motion.path 
                       d="M 10 45 Q 35 40, 60 25 T 90 5" 
                       fill="none" 
                       stroke="#ff5aa5" 
                       strokeWidth="2.5" 
                       initial={{ pathLength: 0 }}
                       whileInView={{ pathLength: 1 }}
                       transition={{ duration: 1.5 }}
                     />
                     {[
                       {x: 10, y: 45, val: "3,000만"},
                       {x: 60, y: 25, val: "6,750만"},
                       {x: 90, y: 5, val: "7,000만 명"}
                     ].map((p, i) => (
                       <motion.circle 
                         key={i} cx={p.x} cy={p.y} r="2.5" 
                         fill="white" stroke="#ff5aa5" strokeWidth="2"
                         initial={{ scale: 0 }}
                         whileInView={{ scale: 1 }}
                         transition={{ delay: 1 + i * 0.2 }}
                       />
                     ))}
                  </svg>
                  {/* Floating Bubbles like in image */}
                  <div className="absolute left-[5%] bottom-[5%] -translate-y-[100%] bg-[#ffeff5] border border-[#ffd5e2] px-2 py-1 rounded-md text-[9px] font-black text-[#ff5aa5]">3,000만 명</div>
                  <div className="absolute left-[55%] top-[50%] -translate-y-[100%] bg-[#ffeff5] border border-[#ffd5e2] px-2 py-1 rounded-md text-[9px] font-black text-[#ff5aa5]">6,750만 명</div>
                  <div className="absolute right-[5%] top-0 -translate-y-[60%] bg-[#ff5aa5] px-3 py-1 rounded-md text-[11px] font-black text-white shadow-lg">7,000만 명</div>
                  
                  <div className="flex justify-between mt-3 text-[11px] font-bold text-[#6b4c65]/50">
                    <span>2021</span>
                    <span>2022</span>
                    <span>2023</span>
                    <span>2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GlobalTrendSection;
