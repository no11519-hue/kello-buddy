import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Store } from "lucide-react";

interface ShopProfileModalProps {
    user: any;
}

export function ShopProfileModal({ user }: ShopProfileModalProps) {
    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        shop_name: "",
        address: "",
        phone: "",
        menu_price: "",
        image_url: "",
    });
    const [imageFile, setImageFile] = useState<File | null>(null);

    // Load existing data
    useEffect(() => {
        if (open && user) {
            loadShopProfile();
        }
    }, [open, user]);

    const loadShopProfile = async () => {
        try {
            const { data, error } = await supabase
                .from("partner_shops")
                .select("*")
                .eq("user_id", user.id)
                .single();

            if (error && error.code !== "PGRST116") {
                console.error("Error loading profile:", error);
            }

            if (data) {
                setFormData({
                    shop_name: data.shop_name || "",
                    address: data.address || "",
                    phone: data.phone || "",
                    menu_price: data.menu_price || "",
                    image_url: data.image_url || "",
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            let finalImageUrl = formData.image_url;

            // Upload image if selected
            if (imageFile) {
                const fileExt = imageFile.name.split(".").pop();
                const fileName = `${user.id}_${Math.random()}.${fileExt}`;
                const filePath = `shop_images/${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from("kello_assets")
                    .upload(filePath, imageFile);

                if (uploadError) {
                    throw new Error("이미지 업로드에 실패했습니다. (버킷 이름을 확인해주세요!)");
                }

                const { data: publicUrlData } = supabase.storage
                    .from("kello_assets")
                    .getPublicUrl(filePath);

                finalImageUrl = publicUrlData.publicUrl;
            }

            // Upsert shop data
            const { error: upsertError } = await supabase
                .from("partner_shops")
                .upsert({
                    user_id: user.id,
                    shop_name: formData.shop_name,
                    address: formData.address,
                    phone: formData.phone,
                    menu_price: formData.menu_price,
                    image_url: finalImageUrl,
                    updated_at: new Date().toISOString(),
                }, { onConflict: 'user_id' });

            if (upsertError) {
                throw new Error("정보 저장에 실패했습니다.");
            }

            toast({
                title: "성공",
                description: "매장 정보가 성공적으로 저장되었습니다.",
            });
            setOpen(false);
        } catch (error: any) {
            console.error(error);
            toast({
                variant: "destructive",
                title: "오류 발생",
                description: error.message || "매장 정보를 저장할 수 없습니다.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="flex items-center gap-2 px-4 py-2 bg-kello-blue-deep text-white rounded-md font-bold text-sm hover:bg-kello-blue-deep/90 transition-colors">
                    <Store className="w-4 h-4" />
                    <span className="hidden md:inline-block">매장 정보 관리</span>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-xl font-black">내 매장 정보 설정</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                    <div className="space-y-2">
                        <Label htmlFor="shop_name">매장명 (예: XX 헤어샵)</Label>
                        <Input
                            id="shop_name"
                            placeholder="제휴 매장명을 입력해주세요"
                            value={formData.shop_name}
                            onChange={(e) => setFormData({ ...formData, shop_name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="address">매장 주소</Label>
                        <Input
                            id="address"
                            placeholder="상세 주소를 입력해주세요"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">매장 대표 전화번호</Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="02-000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="menu_price">정찰제 메뉴 및 가격표</Label>
                        <Textarea
                            id="menu_price"
                            placeholder="예) 남성 커트: 20,000원&#10;여성 세팅펌: 150,000원&#10;외국인 전용 풀패키지: 200,000원"
                            className="h-32"
                            value={formData.menu_price}
                            onChange={(e) => setFormData({ ...formData, menu_price: e.target.value })}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="image">매장/디자인 작업 사진 (1장)</Label>
                        <div className="flex items-center gap-4">
                            <Input
                                id="image"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="cursor-pointer"
                            />
                        </div>
                        {formData.image_url && !imageFile && (
                            <p className="text-sm text-muted-foreground mt-2">
                                현재 등록된 사진이 있습니다. 새로 등록 시 교체됩니다.
                            </p>
                        )}
                    </div>

                    <div className="pt-4 flex justify-end">
                        <Button type="submit" disabled={loading} className="w-full md:w-auto min-w-[120px]">
                            {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                            {loading ? "저장 중..." : "매장 정보 저장"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
