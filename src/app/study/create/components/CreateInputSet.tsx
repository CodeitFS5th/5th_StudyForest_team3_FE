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

}

export default function CreateInputSet({ label, inputType, value, onChange, placeholder }: Props) {
    return (
        <div>
            <p>{label}</p>
            <Input type={inputType} value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    )
}