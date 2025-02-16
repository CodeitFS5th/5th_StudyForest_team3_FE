"use client";

import {ChangeEvent} from "react";
import Input from "@/components/inputField/Input";
import {InputType} from "@/components/inputField/core/types";

interface Props {
    label: string;
    inputType: InputType;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    className?: string;

}

export default function CreateInputSet({ label, inputType, value, onChange, placeholder, className }: Props) {
    return (
        <div className={`mt-4 font-semibold ${className}`}>
            <p className='mb-4'>{label}</p>
            <Input type={inputType} value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    )
}