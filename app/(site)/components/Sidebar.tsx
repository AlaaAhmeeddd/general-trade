import Image from 'next/image'

export default function Sidebar() {

    return (
        <div className='relative'>
            <div className="left-0 h-full w-64 bg-white py-4 px-4 overflow-hidden">
                <ul className="space-y-4">
                    <li>
                        <a
                            href="#"
                            className="block rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-gray-700"
                        >
                            General
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-secondary hover:text-gray-700"
                        >
                            Teams
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-secondary hover:text-gray-700"
                        >
                            Billing
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-secondary hover:text-gray-700"
                        >
                            Invoices
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-secondary hover:text-gray-700"
                        >
                            Account
                        </a>
                    </li>
                    <li>
                        <Image
                            className="w-[100%] h-auto rounded-md"
                            src={"/kitchen2.jpg"}
                            width={100}
                            height={100}
                            alt=""
                        ></Image>{" "}
                    </li>
                    <li>
                        <Image
                            className="w-[100%] h-auto rounded-md"
                            src={"/kitchen5.jpg"}
                            width={100}
                            height={100}
                            alt=""
                        ></Image>{" "}
                    </li>
                </ul>
            </div>
        </div>
        
    )
}
