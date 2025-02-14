"use client";
import {ButtonMake} from "@/components/button/ButtonRectangle";
import CreateInputSet from "@/app/study/create/components/CreateInputSet";
import {useState} from "react";
import Point from "@/components/Point/Point";

export default function StudyCreatePage() {
    const [ data, setData ] = useState({
        nickname: '',
        studyName: '',
        description: '',
        bg: '',
        password: '',
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
            <div className='max-w-[700px] mx-auto p-4 bg-white rounded-2xl text-custom-color-black-400'>
                <p className="font-bold">스터디 만들기</p>
                <CreateInputSet
                    label='닉네임'
                    inputType='text'
                    value={data.nickname}
                    onChange={(e) => handleChange(e, 'nickname')}
                    placeholder='닉네임을 입력해주세요' />
                <CreateInputSet
                    label='스터디 이름'
                    inputType='text'
                    value={data.studyName}
                    onChange={(e) => handleChange(e, 'studyName')}
                    placeholder='스터디 이름을 입력해주세요'
                />
                <CreateInputSet
                    label='t'
                    inputType='text'
                    value={data.studyName}
                    onChange={(e) => handleChange(e, 'studyName')}
                    placeholder='스터디 이름을 입력해주세요'
                />
                <ButtonMake />
                <Point point={30} pointBg='bg-black/30' pointTextColor='text-white'/>
            </div>
        </div>
    )
}
