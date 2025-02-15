"use client";
import { ButtonMake } from "@/components/button/ButtonRectangle";
import CreateInputSet from "@/app/study/create/components/CreateInputSet";
import { useState } from "react";
import Textarea from "@/components/inputField/Textarea";
import BgCard from "@/app/study/create/components/BgCard";

export default function StudyCreatePage() {
    // 입력값을 관리하는 state
    const [data, setData] = useState({
        nickname: "",
        studyName: "",
        description: "",
        bg: "", // 배경 선택값 (초기값 없음)
        password: "",
        passwordConfirm: "",
    });

    // 입력 필드 변경 시 호출되는 함수
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        setData((prevData) => ({
            ...prevData,
            [field]: e.target.value,
        }));
    };

    // 배경 선택 시 호출되는 함수
    const handleBgSelect = (bg: string) => {
        setData((prevData) => ({
            ...prevData,
            bg,
        }));
        // console.log(bg)
    };

    return (
        <div className="px-4">
            <div className="max-w-[700px] mx-auto p-4 bg-white rounded-2xl text-custom-color-black-400 mb-[100px] pb-[40px]">
                {/* 페이지 제목 */}
                <p className="font-bold">스터디 만들기</p>

                {/* 닉네임 입력 필드 */}
                <CreateInputSet
                    label="닉네임"
                    inputType="text"
                    value={data.nickname}
                    onChange={(e) => handleChange(e, "nickname")}
                    placeholder="닉네임을 입력해주세요"
                />

                {/* 스터디 이름 입력 필드 */}
                <CreateInputSet
                    label="스터디 이름"
                    inputType="text"
                    value={data.studyName}
                    onChange={(e) => handleChange(e, "studyName")}
                    placeholder="스터디 이름을 입력해주세요"
                />

                {/* 소개 입력 필드 */}
                <p className="mt-4 font-semibold mb-4">소개</p>
                <Textarea
                    value={data.description}
                    onChange={(e) => handleChange(e, "description")}
                    placeholder="스터디 소개를 입력해주세요"
                />

                {/* 배경 선택 */}
                <p className="mt-4 font-semibold mb-4">배경을 선택해주세요</p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {/* 배경 카드 컴포넌트 (클릭하면 선택됨) */}
                    <BgCard bg="bg-custom-color-card-green" onClick={() => handleBgSelect("green")} />
                    <BgCard bg="bg-custom-color-card-yellow" onClick={() => handleBgSelect("yellow")} />
                    <BgCard bg="bg-custom-color-card-blue" onClick={() => handleBgSelect("blue")} />
                    <BgCard bg="bg-custom-color-card-red" onClick={() => handleBgSelect("red")} />
                    <BgCard bg="bg-[url('/desk.png')]" onClick={() => handleBgSelect("desk")} />
                    <BgCard bg="bg-[url('/window.png')]" onClick={() => handleBgSelect("window")} />
                    <BgCard bg="bg-[url('/tile.png')]" onClick={() => handleBgSelect("tile")} />
                    <BgCard bg="bg-[url('/leaf.png')]" onClick={() => handleBgSelect("leaf")} />
                </div>

                {/* 비밀번호 입력 필드 */}
                <CreateInputSet
                    label="비밀번호"
                    inputType="password"
                    value={data.password}
                    onChange={(e) => handleChange(e, "password")}
                    placeholder="비밀번호를 입력해주세요"
                />

                {/* 비밀번호 확인 필드 */}
                <CreateInputSet
                    label="비밀번호 확인"
                    inputType="password"
                    value={data.passwordConfirm}
                    onChange={(e) => handleChange(e, "passwordConfirm")}
                    placeholder="비밀번호를 다시 한 번 입력해주세요"
                    className="mb-[40px]"
                />

                {/* 생성 버튼 */}
                <ButtonMake />
            </div>
        </div>
    );
}
