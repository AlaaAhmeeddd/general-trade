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
      {/* <div className="lg:block hidden min-h-[70vh] border-r shadow-lg z-10">
        <Sidebar />
      </div> */}
      <div className="pb-20 md:pt-0 pt-16 flex flex-col items-center flex-1">
        <h1
          className={`text-[30px] mt-8 md:text-[40px] lg:text-[60px] font-bold text-center text-basic-text  `}
        >
          {name}
        </h1>
        {items.length !== 0 ? (
          <div className="text-basic-text text-center text-xl m-5">
            <>
              {items.length == 0
                ? "No Items founded"
                : `${items.length} Items found`}
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

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {items?.map((item) => (
              <div
                key={item._id}
                className="bg-white border border-gray-100 p-3 rounded-md overflow-hidden flex flex-col justify-between shadow-md"
              >
                <div className="flex justify-center items-center max-h-[350px] overflow-hidden mx-auto pt-20">
                  {item.mainImage ? (
                    <Image
                      src={item.mainImage}
                      alt="image"
                      width={250}
                      height={350}
                      className="bg-contain h-fit"
                    />
                  ) : (
                    <></>
                  )}
                </div>

                <div className="flex flex-col gap-5 px-5 py-6 justify-between bg-gray-100 rounded-md mt-6">
                  <div>
                    <div
                      title={item.name}
                      className="font-semibold md:text-xl truncate"
                    >
                      {item.name}
                    </div>
                    {item.category === "" && (
                      <div className="text-gray-500"> {item.description}</div>
                    )}
                  </div>

                  <Link href={`/product/${item._id}`} className="btn-more">
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
