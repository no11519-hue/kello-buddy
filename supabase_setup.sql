-- Supabase SQL Editor 에 아래 코드를 복사해서 실행해주세요.

-- 1. 매장 정보 테이블 생성
CREATE TABLE IF NOT EXISTS public.store_profiles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) NOT NULL UNIQUE,
    store_name TEXT NOT NULL,
    address TEXT,
    phone TEXT,
    menu_description TEXT,
    photo_urls TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. RLS (Row Level Security) 설정
ALTER TABLE public.store_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "자신의 매장 정보만 조회 가능" 
ON public.store_profiles FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "자신의 매장 정보만 삽입 가능" 
ON public.store_profiles FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "자신의 매장 정보만 수정 가능" 
ON public.store_profiles FOR UPDATE 
USING (auth.uid() = user_id);

-- 3. 이미지 업로드를 위한 스토리지 버킷 생성
INSERT INTO storage.buckets (id, name, public) 
VALUES ('store_photos', 'store_photos', true)
ON CONFLICT (id) DO NOTHING;

-- 스토리지 보안 정책 (인증된 사용자만 업로드, 누구나 조회)
CREATE POLICY "누구나 이미지 조회 가능" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'store_photos');

CREATE POLICY "인증된 사용자만 이미지 업로드 가능" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'store_photos' AND auth.role() = 'authenticated');

CREATE POLICY "자신이 올린 이미지만 삭제 가능"
ON storage.objects FOR DELETE
USING (bucket_id = 'store_photos' AND auth.uid() = owner);
