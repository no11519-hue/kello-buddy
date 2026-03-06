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
                    {/* 사용자가 public/logo.png 경로에 이미지를 넣으면 보이도록 설정 */}
                    <img src="/logo.png" alt="Kello Logo" className="h-10 md:h-12 w-auto object-contain fallback-text" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.classList.remove('hidden'); }} />
                    <span className="hidden text-2xl font-black bg-clip-text text-transparent" style={{ backgroundImage: "var(--kello-gradient-hero)" }}>Kello</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                    {user ? (
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-foreground hidden md:inline-block">
                                👤 {user.user_metadata?.full_name || user.email || '로그인 됨'}
                            </span>
                            <ShopProfileModal user={user} />
                            <button
                                onClick={logout}
                                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md font-bold text-sm hover:bg-secondary/80 transition-colors"
                            >
                                로그아웃
                            </button>
                        </div>
                    ) : (
                        <>
                            <button
                                onClick={loginWithGoogle}
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md font-bold text-sm hover:bg-blue-700 transition-colors shadow-sm"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                구글 로그인
                            </button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
