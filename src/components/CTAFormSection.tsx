import { motion } from "framer-motion";
import { Send, Coffee, CheckCircle2 } from "lucide-react";
import KelloText from "./KelloText";
import { useState } from "react";
import { toast } from "sonner";
import SurveyDialog from "./SurveyDialog";
import ScrollReveal from "./ScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const regions = ["서울", "부산", "제주", "대구", "인천", "경기", "기타"];
const categories = ["헤어", "피부", "메이크업", "네일/속눈썹/왁싱", "바디/체형관리"];

const CTAFormSection = () => {
  const [form, setForm] = useState({
    businessName: "",
    region: "",
    category: "",
    contact: "",
    email: "",
  });
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [showBridge, setShowBridge] = useState(false);
  // 제출 시점의 기본정보를 스냅샷으로 보존 → SurveyDialog에 안정적으로 전달
  const [pendingBasicInfo, setPendingBasicInfo] = useState<typeof form | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.businessName || !form.region || !form.category || !form.contact || !form.email) {
      toast.error("모든 항목을 입력해주세요.");
      return;
    }
    // 현재 form 값을 스냅샷으로 저장 후 브릿지 팝업 오픈
    setPendingBasicInfo({ ...form });
    setShowBridge(true);
  };

  const handleStartSurvey = () => {
    setShowBridge(false);
    setSurveyOpen(true);
  };

  const handleSurveyComplete = () => {
    setForm({ businessName: "", region: "", category: "", contact: "", email: "" });
    setPendingBasicInfo(null);
    setSurveyOpen(false);
  };

  return (
    <section id="cta" className="py-24 bg-card relative overflow-hidden border-t border-border">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <ScrollReveal width="100%">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">Partner Application</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4 break-keep">
                지금 <KelloText />와 함께<br />
                새로운 매출을 만들어보세요
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium break-keep mt-4">
                <KelloText />와 함께 외국인 고객을 매장으로 연결하세요.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10 space-y-5 relative z-10">
              <div>
                <label className="block text-base font-semibold text-foreground mb-2">업체명</label>
                <input
                  type="text"
                  placeholder="예: 서울뷰티살롱"
                  value={form.businessName}
                  onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all text-base"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-base font-semibold text-foreground mb-2">지역</label>
                  <select
                    value={form.region}
                    onChange={(e) => setForm({ ...form, region: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all text-base"
                  >
                    <option value="">선택</option>
                    {regions.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-base font-semibold text-foreground mb-2">업종</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all text-base"
                  >
                    <option value="">선택</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-base font-semibold text-foreground mb-2">연락처</label>
                <input
                  type="tel"
                  placeholder="010-0000-0000"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all text-base"
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-foreground mb-2">이메일 주소</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-accent text-accent-foreground font-bold py-5 rounded-xl text-xl shadow-kello-glow hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-4"
              >
                <Send className="h-6 w-6" />
                외국인 고객 받고 매출 올리기
              </button>
            </form>

            {/* 브릿지 팝업: 가독성 좋고 따뜻한 안내 */}
            <Dialog open={showBridge} onOpenChange={setShowBridge}>
              <DialogContent className="max-w-md p-0 overflow-hidden rounded-3xl border-none shadow-2xl">
                <div className="bg-gradient-to-br from-primary/10 via-white to-white p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-black text-foreground">신청해 주셔서 감사합니다!</DialogTitle>
                      <DialogDescription className="text-lg font-bold text-foreground/70 pt-2 leading-relaxed break-keep">
                        사장님의 소중한 신청이 확인되었습니다.<br />
                        더 나은 서비스를 위해 1분만 시간을 내어<br />
                        설문에 참여해 주시겠어요?
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 w-full flex items-center justify-center gap-3">
                      <Coffee className="w-6 h-6 text-amber-600" />
                      <p className="text-amber-900 font-bold text-sm sm:text-base">
                        참여 시 <span className="text-amber-600 font-black">스타벅스 커피 쿠폰</span> 증정 ☕
                      </p>
                    </div>

                    <button
                      onClick={handleStartSurvey}
                      className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-black py-4 rounded-xl text-lg shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
                    >
                      <Coffee className="w-5 h-5 group-hover:animate-bounce" />
                      설문 참여하고 혜택 받기
                    </button>
                    
                    <button 
                      onClick={() => setShowBridge(false)}
                      className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors pt-2"
                    >
                      나중에 참여하기
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {pendingBasicInfo && (
              <SurveyDialog
                open={surveyOpen}
                onOpenChange={setSurveyOpen}
                basicInfo={pendingBasicInfo}
                onComplete={handleSurveyComplete}
              />
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTAFormSection;
