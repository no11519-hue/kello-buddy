import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const Header = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
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
                            <span className="text-sm font-medium text-muted-foreground hidden md:inline-block">
                                {user.email || '로그인 됨'}
                            </span>
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
                                className="flex items-center justify-center px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm"
                            >
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
