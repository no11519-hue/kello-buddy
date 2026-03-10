import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

const SESSION_KEY = "coffee_event_shown";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      const timer = setTimeout(() => {
        sessionStorage.setItem(SESSION_KEY, "true");
        setOpen(true);
      }, 10000); // Popup appears after 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleRegister = () => {
    setOpen(false);
    const ctaSection = document.getElementById("cta-form");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="max-w-sm rounded-3xl border-none bg-gradient-to-b from-card to-secondary p-8 glass-card">
        <AlertDialogHeader className="space-y-2">
          <AlertDialogTitle className="text-2xl font-black leading-tight text-foreground text-center">
            🎁 파트너 신청 이벤트
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base leading-relaxed text-muted-foreground text-center flex flex-col items-center justify-center pt-2">
            <img src="/event-coffee.png" alt="메가커피 기프티콘 증정" className="w-full max-w-[240px] rounded-2xl mb-6 shadow-sm object-contain" />
            <span className="font-semibold text-foreground mb-4">
              지금 파트너 등록을 완료하면<br />선착순 50분께 메가커피 쿠폰을 드립니다.
            </span>
            <span>
              외국인 고객 예약도 받고<br />시원한 커피도 받아가세요!
            </span>
            <span className="text-sm font-bold text-primary mt-4 bg-primary/10 px-3 py-1 rounded-full">
              (1분 등록)
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4 flex-col gap-2 sm:flex-col items-center w-full">
          <AlertDialogAction
            onClick={handleRegister}
            className="w-full rounded-2xl bg-gradient-accent py-6 text-lg font-bold text-accent-foreground hover:scale-[1.02] shadow-kello-glow transition-transform"
          >
            파트너 신청하기
          </AlertDialogAction>
          <AlertDialogCancel className="w-full border-none bg-transparent mt-2 text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-foreground">
            닫기
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ExitIntentPopup;
