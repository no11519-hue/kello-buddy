import { motion } from "framer-motion";
import { BadgeCheck, Star, ShieldCheck, MessageSquareQuote } from "lucide-react";

const trustItems = [
  { icon: BadgeCheck, label: "가격 신뢰", desc: "정찰제 기반의 투명한 가격 안내" },
  { icon: Star, label: "후기 기반", desc: "실제 이용 후기로 검증된 매장" },
  { icon: ShieldCheck, label: "보안·개인정보", desc: "안전한 결제 및 개인정보 보호" },
];

const reviews = [
  {
    name: "사전 신청 매장",
    role: "서울 노원구 ㅇㅇㅇ헤어",
    text: "외국인 예약 문의 들어올 때마다 은근 애매한 부분이 있었는데, 이런 플랫폼 있으면 진짜 훨씬 편해질 것 같아요!",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "서울 강남구 ㅇㅇㅇ네일",
    text: "예약 관리까지 같이 되는 거면 생각보다 훨씬 괜찮은데요? 외국인 손님 연결도 자연스럽게 될 것 같아서 기대돼요~",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "부산 해운대구 ㅇㅇ에스테틱",
    text: "문의는 종종 오는데 예약까지 이어지는 건 늘 어려웠거든요. 이건 그런 부분이 좀 해결될 수 있을 것 같아요!",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "서울 마포구 ㅇㅇ에스테틱",
    text: "요즘 K-뷰티 관심 있는 외국인 진짜 많아서, 이런 플랫폼이면 더 쉽게 유입될 것 같아요ㅎㅎ",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "부산 부산진구 ㅇㅇㅇ헤어",
    text: "처음엔 반신반의했는데 막상 보니까 구조가 복잡하지 않아서 괜찮아 보였어요~ 이런 건 편한 게 제일이더라고요.",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "서울 송파구 ㅇㅇ네일",
    text: "외국인 손님 따로 응대하는 게 솔직히 좀 부담이었는데, 이렇게 연결해주면 한결 수월할 것 같아요!!",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "부산 수영구 ㅇㅇㅇㅇㅇ피부",
    text: "예약 과정이 직관적이라 좋더라고요. 고객 입장에서도 어렵지 않게 쓸 수 있을 것 같아서 인상 괜찮았어요.",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "서울 영등포구 ㅇㅇㅇㅇ왁싱",
    text: "요즘 외국인 고객 늘고 있는 게 느껴져서 이런 서비스는 한 번 써보고 싶다는 생각 들었어요 🙂",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "부산 동래구 ㅇㅇㅇㅇㅇ헤어",
    text: "외국인 고객 응대가 늘 고민이었는데, 이런 플랫폼 있으면 확실히 도움 될 것 같네요. 꽤 실용적일 것 같아요!",
    rating: 5,
  },
  {
    name: "사전 신청 매장",
    role: "서울 서초구 ㅇㅇㅇㅇ브로우",
    text: "아직 초기라서 더 눈길이 가는 것 같아요~ 오히려 이런 때 먼저 참여해보는 것도 괜찮겠다 싶어요.",
    rating: 5,
  },
];


const SocialProofSection = () => {
  return (
    <section className="py-24 bg-kello-blue-light relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-kello-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">Trust</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            사장님이 신뢰할 수 있는 이유
          </h2>
        </motion.div>

        {/* Trust Icons */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-kello-card border border-border text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Reviews (Infinite Auto-scroll Marquee) */}
        <div className="relative w-full overflow-hidden py-8 max-w-[1400px] mx-auto group">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-kello-blue-light to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-kello-blue-light to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex flex-nowrap gap-6 pl-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 90, // 더 천천히 지나가게 조절 (기존 35 -> 90)
            }}
            // hover 시 멈추게 하려면 className에 쓰거나 framer-motion 제어
            style={{ display: "flex" }}
          >
            {/* 자연스러운 무한 루프를 위해 후기 배열을 여러 번 반복 연결 */}
            {[...reviews, ...reviews, ...reviews, ...reviews, ...reviews, ...reviews].map((review, i) => (
              <div
                key={`${review.name}-${i}`}
                className="w-[260px] md:w-[320px] shrink-0 bg-card rounded-2xl p-6 md:p-7 shadow-kello-card border border-border hover:shadow-md transition-shadow duration-300"
              >
                <MessageSquareQuote className="h-6 w-6 text-primary/40 mb-4" />
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5 break-keep">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-kello-gold text-kello-gold" />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.role}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
