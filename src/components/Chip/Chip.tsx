interface Props {
    label: string;
    isCompleted: boolean;
}

export default function Chip({ label, isCompleted = false }: Props) {
    return (
        <div className={`font-bold text-center py-[18px] rounded-3xl ${isCompleted ? 'text-white bg-custom-color-brand' : 'text-custom-color-black-300 bg-custom-color-black-100'} `}>
            {label}
        </div>
    )
}