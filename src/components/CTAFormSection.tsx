import { motion } from "framer-motion";
import { Send, MapPin, Building2, User, Phone, Mail } from "lucide-react";
import KelloText from "./KelloText";
import { useState } from "react";
import { toast } from "sonner";
import SurveyDialog from "./SurveyDialog";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.businessName || !form.region || !form.category || !form.contact || !form.email) {
      toast.error("모든 항목을 입력해주세요.");
      return;
    }
    // Only open the survey dialog, keep data intact
    setSurveyOpen(true);
  };

  const handleSurveyComplete = () => {
    setForm({ businessName: "", region: "", category: "", contact: "", email: "" });
    setSurveyOpen(false);
  };

  return (
    <section id="cta" className="py-24 bg-card relative overflow-hidden border-t border-border">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
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
              className="w-full bg-gradient-accent text-accent-foreground font-bold py-5 rounded-xl text-xl shadow-kello hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-4"
            >
              <Send className="h-6 w-6" />
              제휴 문의하기
            </button>
          </form>
          <SurveyDialog 
            open={surveyOpen} 
            onOpenChange={setSurveyOpen} 
            basicInfo={form}
            onComplete={handleSurveyComplete}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFormSection;
