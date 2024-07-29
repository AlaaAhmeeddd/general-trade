"use client"
import React, { useState } from "react"
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react"
import Link from "next/link"
import { productsType } from "@/constants"
export function DrawerPlacement() {
  const [openRight, setOpenRight] = useState(false)

  const openDrawerRight = () => setOpenRight(true)
  const closeDrawerRight = () => setOpenRight(false)

  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4 right-0 top-[18%] fixed">
        {" "}
        {/* Render this div always */}
        <Button
          onClick={openDrawerRight}
          placeholder={""}
          className="py-5 px-10 bg-primary hover:bg-primary/80"
        >
          Categories
        </Button>
      </div>

      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4 bg-secondary shadow-sm"
        placeholder={""}
      >
        <div className="mb-6 flex items-center justify-between">
          <div
            // variant="h5"
            color="blue-gray"
            // placeholder={""}
            className="text-basic-text"
          >
            <Link href="/product">
              <b className="text-basic-text text-2xl"> Products</b>
            </Link>
          </div>
          <IconButton
            variant="text"
            onClick={closeDrawerRight}
            placeholder={""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div color="gray" className="mb-8 pr-4 font-normal">
          <div className="leftside">
            <ul>
              {productsType.map((type, index) => (
                <li
                  key={index}
                  className="font-semibold capitalize text-3xl text-basic-text hover:bg-black/5 duration-150"
                >
                  <Link href={type.href}>{type.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  )
}
