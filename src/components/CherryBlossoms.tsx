import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Bubble {
  id: number;
  startX: number;
  endX: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

const HeartBubble = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-sm" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}>
    <defs>
      <radialGradient id="bubbleGrad" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
        <stop offset="30%" stopColor="rgba(255,200,210,0.4)" />
        <stop offset="60%" stopColor="rgba(200,220,255,0.3)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.8)" />
      </radialGradient>
    </defs>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#bubbleGrad)" stroke="rgba(255,255,255,0.9)" strokeWidth="0.8"/>
    {/* Bubble highlight curve */}
    <path d="M5.5 8.5a3 3 0 0 1 2-2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.9"/>
  </svg>
);

const CherryBlossoms = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // 하트 비눗방울 30개 생성
    const generatedBubbles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      startX: Math.random() * 100, // 시작 가로 위치 (%)
      endX: Math.random() * 100, // 끝날 때 가로 위치 (%) - 자연스럽게 흔들림
      delay: Math.random() * 10, // 각자 떨어지는 시작 시간 차이
      duration: Math.random() * 12 + 10, // 떠오르는 시간 (10초 ~ 22초) - 조금 더 천천히
      size: Math.random() * 25 + 20, // 방울 크기 (20px ~ 45px)
      rotation: Math.random() * 40 - 20, // 회전각
    }));
    setBubbles(generatedBubbles);
  }, []);

  if (bubbles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.startX}%`,
            bottom: "-10%", // 비눗방울이라 아래에서 시작
            opacity: 0.7, // 약간 투명하게
            transformOrigin: "center center",
            userSelect: "none",
            filter: "blur(0.5px)" // 아주 약한 블러
          }}
          animate={{
            y: ["0vh", "-120vh"], // 위로 떠오름
            x: [`${bubble.startX}%`, `${bubble.endX}%`], // 좌우로 약간씩 이동
            rotate: [bubble.rotation, bubble.rotation + (Math.random() > 0.5 ? 30 : -30)], // 천천히 회전
            opacity: [0, 0.7, 0.7, 0], // 천천히 나타나서 사라짐
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "linear",
          }}
        >
          <HeartBubble />
        </motion.div>
      ))}
    </div>
  );
};

export default CherryBlossoms;
