import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Image as ImageIcon, Loader2 } from "lucide-react";

export default function Dashboard() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);

    const [storeData, setStoreData] = useState({
        store_name: "",
        address: "",
        phone: "",
        menu_description: "",
        photo_urls: [] as string[],
    });

    useEffect(() => {
        fetchSession();
    }, []);

    const fetchSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
        if (session?.user) {
            await loadProfile(session.user.id);
        } else {
            setLoading(false);
        }
    };

    const loadProfile = async (userId: string) => {
        try {
            const { data, error } = await supabase
                .from("store_profiles")
                .select("*")
                .eq("user_id", userId)
                .single();

            if (data) {
                setStoreData({
                    store_name: data.store_name || "",
                    address: data.address || "",
                    phone: data.phone || "",
                    menu_description: data.menu_description || "",
                    photo_urls: data.photo_urls || [],
                });
            }
        } catch (err) {
            console.log("프로필이 아직 없거나 불러오는 중 오류 발생");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setStoreData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUploading(true);
            if (!e.target.files || e.target.files.length === 0) return;

            const file = e.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${user.id}/${fileName}`;

            const { error: uploadError, data } = await supabase.storage
                .from('store_photos')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('store_photos')
                .getPublicUrl(filePath);

            setStoreData(prev => ({
                ...prev,
                photo_urls: [...prev.photo_urls, publicUrl]
            }));

            alert("이미지가 업로드되었습니다!");

        } catch (error: any) {
            alert("이미지 업로드 실패: " + error.message);
        } finally {
            setUploading(false);
        }
    };

    const handleSave = async () => {
        if (!user) return alert("로그인이 필요합니다.");
        if (!storeData.store_name) return alert("상호명을 입력해주세요.");

        try {
            setSaving(true);
            const updates = {
                user_id: user.id,
                store_name: storeData.store_name,
                address: storeData.address,
                phone: storeData.phone,
                menu_description: storeData.menu_description,
                photo_urls: storeData.photo_urls,
                updated_at: new Date(),
            };

            const { error } = await supabase
                .from('store_profiles')
                .upsert(updates, { onConflict: 'user_id' });

            if (error) throw error;
            alert("매장 정보가 성공적으로 저장되었습니다!");

        } catch (error: any) {
            alert("저장 실패: " + error.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">로딩중...</div>;

    return (
        <div className="min-h-screen bg-kello-blue-light pb-20">
            <Header />

            <div className="container mx-auto px-4 pt-32 max-w-3xl">
                {!user ? (
                    <div className="text-center bg-white p-10 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">로그인이 필요합니다</h2>
                        <p className="text-muted-foreground mb-6">매장 정보를 관리하려면 우측 상단에서 구글 로그인을 진행해주세요.</p>
                    </div>
                ) : (
                    <Card className="shadow-lg border-0">
                        <CardHeader className="bg-white border-b border-gray-100 pb-6 rounded-t-xl">
                            <CardTitle className="text-2xl font-bold text-gray-800">내 매장 관리</CardTitle>
                            <CardDescription className="text-base">
                                외국인 손님들에게 보여질 우리 매장의 정보를 등록하고 관리하세요.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-8 space-y-8 bg-white rounded-b-xl">

                            <div className="space-y-3">
                                <Label htmlFor="store_name" className="text-base font-semibold">상호명 <span className="text-destructive">*</span></Label>
                                <Input
                                    id="store_name"
                                    name="store_name"
                                    value={storeData.store_name}
                                    onChange={handleChange}
                                    placeholder="예: xx헤어샵"
                                    className="text-lg"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <Label htmlFor="phone" className="text-base font-semibold">전화번호</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        value={storeData.phone}
                                        onChange={handleChange}
                                        placeholder="예: 02-123-4567"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="address" className="text-base font-semibold">상세 주소</Label>
                                    <Input
                                        id="address"
                                        name="address"
                                        value={storeData.address}
                                        onChange={handleChange}
                                        placeholder="매장의 전체 주소를 입력해주세요"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="menu_description" className="text-base font-semibold">정찰제 가격 및 메뉴 안내</Label>
                                <p className="text-sm text-muted-foreground">외국인 고객이 한눈에 파악할 수 있도록 주요 서비스와 가격을 적어주세요. (예: 여성 컷트 30,000원)</p>
                                <Textarea
                                    id="menu_description"
                                    name="menu_description"
                                    value={storeData.menu_description}
                                    onChange={handleChange}
                                    placeholder="메뉴 및 가격을 입력하세요..."
                                    className="min-h-[150px] text-base resize-none"
                                />
                            </div>

                            <div className="space-y-4">
                                <Label className="text-base font-semibold">매장 사진 및 디자인 결과물 (최대 5장)</Label>
                                <p className="text-sm text-muted-foreground">매장 분위기나 실제 작업하신 디자인 결과물을 올려 외국인들의 시선을 사로잡아보세요.</p>

                                <div className="flex flex-wrap gap-4 mt-2">
                                    {storeData.photo_urls.map((url, idx) => (
                                        <div key={idx} className="relative w-32 h-32 rounded-lg border border-border overflow-hidden group">
                                            <img src={url} alt={`Photo ${idx}`} className="w-full h-full object-cover" />
                                            <button
                                                onClick={() => setStoreData(prev => ({
                                                    ...prev, photo_urls: prev.photo_urls.filter((_, i) => i !== idx)
                                                }))}
                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                title="삭제"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                            </button>
                                        </div>
                                    ))}

                                    {storeData.photo_urls.length < 5 && (
                                        <label className="w-32 h-32 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                                            {uploading ? (
                                                <Loader2 className="h-6 w-6 text-gray-400 animate-spin" />
                                            ) : (
                                                <>
                                                    <Upload className="h-6 w-6 text-gray-400 mb-2" />
                                                    <span className="text-xs text-gray-500 font-medium">사진 업로드</span>
                                                </>
                                            )}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={handleImageUpload}
                                                disabled={uploading}
                                            />
                                        </label>
                                    )}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-100">
                                <Button
                                    onClick={handleSave}
                                    disabled={saving}
                                    className="w-full h-14 text-lg font-bold bg-gradient-accent text-white rounded-xl shadow-kello-glow hover:scale-[1.02] transition-transform"
                                >
                                    {saving ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
                                    매장 정보 저장하기
                                </Button>
                            </div>

                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
