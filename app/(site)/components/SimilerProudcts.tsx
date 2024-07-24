"use client"
import BlockContent from "@/sanity/schemas/blockContent"
import ProductMachineType from "@/types/Product"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type Props = {
  items: ProductMachineType[]
}

function Similer({ items }: Props) {
  return (
    <div className="pb-10 flex justify-start items-center flex-col min-h-[70vh]">
      <h1
        className={`text-[10px] md:text-[20px] lg:text-[40px]  font-bold  text-black left-5  `}
      >
        Similer Proudcts{" "}
      </h1>

      <div className="flex flex-row">
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
  )
}

export default Similer
