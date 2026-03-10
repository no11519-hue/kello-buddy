import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "영어를 못해도 되나요?",
    a: "네, 걱정하지 않으셔도 됩니다. Kello이 AI 실시간 번역으로 외국인 고객과의 소통을 지원합니다. 예약 접수부터 상담까지 사장님은 한국어로만 응대하시면 됩니다.",
  },
  {
    q: "노쇼가 걱정돼요.",
    a: "Kello은 100% 선결제·정찰제 기반입니다. 고객이 예약 시 결제를 완료하기 때문에 노쇼 리스크가 사실상 제로입니다. 확정된 매출만 받으세요.",
  },
  {
    q: "수수료는 어떻게 되나요?",
    a: "예약이 성사될 때만 수수료가 발생하는 성과 기반 구조입니다. 고정비 부담 없이 시작할 수 있으며, 상세 요금표는 파트너 신청 후 안내드립니다.",
  },
  {
    q: "어떤 업종이 입점 가능한가요?",
    a: "네일, 헤어, 피부관리, 속눈썹, 왁싱 등 뷰티 관련 업종을 중심으로 입점을 받고 있습니다. 그 외 업종도 문의 주시면 검토해 드립니다.",
  },
  {
    q: "기존 예약 시스템과 충돌하지 않나요?",
    a: "Kello은 외국인 전용 예약 채널로 운영되므로, 기존에 사용 중인 국내 예약 시스템과 독립적으로 운영됩니다. 이중 예약 걱정 없이 사용하실 수 있습니다.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 10% 20%, hsl(var(--kello-coral) / 0.04) 0%, transparent 40%), radial-gradient(circle at 90% 80%, hsl(var(--primary) / 0.04) 0%, transparent 40%)" }} />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            자주 묻는 질문
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
