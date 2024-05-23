import Image from "next/image";

export default function NavBar() {
    return (
        <div className="flex items-center justify-between border-b border-gray-light px-6 py-3">
            <Image src="/navicon.svg" alt="logo" width={17} height={14} />
            <button className="text-btn-col text-base font-semibold">Dashboard</button>

            <div className="px-2 py-1 mr-2 flex items-center bg-grey rounded-md">
                <div className="flex items-center justify-center gap-1">
                    <Image src="/search.svg" alt="search" width={15} height={15} />
                    <input type="text" className="bg-grey text-sm" placeholder="Search"/>
                </div>
                <Image src="/text.svg" alt="profile" width={15} height={15}/>
            </div>
        </div>
    )
}