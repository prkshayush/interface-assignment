import Image from "next/image"

type CanvasProps = {
    name: string;
    value: string;
    percentage: number;
}
export default function Canvas({ name, value, percentage }: CanvasProps) {
    return (
        <div className="bg-gradient-to-r from-white-shade font-semibold border py-8 rounded-lg px-5 border-gray-light flex flex-col justify-center min-w-[23rem] min-h-40 cursor-pointer">
            <div className="text-lg">{name}</div>
            <div className="flex items-center justify-between">
                <p className="text-2xl">{value}</p>
                <div className="text-green text-xs">
                    +{percentage}%
                    <Image className="" src='/arrow.svg' alt="" width={15} height={10} />
                </div>
            </div>
        </div>
    )
}