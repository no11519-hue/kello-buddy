import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, Phone } from "lucide-react";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-3 bg-card rounded-2xl shadow-kello-card border border-border p-5 w-64"
          >
            <h4 className="font-bold text-foreground text-sm mb-3">문의하기</h4>
            <div className="space-y-3">
              <a
                href="mailto:hot6pent@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                hot6pent@gmail.com
              </a>
              <a
                href="tel:010-0000-0000"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                010-0000-0000
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed bg-primary/5 p-3 rounded-xl">
              <span className="font-semibold text-primary block mb-1">친절히 답변해 드리겠습니다! 😊</span>
              평일 10:00 – 18:00 운영
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gradient-accent text-accent-foreground shadow-kello-glow flex items-center justify-center hover:scale-105 transition-transform"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  );
};

export default FloatingContact;
