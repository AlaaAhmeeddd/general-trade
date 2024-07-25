import Image from "next/image";
import Link from "next/link"
import { IoIosArrowRoundForward } from "react-icons/io";

type cardType = {
    href: string,
    title: string,
    description: string,
    imageHref: string
}

export default function TypeCard({href, title, description, imageHref}: cardType) {
    return (
        <div className="relative flex justify-between items-center bg-gray-100 rounded-lg p-8 overflow-hidden min-h-[250px]">
            <div className="flex flex-col gap-2 flex-1">
                <h1 className="text-3xl text-basic-text capitalize font-semibold">{title}</h1>
                <p className="text-dark-gray">{description}</p>
                <Link href={href}>
                    <button className="text-primary flex items-center duration-150 gap-2 mt-4 font-semibold hover:pl-2">
                        <p>View All Products</p>
                        <IoIosArrowRoundForward className="text-xl" />
                    </button>
                </Link>
            </div>
            <div className="relative w-[300px] h-full md:block hidden">
                <Image src={imageHref} alt={title} width={300} height={300} className="object-contain absolute -right-12 top-[50%] -translate-y-[50%]" />
            </div>
        </div>
    )
}
