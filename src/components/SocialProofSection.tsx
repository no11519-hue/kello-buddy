import { motion } from "framer-motion";
import { ClipboardCheck, Link2, Smile, Star, MessageSquareQuote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const trustItems = [
  { icon: ClipboardCheck, label: "간편한 신청", desc: "복잡하지 않게 빠르게 파트너 등록 가능" },
  { icon: Link2, label: "쉬운 예약 연결", desc: "외국인 고객 문의를 더 편하게 연결" },
  { icon: Smile, label: "부담 없는 시작", desc: "처음이어도 어렵지 않게 시작할 수 있는 구조" },
];

const reviews = [
  {
    name: "사전 신청 매장",
    role: "서울 노원구 ㅇㅇㅇ헤어 ✂️",
    text: "외국인 예약 문의는 들어오는데 대화를 어떻게 하지 막막해서 못받고 있었어요, 그런데 이런 플랫폼 있으면 부담이 좀 덜어질 것 같아요!",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "서울 강남구 ㅇㅇㅇ네일 💅",
    text: "예약 관리까지 같이 되는 거면 진짜 편하겠는데요? 외국인 손님! 기대돼요~",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "부산 해운대구 ㅇㅇ에스테틱 ✨",
    text: "외국인 손님 받아보고 싶었는데 반신반의 하며 우선 같이 해보려구요!",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "서울 마포구 ㅇㅇ에스테틱 ✨",
    text: "요즘 SNS만 봐도 K-뷰티 관심 있는 외국인 진짜 많던데ㅎㅎ 좋네요",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "부산 부산진구 ㅇㅇㅇ헤어 ✂️",
    text: "구조가 복잡하지 않아서 괜찮아 보여요~",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "서울 송파구 ㅇㅇ네일 💅",
    text: "외국인 손님 따로 응대하는 게 솔직히 좀 부담이어서 받고 싶다 생각만 하고 그쳤는데, 이렇게 대화도 쉽게 할 수 있도록 되고 연결까지 해주면 한결 수월할 것 같네요!! 기대 됩니다!",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "부산 수영구 ㅇㅇㅇㅇㅇ피부 🌿",
    text: "괜찮을것 같아서 신청 했어요.",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "서울 영등포구 ㅇㅇㅇㅇ왁싱 🌿",
    text: "요즘 외국인 고객 늘고 있는 게 느껴져서 이런 서비스는 한 번 써보고 싶네요 🙂",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "부산 동래구 ㅇㅇㅇㅇㅇ헤어 ✂️",
    text: "이런 플랫폼 있으면 확실히 도움 될 것 같아요. 꽤 실용적일 것 같아서 우리 매장 홍보에 기대도 되고요..",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "서울 서초구 ㅇㅇㅇㅇ브로우 👁️",
    text: "아직 초기라서 더 눈길이 가는 것 같아요~ 함께 잘 성장 했으면 좋겠습니다~ 오히려 이런 때 먼저 참여해보는 것도 괜찮겠다 싶어서 설문도 참여하고 해봅니다~ 번창하세요!",
    rating: 5,
  },
];


const SocialProofSection = () => {
  return (
    <section className="py-24 bg-kello-blue-light relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-kello-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">Trust</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground break-keep">
              사장님이 <br className="sm:hidden" /> 신뢰할 수 있는 이유
            </h2>
          </div>
        </ScrollReveal>

        {/* Trust Icons */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 items-stretch">
          {trustItems.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1} width="100%" className="flex">
              <div className="flex-1 flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm border border-border/40 text-center min-h-[160px]">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1 whitespace-nowrap">{item.label}</h3>
                <p className="text-sm text-muted-foreground whitespace-nowrap">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Marquee (Auto-scrolling) Reviews */}
      <div className="relative w-full overflow-hidden py-10">
        {/* Left Fade Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-kello-blue-light to-transparent z-10 pointer-events-none" />
        
        {/* Right Fade Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-kello-blue-light to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 90, // 더 천천히 지나가게 조절 (기존 35 -> 90)
          }}
          // hover 시 멈추게 하려면 className에 쓰거나 framer-motion 제어
          style={{ display: "flex" }}
          className="flex gap-6 w-max px-6"
        >
          {/* 두 번 반복해서 무한 루프 구현 */}
          {[...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[450px] bg-white rounded-3xl p-8 border border-border/50 shadow-sm relative group hover:shadow-md transition-shadow"
            >
              <MessageSquareQuote className="absolute top-4 right-4 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-kello-gold text-kello-gold" />
                ))}
              </div>
              <p className="text-foreground font-medium leading-relaxed mb-6 break-keep min-h-[4.5rem]">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 border-t border-border/40 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center font-bold text-primary text-sm">
                  K
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{review.name}</h4>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
