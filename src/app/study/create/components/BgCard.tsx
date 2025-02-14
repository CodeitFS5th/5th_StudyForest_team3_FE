interface Props {
    bg: string;
}

export default function BgCard({ bg }: Props) {
    return (
        <div
            className={` ${bg} bg-cover bg-center rounded-3xl w-full aspect-square border border-black/10`}></div>
    )
}