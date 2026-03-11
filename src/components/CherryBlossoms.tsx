import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const flowers = ["🌸", "🌼", "🌺", "🌷", "💮"];

interface Petal {
  id: number;
  startX: number;
  endX: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  flower: string;
}

const CherryBlossoms = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // 흩날리는 벚꽃잎 35개 생성
    const generatedPetals = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      startX: Math.random() * 100, // 시작 화면 x 좌표 위치 (%)
      endX: Math.random() * 100, // 끝날때 화면 x 좌표 위치 (%) - 자연스럽게 흔들리도록
      delay: Math.random() * 15, // 각자 떨어지는 시작 시간 차이
      duration: Math.random() * 8 + 8, // 떨어지는데 걸리는 시간 (8초 ~ 16초)
      size: Math.random() * 12 + 16, // 꽃 크기 크게 (16px ~ 28px)
      rotation: Math.random() * 360, // 꽃 회전
      flower: flowers[Math.floor(Math.random() * flowers.length)],
    }));
    setPetals(generatedPetals);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-[-5%]"
          style={{
            fontSize: petal.size,
            left: `${petal.startX}%`,
            opacity: 0.35,
            transformOrigin: "center center",
            userSelect: "none",
            filter: "blur(2px) drop-shadow(0px 1px 2px rgba(0,0,0,0.05))"
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [`${petal.startX}%`, `${petal.endX}%`],
            rotate: [petal.rotation, petal.rotation + 360 + Math.random() * 180],
            opacity: [0, 0.35, 0.35, 0], // 천천히 나타나서 사라짐
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
        >
          {petal.flower}
        </motion.div>
      ))}
    </div>
  );
};

export default CherryBlossoms;
