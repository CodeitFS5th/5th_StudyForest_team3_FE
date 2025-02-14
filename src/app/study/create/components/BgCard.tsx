interface Props {
    bg: string;
    onClick: () => void;
}

export default function BgCard({ bg, onClick }: Props) {
    return (
        <div
            className={` ${bg} bg-cover bg-center rounded-3xl w-full aspect-square border border-black/10`} onClick={onClick}></div>
    )
}