import Image from "next/image"
import logo from '../../assets/images/logo.png'
import HeaderButton from "@/widgets/Header/components/HeaderButton/HeaderButton";

export default function Header() {
    return (
        <div className=" w-full bg-[#F6F4EF]">
            <div className="flex max-w-[1532px] px-4 md:px-6 mx-auto justify-between  h-[100px] items-center">
                <Image src={logo} alt="logo image" className="w-[106px] md:w-[180px]"/>
                <HeaderButton />
            </div>
        </div>
    )
}