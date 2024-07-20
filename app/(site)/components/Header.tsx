"use client"
import Link from "next/link"
import Image from "next/image"
import DropDown from "./dropDown"
import { LazyMotion, domAnimation, m } from "framer-motion"
import Search from "./Search"
import { useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri";
import { navLinks, productsType } from "@/constants"
import { usePathname } from "next/navigation"

function Header() {
  const [menuOpen, setMenuOpen] = useState(true)
  const pathName = usePathname();

  const handleMouseEnter = (isEnabled:boolean) => {
    return () => {
      if (isEnabled) {
        setMenuOpen(true)
      }else{
        setMenuOpen(false)
      }
    };
  };
  return (
    <LazyMotion features={domAnimation}>
      <nav>
        <div className="sticky top-0 py-4 px-4 z-50 w-full bg-secondary border-b border-light-gray text-basic-text">
          <m.header
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="container flex items-center justify-between mx-auto"
          >
            <nav className="hidden lg:inline-flex">
              <ul className="flex items-center gap-8">
                {
                  navLinks.map((link, index) => (
                    <li key={index} className="relative flex items-center text-base font-semibold group">
                      <Link href={link.href} onMouseEnter={handleMouseEnter(link.hasMenu)} className="capitalize">
                        {link.title}
                      </Link>
                      {link.hasMenu && (
                        <RiArrowDropDownLine className="w-[30px] h-[30px] absolute top-[50%] -translate-y-[50%] -right-6" />
                      )}
                      {menuOpen && link.hasMenu && (
                        <div className="absolute left-0 hidden mb-2 transition-opacity duration-300 bg-white rounded-lg shadow-lg w-60 top-full group-hover:block -z-10 group-hover:z-20">
                          <ul className="">
                            {productsType.map((type, index) => (
                              <li key={index} className="text-sm duration-300 hover:bg-gray-100 hover:pl-2">
                                <Link
                                  onClick={handleMouseEnter(false)}
                                  href={type.href}
                                  className="block px-4 py-2 capitalize"
                                >
                                  {type.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {pathName === link.href && (
                        <span className="w-full h-[2px] bg-basic-text absolute bottom-0 left-0"></span>
                      )}
                    </li>
                  ))
                }
              </ul>
            </nav>
            <DropDown />
            <div className="flex ">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="logo image"
                  loading="lazy"
                  width={50}
                  height={50}
                  className="object-contain"
                ></Image>
              </Link>
            </div>
            <div className="hidden lg:block">
              <Search />
            </div>
          </m.header>
        </div>
      </nav>
    </LazyMotion>
  )
}

export default Header
