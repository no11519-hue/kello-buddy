import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ClipboardList } from "lucide-react";
import SurveyDialog from "./SurveyDialog";

const FloatingPromo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [surveyOpen, setSurveyOpen] = useState(false);

  useEffect(() => {
    // 2초 뒤에 등장
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleOpenPromo = () => {
    window.dispatchEvent(new Event('open-promo-popup'));
  };

  const handleSurveyOpen = () => {
    setSurveyOpen(true);
  };

  if (isDismissed) return null;

  return (
    <>
      <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.8 }}
              className="pointer-events-auto flex flex-col items-end group"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="mb-1 p-1 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-border text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-3 w-3" />
              </button>

              {/* Coffee Promo Card */}
              <button
                onClick={handleOpenPromo}
                className="bg-white rounded-2xl shadow-xl border border-primary/20 p-2 pr-4 flex items-center gap-3 hover:scale-105 transition-transform shadow-primary/10 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
                <img 
                  src="/event-coffee.png" 
                  alt="커피 이벤트" 
                  className="w-12 h-12 rounded-xl object-contain bg-secondary/50"
                />
                <div className="text-left">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-0.5">Event</p>
                  <p className="text-sm font-black text-foreground leading-tight">
                    지금 신청하면<br />커피 쿠폰 증정! 🎁
                  </p>
                </div>
              </button>

              {/* Survey Button */}
              <button
                onClick={handleSurveyOpen}
                className="mt-3 bg-foreground text-background rounded-full px-4 py-2.5 flex items-center gap-2 shadow-xl hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95 border border-white/10"
              >
                <ClipboardList className="h-4 w-4 text-primary" />
                <span className="text-xs font-bold whitespace-nowrap">설문조사 참여하기</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <SurveyDialog 
        open={surveyOpen} 
        onOpenChange={setSurveyOpen}
        // 기본 정보 없이 설문만 진행 (필요시 '익명 사장님' 등으로 세팅 가능)
        basicInfo={{
          businessName: "플로팅 링크 유입",
          region: "미지정",
          category: "미지정",
          contact: "010-0000-0000",
          email: "floating@kello.kr"
        }}
      />
    </>
  );
};

export default FloatingPromo;
