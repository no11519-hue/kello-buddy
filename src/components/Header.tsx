import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { ShopProfileModal } from "./ShopProfileModal";


const Header = () => {
    const [user, setUser] = useState<any>(null);

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

    const loginWithGoogle = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin
                }
            });
            if (error) throw error;
        } catch (error: any) {
            console.error('Google login error:', error);
            alert('로그인 중 오류가 발생했습니다: ' + error.message);
        }
    };

    const logout = async () => {
        await supabase.auth.signOut();
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    <span className="text-2xl font-black bg-clip-text text-transparent" style={{ backgroundImage: "var(--kello-gradient-hero)" }}>Kello</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                </div>
            </div>
        </header>
    );
};

export default Header;
