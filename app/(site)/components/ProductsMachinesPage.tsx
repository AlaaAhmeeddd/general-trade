"use client"
import BlockContent from "@/sanity/schemas/blockContent"
import ProductMachineType from "@/types/Product"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Sidebar from "./Sidebar"

type Props = {
  items: ProductMachineType[]
  name: string
}


function Products({ items, name }: Props) {
  return (
    <div className="flex min-h-[70vh]">
      <Sidebar />
      <div className="pb-20 flex flex-col items-center lg:my-0 my-auto">
        <h1
          className={`text-[20px] mt-8 md:text-[40px] lg:text-[60px] font-bold text-center text-basic-text  `}
        >
          {name}
        </h1>
        {items.length !== 0 ? (
          <div className="text-basic-text text-center text-xl m-5">
            <>
              {items.length == 0
                ? "No Items founded"
                : `Items( ${items.length} ) found`}
            </>
          </div>
        ) : (
          <div className="">
            <p className="text-basic-text text-center text-3xl font-bold m-5 ">
              {" "}
              Ops, no items founded
            </p>
          </div>
        )}
        <div className="flex flex-row">
          {/* <div className="left-0 sticky top-0 w-64 bg-white">
            <ul className="space-y-1">
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
                  className="w-[100%] h-auto"
                  src={"/kitchen2.jpg"}
                  width={100}
                  height={100}
                  alt=""
                ></Image>{" "}
              </li>

              <li>
                <Image
                  className="w-[100%]"
                  src={"/kitchen.jpg"}
                  width={100}
                  height={100}
                  alt=""
                ></Image>{" "}
              </li>
            </ul>
          </div> */}

          <div className=" container mx-auto flex flex-col lg:flex-row justify-center items-stretch gap-8 px-4  flex-wrap">
            {items?.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-3xl overflow-hidden flex flex-col gap-10 justify-between lg:w-[46%] xl:w-[30%] shadow-2xl "
              >
                <div className="flex justify-center items-center max-h-[350px] overflow-hidden mx-auto pt-20">
                  {item.mainImage ? (
                    <Image
                      src={item.mainImage}
                      alt="image"
                      width={250}
                      height={350}
                      className=" bg-contain h-fit"
                    />
                  ) : (
                    <></>
                  )}
                </div>

                <div className="flex flex-col gap-6 px-5 pb-10 justify-between bg-secondary">
                  <div>
                    <div
                      title={item.name}
                      className="font-bold text-lg md:text-2xl w-72 truncate "
                    >
                      {item.name}
                    </div>
                    {item.category === "" && (
                      <div className=" text-gray-500"> {item.description}</div>
                    )}
                  </div>

                  <Link
                    href={`/${
                      item.category === "machine" ? "machine" : "product"
                    }/${item._id}`}
                    className="btn-more  "
                  >
                    See More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
