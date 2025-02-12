'use client'
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import { ButtonMakeStudy } from "@/components/button/ButtonRectangle";
import {usePathname, useRouter} from "next/navigation";
export default function Header() {
    const pathname = usePathname()
    const router = useRouter()

    const handleLogoClick = () => {
        router.push('/')
    }

    const hideButton = /^\/study\/[^/]+(\/habit|\/focus)?$/.test(pathname);

  return (
    <div className="w-full bg-custom-color-background">
      <div className="px-4 md:px-6 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
        <Image src={logo} alt="logo image" className="w-[105px] md:w-[180px] cursor-pointer" onClick={handleLogoClick}/>
          {!hideButton && <ButtonMakeStudy/>}
      </div>
    </div>
  );
}
