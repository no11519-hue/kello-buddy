const Footer = () => {
  return (
    <footer className="bg-spring-pink py-12 border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-2">
          <span className="text-2xl font-black bg-clip-text text-transparent" style={{ backgroundImage: "var(--kello-gradient-hero)" }}>Kello</span>
        </div>
        <p className="text-foreground/60 text-sm mb-6">
          외국인 관광객과 한국 사장님을 연결하는 AI 예약 대행 서비스
        </p>
        <div className="text-foreground/40 text-xs">
          © 2026 Kello. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
