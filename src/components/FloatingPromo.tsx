import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ClipboardList } from "lucide-react";
import SurveyDialog from "./SurveyDialog";

const FloatingPromo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [surveyOpen, setSurveyOpen] = useState(false);

  useEffect(() => {
    // 2초 뒤에 등장
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenPromo = () => {
    window.dispatchEvent(new Event('open-promo-popup'));
  };

  const handleSurveyOpen = () => {
    setSurveyOpen(true);
  };

  return (
    <>
      <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end pointer-events-none">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              layout
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.8 }}
              className="pointer-events-auto flex flex-col items-end"
            >
              {isMinimized ? (
                /* Minimized Icon State */
                <motion.button
                  layoutId="promo-card"
                  onClick={() => setIsMinimized(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-white rounded-full shadow-kello-glow border-2 border-primary/20 flex items-center justify-center relative overflow-hidden group"
                >
                  <img 
                    src="/event-coffee.png" 
                    alt="이벤트 아이콘" 
                    className="w-10 h-10 object-contain"
                  />
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-bounce" />
                </motion.button>
              ) : (
                /* Expanded Card State */
                <motion.div 
                  layoutId="promo-card"
                  className="flex flex-col items-end"
                >
                  {/* Close Buton (Minimizes) */}
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="mb-2 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-border text-muted-foreground hover:text-foreground transition-colors z-10"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <div className="bg-white rounded-[1.5rem] shadow-2xl border border-primary/10 overflow-hidden flex flex-col w-[220px] sm:w-[240px] shadow-primary/10 group">
                    {/* Upper Section: Coffee Coupon (Click to open promo) */}
                    <button
                      onClick={handleOpenPromo}
                      className="p-3 flex items-center gap-3 text-left hover:bg-primary/5 transition-colors relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                      <div className="relative shrink-0">
                        <img 
                          src="/event-coffee.png" 
                          alt="커피 이벤트" 
                          className="w-12 h-12 rounded-xl object-contain bg-secondary/50 shadow-sm border border-white/50"
                        />
                        <div className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[8px] font-black px-1.5 py-0.5 rounded-full shadow-sm">
                          BONUS
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-[8px] font-black text-primary uppercase tracking-tighter mb-0.5 font-sans">Special Event</p>
                        <h4 className="text-xs sm:text-sm font-black text-foreground leading-tight">
                          지금 신청하고 설문 완료하면<br />커피 쿠폰 증정! 🎁
                        </h4>
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <SurveyDialog 
        open={surveyOpen} 
        onOpenChange={setSurveyOpen}
        basicInfo={{
          businessName: "플로팅 단일카드 유입",
          region: "미지정",
          category: "미지정",
          contact: "010-0000-0000",
          email: "integrated@kello.kr"
        }}
      />
    </>
  );
};

export default FloatingPromo;
