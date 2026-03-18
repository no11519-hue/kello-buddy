import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [user, setUser] = useState<any>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // OAuth 리다이렉트 시 발생한 에러가 URL에 포함되어 있는지 확인합니다.
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const queryParams = new URLSearchParams(window.location.search);
        const errorDesc = hashParams.get('error_description') || queryParams.get('error_description');

        if (errorDesc) {
            alert('인증 오류 발생: ' + decodeURIComponent(errorDesc).replace(/\+/g, ' '));
            // 에러 확인 후 URL 깔끔하게 정리
            window.history.replaceState(null, '', window.location.pathname);
        }

        supabase.auth.getSession().then(({ data: { session }, error }) => {
            if (error) {
                console.error("Session fetch error:", error);
            }
            setUser(session?.user ?? null);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false); // 모바일 메뉴 닫기
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="text-2xl font-black bg-clip-text text-transparent" style={{ backgroundImage: "var(--kello-gradient-hero)" }}>Kello</span>
                </div>
                
                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6">
                    <button onClick={() => scrollToSection('service')} className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">서비스소개</button>
                    <button onClick={() => scrollToSection('benefits')} className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">파트너 혜택</button>
                    <button onClick={() => scrollToSection('faq')} className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">FAQ</button>
                    <button 
                        onClick={() => scrollToSection('apply')} 
                        className="text-sm font-bold bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors shadow-sm"
                    >
                        파트너 신청하기
                    </button>
                </nav>

                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground p-2 -mr-2">
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-md py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    <button onClick={() => scrollToSection('service')} className="text-left text-base font-semibold text-foreground/80 hover:text-primary py-2 border-b border-border/40">서비스소개</button>
                    <button onClick={() => scrollToSection('benefits')} className="text-left text-base font-semibold text-foreground/80 hover:text-primary py-2 border-b border-border/40">파트너 혜택</button>
                    <button onClick={() => scrollToSection('faq')} className="text-left text-base font-semibold text-foreground/80 hover:text-primary py-2 border-b border-border/40">FAQ</button>
                    <button 
                        onClick={() => scrollToSection('apply')} 
                        className="text-center text-base font-bold bg-primary text-primary-foreground px-4 py-3 rounded-full hover:bg-primary/90 transition-colors mt-2"
                    >
                        파트너 신청하기
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
