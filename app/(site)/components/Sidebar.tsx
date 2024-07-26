"use client"
import Image from 'next/image'
import React, { useState, useEffect} from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";


export default function Sidebar() {
    const [ isOpen , setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 960) {
                setOpen(false);
            } else {
                setOpen(true);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='relative bg-white border-r shadow-lg'>
            <IoIosArrowDroprightCircle 
                className={`lg:hidden absolute top-20 right-0 text-2xl text-primary z-50 ${isOpen ? "block" : "lg:hidden block"}`}
                onClick={()=>setOpen(!isOpen)}
            />
            <div className={`${isOpen ? "w-64 lg:sticky absolute" : "w-12"} left-0 h-full lg:w-64 w-12  py-4 px-4 overflow-hidden z-20`}>
                <ul className={`space-y-4 ${!isOpen && "lg:block hidden"}`}>
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
