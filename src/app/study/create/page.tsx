"use client";
import {ButtonMake} from "@/components/button/ButtonRectangle";
import CreateInputSet from "@/app/study/create/components/CreateInputSet";
import {useState} from "react";
import Textarea from "@/components/inputField/Textarea";
import BgCard from "@/app/study/create/components/BgCard";

export default function StudyCreatePage() {
    const [data, setData] = useState({
        nickname: '',
        studyName: '',
        description: '',
        bg: '',
        password: '',
        passwordConfirm: '',
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setData((prevData) => ({
            ...prevData,
            [field]: e.target.value,
        }));
        console.log(data);
    };

    return (
        <div className='px-4'>
            <div className='max-w-[700px] mx-auto p-4 bg-white rounded-2xl text-custom-color-black-400 mb-[100px] pb-[40px]'>
                <p className="font-bold">스터디 만들기</p>
                <CreateInputSet
                    label='닉네임'
                    inputType='text'
                    value={data.nickname}
                    onChange={(e) => handleChange(e, 'nickname')}
                    placeholder='닉네임을 입력해주세요'/>
                <CreateInputSet
                    label='스터디 이름'
                    inputType='text'
                    value={data.studyName}
                    onChange={(e) => handleChange(e, 'studyName')}
                    placeholder='스터디 이름을 입력해주세요'
                />

                <p className='mt-4 font-semibold mb-4'>소개</p>
                <Textarea value={data.description} onChange={(e) => handleChange(e, 'description')}
                          placeholder='스터디 소개를 입력해주세요'/>

                <p className='mt-4 font-semibold mb-4'>배경을 선택해주세요</p>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
                    <BgCard bg="bg-custom-color-card-green"/>
                    <BgCard bg="bg-custom-color-card-yellow"/>
                    <BgCard bg="bg-custom-color-card-blue"/>
                    <BgCard bg="bg-custom-color-card-pink"/>
                    <BgCard bg="bg-[url('/desk.png')]"/>
                    <BgCard bg="bg-[url('/window.png')]"/>
                    <BgCard bg="bg-[url('/tile.png')]"/>
                    <BgCard bg="bg-[url('/leaf.png')]"/>
                </div>
                <CreateInputSet label='비밀번호' inputType='password' value={data.password}
                                onChange={(e) => handleChange(e, 'password')} placeholder='비밀번호를 입력해주세요'/>
                <CreateInputSet label='비밀번호 확인' inputType='password' value={data.passwordConfirm}
                                onChange={(e) => handleChange(e, 'passwordConfirm')} placeholder='비밀번호를 다시 한 번 입력해주세요'
                                className='mb-[40px]'
                />

                <ButtonMake/>
            </div>
        </div>
    )
}
