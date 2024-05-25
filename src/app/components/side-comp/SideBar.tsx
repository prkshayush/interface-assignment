import Image from "next/image"

export default function SideBar() {
    type Link = {
        id: number,
        link: string,
        name: string
    }
    const links: Link[] = [
        {
            id: 1,
            link: '/dashboard.svg',
            name: 'Dashboard',
        },
        {
            id: 2,
            link: '/chat.svg',
            name: 'Chat',
        },
        {
            id: 3,
            link: '/integrations.svg',
            name: 'Integrations'
        },
        {
            id: 4,
            link: '/forecasts.svg',
            name: 'Forecasts'
        },
        {
            id: 5,
            link: '/purchase.svg',
            name: 'Purchase Order'
        },
        {
            id: 6,
            link: '/logs.svg',
            name: 'Logs'
        },
        {
            id: 7,
            link: '/workflows.svg',
            name: 'Configure Workflows'
        },
        {
            id: 8,
            link: '/vendors.svg',
            name: 'Vendors'
        },
        {
            id: 9,
            link: '/approval.svg',
            name: 'Pending Approval'
        },
        {
            id: 10,
            link: '/agents.svg',
            name: 'Train Agents'
        },
    ]

    type Settings = {
        id: number,
        url: string,
        name: string
    }
    const setings: Settings[] = [
        {
            id: 1,
            url: '/account.svg',
            name: 'My account'
        },
        {
            id: 2,
            url: '/conversations.svg',
            name: 'Clear Conversations'
        },
        {
            id: 3,
            url: '/light.svg',
            name: 'Light mode'
        },
        {
            id: 4,
            url: '/updates.svg',
            name: 'Updates & FAQ'
        },
        {
            id: 5,
            url: '/logout.svg',
            name: 'Log Out'
        },
    ]


    return (
        <div className="p-5">
            <p className="py-2 font-semibold text-2xl text-left text-btn-col">interface</p>


            <div className="flex flex-col gap-5">
                {/* dashboard options */}
                <div className="flex flex-col">
                    {links.map(link => (
                        <button key={link.id} className="flex items-center py-1 rounded-lg hover:bg-btn-col hover:text-txt-col-hov">
                            <Image src={link.link} alt="empty" className="m-2" width={18} height={18} />
                            <p className="text-[0.9rem] pr-1">{link.name}</p>
                        </button>

                    ))}
                </div>
                <div className="flex flex-col">
                    {setings.map(setting => (
                        <button key={setting.id} className="flex items-center py-1 rounded-lg hover:bg-btn-col hover:text-txt-col-hov">
                            <Image src={setting.url} alt="empty" className="m-2" width={18} height={18} />
                            <p className="text-[0.9rem]">{setting.name}</p>
                        </button>

                    ))}
                </div>
            </div>

        </div>)
}