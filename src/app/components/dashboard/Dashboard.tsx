import Image from "next/image";
import Canvas from "../canvas/Canvas";

export default function Dashboard() {
    type Props = {
        id: number;
        name: string;
        desc: string;
        url: string;
    }
    const profiles: Props[] = [
        {
            id: 1,
            name: 'Olivia',
            desc: 'The data entry agent',
            url: '/olivia.png'
        },
        {
            id: 2,
            name: 'Astrid',
            desc: 'The data scientist agent',
            url: '/astrid.png'
        },
        {
            id: 3,
            name: 'Rio',
            desc: 'Procurement analyst',
            url: '/rio.png'
        },
    ]

    type Random = {
        id: number;
        name: string;
    }
    const random: Random[] = [
        {
            id: 1,
            name: 'Sales Forecast'
        },
        {
            id: 2,
            name: 'Active Agents'
        },
        {
            id: 3,
            name: 'Workflows'
        },
    ]
    return (
        <div className="border-t border-x border-gray-light min-h-screen rounded-sm flex flex-col">
            <div className="flex flex-col gap-3">

                {/* top section */}
                <div className="flex items-center justify-between px-8 pt-5">
                    <p className="font-semibold">Overview</p>
                    <div className="flex gap-1">
                        <p className="text-sm">Today</p>
                        <Image src='/today.svg' alt="" width={8} height={5} />
                    </div>
                </div>

                {/* chart section */}
                <div className="flex items-center justify-between px-8 py-5 gap-10">
                    {/* cost section */}
                    <div className="flex-1 flex flex-col justify-center gap-5 px-10">
                        <Canvas name="Cost Optimised" value="$7,265" percentage={11.02} />
                        <Canvas name="Workflows Automated" value="1,321" percentage={18.04} />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <div className="bg-gradient-to-r from-white-shade font-semibold border p-3 rounded-lg border-gray-light w-[35rem] h-72 cursor-pointer">
                            <div className="flex items-center gap-2 mb-3 ml-2 text-xs">
                                {random.map((rand =>
                                    <p key={rand.id} className="text-gray-dark hover:text-black">{rand.name}</p>
                                ))} |
                                <div className="flex items-center pl-5 gap-5">
                                    <li>This year</li>
                                    <li className="text-gray-dark hover:text-black">Last year</li>
                                </div>
                            </div>
                            <div className="min-h-68">
                                <Image src='/chart.png' alt="" width={700} height={512} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* profiles section */}
            <div className="flex justify-center items-center gap-32 pb-2 px-16">
                {profiles.map((profile =>
                    <div className="rounded-lg border border-gray-light bg-gradient-to-br from-white-shade min-h-64 min-w-56 flex items-center justify-center flex-col font-semibold" key={profile.id}>
                        <div><Image className="rounded-full bg-white drop-shadow-4xl m-2" src={profile.url} alt="" width={50} height={50} /></div>
                        <div><p className="text-3xl">{profile.name}</p></div>
                        <div className="text-sm">{profile.desc}</div>
                        <button className="bg-btn-col rounded-md p-3 text-sm mt-10 text-gray-light">Get Started</button>
                    </div>
                ))}
            </div>
        </div>
    )
}