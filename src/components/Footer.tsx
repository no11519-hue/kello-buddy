import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import TermsOfService from "./TermsOfService";
import ScrollReveal from "./ScrollReveal";

// 데이터 배열: 추후 항목 추가/수정 및 실제 링크(#) 교체가 쉽도록 분리해 둠
const FOOTER_MENUS = [
  {
    title: "서비스",
    links: [
      { name: "이용약관", href: "#", isDialog: true, dialogComponent: <TermsOfService />, dialogTitle: "이용약관" },
      { name: "개인정보처리방침", href: "#", isDialog: true, dialogImages: Array.from({length: 51}).map((_, i) => `/privacy_images/77d21b95-${String(i + 1).padStart(2, '0')}.png`), dialogTitle: "개인정보처리방침" },
      { name: "파트너센터", href: "#", image: "/oz_logo.png", text: "오즈코딩스쿨" },
    ],
  },
  {
    title: "고객지원",
    links: [
      { name: "인스타 DM 문의 (kello_partners)", href: "https://www.instagram.com/kello_partners/?hl=ko" },
      { name: "자주 묻는 질문", href: "/#faq" },
      { name: "이메일 문의 (hot6pent@gmail.com)", href: "mailto:hot6pent@gmail.com" },
    ],
  },
];

// 토글(아코디언) 메뉴 컴포넌트
const FooterMenuSection = ({ menu }: { menu: typeof FOOTER_MENUS[0] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full lg:w-48">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 lg:py-0 lg:mb-3 border-b border-border/40 lg:border-none text-left transition-colors hover:text-foreground/90"
      >
        <h3 className="text-sm font-semibold text-foreground/80">{menu.title}</h3>
        <ChevronDown
          className={`w-4 h-4 text-foreground/50 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* 심플한 토글 애니메이션을 위한 래퍼 */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100 pt-3 lg:pt-1 pb-4 lg:pb-0" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-3 flex-wrap">
          {menu.links.map((link: any, idx) => (
            <li key={idx}>
              <div className="flex flex-col gap-2 items-start">
                {link.isDialog ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-sm text-foreground/60 hover:text-foreground/90 transition-colors text-left">
                        {link.name}
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto p-2 sm:p-6 flex flex-col items-center gap-0">
                      <DialogTitle className="sr-only">{link.dialogTitle || link.name}</DialogTitle>
                      {link.dialogComponent ? (
                        link.dialogComponent
                      ) : link.dialogImages ? (
                        link.dialogImages.map((imgSrc: string, i: number) => (
                          <img key={i} src={imgSrc} alt={`${link.name} ${i + 1}`} className="w-full object-contain" />
                        ))
                      ) : (
                        <img src={link.dialogImage} alt={link.name} className="w-full object-contain" />
                      )}
                    </DialogContent>
                  </Dialog>
                ) : (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                    className="text-sm text-foreground/60 hover:text-foreground/90 transition-colors text-left"
                  >
                    {link.name}
                  </a>
                )}
                {link.image && (
                  <div className="flex items-center gap-2 opacity-90 border border-border/50 rounded-md p-1.5 px-2 mt-1">
                    <img src={link.image} alt={link.text} className="h-4 object-contain" />
                    <span className="text-xs font-semibold text-foreground/70">{link.text}</span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-spring-pink py-12 border-t border-border/50">
      <ScrollReveal width="100%">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8">
            
            {/* 푸터 왼쪽 영역: 회사 정보 */}
            <div className="flex flex-col items-start text-left max-w-sm">
              <div className="mb-4">
                <span className="text-2xl font-black bg-clip-text text-transparent" style={{ backgroundImage: "var(--kello-gradient-hero)" }}>Kello</span>
              </div>
              
              <p className="text-foreground/60 text-sm mb-6">
                외국인 관광객과 한국 사장님을 연결하는 AI 예약 대행 서비스
              </p>

              <div className="text-foreground/60 text-sm flex flex-col gap-2 mb-8">
                <p>회사명 : (주)HSP</p>
                <p>서비스명 : 켈로</p>
                <p>대표 : 정다영</p>
                <p>사업자등록번호 : 000-00-00000</p>
                {/* <p>주소 : 서울특별시 강남구 ... (추후 추가 시 주석 해제)</p> */}
              </div>

              <div className="text-foreground/40 text-xs mt-auto">
                © 2026 Kello. All rights reserved.
              </div>
            </div>

            {/* 푸터 오른쪽 영역: 서비스 및 고객지원 메뉴 배열 반복 렌더링 */}
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-12">
              {FOOTER_MENUS.map((menu, idx) => (
                <FooterMenuSection key={idx} menu={menu} />
              ))}
            </div>

          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;
