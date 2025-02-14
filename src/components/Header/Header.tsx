'use client'
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import { ButtonMakeStudy } from "@/components/button/ButtonRectangle";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogoClick = () => router.push('/');
    const handleButtonClick = () => router.push('/study/create');

    // 버튼 숨김 로직
    const hideButton = pathname.startsWith("/study/") && !pathname.startsWith("/study/create");

    return (
        <div className="w-full bg-custom-color-background">
            <div className="px-4 md:px-6 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
                {/* Next.js Image 최적화 */}
                <Image
                    src={logo}
                    alt="logo image"
                    width={180}
                    height={50}
                    priority
                    className="w-[105px] md:w-[180px] cursor-pointer"
                    onClick={handleLogoClick}
                />
                {!hideButton && <ButtonMakeStudy onClick={handleButtonClick} />}
            </div>
        </div>
    );
}
