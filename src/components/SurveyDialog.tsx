import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import KelloText from "./KelloText";

interface SurveyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SurveyDialog = ({ open, onOpenChange }: SurveyDialogProps) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    q1: "",
    q2: [] as string[],
    q3: "",
    q4: "",
    q5: "",
    q6: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleQ2Toggle = (value: string) => {
    setAnswers((prev) => {
      const current = prev.q2;
      if (current.includes(value)) {
        return { ...prev, q2: current.filter((v) => v !== value) };
      }
      if (current.length >= 2) return prev;
      return { ...prev, q2: [...current, value] };
    });
  };

  const canNext = () => {
    if (step === 0) return !!answers.q1;
    if (step === 1) return answers.q2.length > 0;
    if (step === 2) return !!answers.q3;
    if (step === 3) return !!answers.q4;
    if (step === 4) return !!answers.q5;
    if (step === 5) return true;
    return false;
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      toast.success("설문이 완료되었습니다. 감사합니다!");
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(0);
      setSubmitted(false);
      setAnswers({ q1: "", q2: [], q3: "", q4: "", q5: "", q6: "" });
    }, 300);
  };

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-md">
          <div className="flex flex-col items-center py-8 text-center gap-4">
            <CheckCircle className="h-16 w-16 text-primary" />
            <DialogTitle className="text-2xl font-bold">감사합니다!</DialogTitle>
            <DialogDescription className="text-muted-foreground text-lg mt-2">
              소중한 의견을 반영하여 곧 연락드리겠습니다.
            </DialogDescription>
            <button
              onClick={handleClose}
              className="mt-4 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              닫기
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">사장님이 <KelloText />에 바라는 서비스</DialogTitle>
          <DialogDescription>간단한 설문에 답해주시면 더 나은 서비스를 만드는 데 큰 도움이 됩니다.</DialogDescription>
        </DialogHeader>

        {/* Progress */}
        <div className="flex gap-1 mb-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-muted"}`}
            />
          ))}
        </div>

        <div className="py-2 space-y-4 min-h-[200px]">
          {step === 0 && (
            <div className="space-y-3">
              <p className="font-semibold text-sm">1. 현재 외국인 고객 비중은 어느 정도입니까?</p>
              <RadioGroup value={answers.q1} onValueChange={(v) => setAnswers({ ...answers, q1: v })}>
                {[
                  "거의 없음 (월 1~2명 이하)",
                  "가끔 있음 (월 3~10명)",
                  "꾸준히 있음 (월 10~30명)",
                  "매우 많음 (월 30명 이상)",
                ].map((opt) => (
                  <div key={opt} className="flex items-center space-x-3 p-3 rounded-xl border border-border hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={opt} id={`q1-${opt}`} />
                    <Label htmlFor={`q1-${opt}`} className="cursor-pointer flex-1 text-sm">{opt}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-3">
              <p className="font-semibold text-sm">2. 외국인 고객 응대 시 가장 어려운 점은? (최대 2개)</p>
              {[
                "언어 소통 문제",
                "예약 관리의 번거로움",
                "가격 설명의 어려움",
                "노쇼(예약 취소) 문제",
                "결제 방식 문제",
                "특별히 없음",
              ].map((opt) => (
                <div key={opt} className="flex items-center space-x-3 p-3 rounded-xl border border-border hover:bg-muted/50 transition-colors">
                  <Checkbox
                    id={`q2-${opt}`}
                    checked={answers.q2.includes(opt)}
                    onCheckedChange={() => handleQ2Toggle(opt)}
                  />
                  <Label htmlFor={`q2-${opt}`} className="cursor-pointer flex-1 text-sm">{opt}</Label>
                </div>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <p className="font-semibold text-sm">3. 현재 외국인 고객은 주로 어떻게 유입됩니까?</p>
              <RadioGroup value={answers.q3} onValueChange={(v) => setAnswers({ ...answers, q3: v })}>
                {[
                  "워크인(지나가다 방문)",
                  "SNS 검색",
                  "기존 고객 추천",
                  "여행 플랫폼(OTA 등)",
                  "거의 유입되지 않음",
                ].map((opt) => (
                  <div key={opt} className="flex items-center space-x-3 p-3 rounded-xl border border-border hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={opt} id={`q3-${opt}`} />
                    <Label htmlFor={`q3-${opt}`} className="cursor-pointer flex-1 text-sm">{opt}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <p className="font-semibold text-sm">4. 외국인 고객 확대를 위해 가장 필요한 것은?</p>
              <RadioGroup value={answers.q4} onValueChange={(v) => setAnswers({ ...answers, q4: v })}>
                {[
                  "다국어 예약 시스템",
                  "정찰제 가격 안내",
                  "해외 결제 시스템",
                  "마케팅·홍보 지원",
                  "외국인 고객 관리 지원",
                ].map((opt) => (
                  <div key={opt} className="flex items-center space-x-3 p-3 rounded-xl border border-border hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={opt} id={`q4-${opt}`} />
                    <Label htmlFor={`q4-${opt}`} className="cursor-pointer flex-1 text-sm">{opt}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-3">
              <p className="font-semibold text-sm">5. 플랫폼 제휴 의향은 어느 정도입니까?</p>
              <RadioGroup value={answers.q5} onValueChange={(v) => setAnswers({ ...answers, q5: v })}>
                {[
                  "매우 적극적",
                  "조건에 따라 가능",
                  "아직 고민 중",
                  "관심 없음",
                ].map((opt) => (
                  <div key={opt} className="flex items-center space-x-3 p-3 rounded-xl border border-border hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={opt} id={`q5-${opt}`} />
                    <Label htmlFor={`q5-${opt}`} className="cursor-pointer flex-1 text-sm">{opt}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-3">
              <p className="font-semibold text-sm">6. 외국인 고객 응대 경험 중 가장 기억에 남는 불편 사례는?</p>
              <Textarea
                placeholder="자유롭게 작성해주세요 (선택사항)"
                value={answers.q6}
                onChange={(e) => setAnswers({ ...answers, q6: e.target.value })}
                className="min-h-[120px] rounded-xl"
              />
            </div>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 border border-border text-foreground font-semibold py-3 rounded-xl hover:bg-muted/50 transition-colors text-sm"
            >
              이전
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!canNext()}
            className="flex-1 bg-primary text-primary-foreground font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
          >
            {step < 5 ? "다음" : (
              <>
                <Send className="h-4 w-4" />
                제출하기
              </>
            )}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SurveyDialog;
