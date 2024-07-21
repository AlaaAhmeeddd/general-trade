"use client"
import Link from "next/link"
import { useState } from "react"
import Search from "./Search"
import { navLinks } from "@/constants"
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

function DropDown() {
  const [state, setState] = useState(false)
  const handleClick = () => {
    setState(!state)
  }
  return (
    <div className="lg:hidden shrink-0">
      <div className="border border-gray-400 p-1 rounded-full" onClick={handleClick}>
        <IoMenuOutline className="w-[25px] h-[25px] text-text-primary" />
      </div>
      <nav
        className={`${
          state == true ? "block" : "hidden"
        } inline-flex lg:hidden flex-col items-center justify-between absolute top-0 left-0 gap-10 bg-black p-10 w-full z-[5] pt-[60px] `}
      >
        <div onClick={handleClick} className="absolute top-6 right-10 ">
          <IoCloseOutline className="text-white w-[25px] h-[25px]" />
        </div>
        <div className="mt-4">
          <Search setState={setState} textStyle="border-gray-400 border text-primary" />
          <ul className="flex items-center flex-col justify-center gap-4 mt-6">
            {navLinks.map((link, index)=>(
                <li key={index}
                onClick={handleClick}
                className="font-semibold capitalize text-xl text-white"
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default DropDown
