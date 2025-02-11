import Image from "next/image";
import logo from '../../assets/images/logo.png'
import {ButtonMaskStudy} from "@/components/button/ButtonRectangle";
export default function Header() {
    return (
        <div className="w-full bg-custom-color-background">
            <div className="px-4 md:px-6 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
                <Image src={logo} alt="logo image" className="w-[105px] md:w-[180px]"/>
                <ButtonMaskStudy />
            </div>
        </div>
    );
}
