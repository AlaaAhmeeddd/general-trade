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
  console.log(items)
  return (
    <div className="pb-10 flex justify-start items-center flex-col min-h-[70vh]">
      <h1
        className={`text-[30px] lg:text-[40px]  font-bold  text-basic-text left-5  `}
      >
        Similer Proudcts{" "}
      </h1>

      <div className="flex flex-row">
          <div className="flex justify-center items-stretch gap-8 px-4 flex-wrap mt-8">
            {items?.map((item) => (
              <div
                key={item._id}
                className="bg-white border border-gray-100 p-3 rounded-md overflow-hidden flex flex-col justify-between md:w-[30%] w-full shadow-md "
              >
                <div className="relative flex justify-center items-center max-h-[350px] overflow-hidden mx-auto">
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

                <div className="flex flex-col gap-5 px-5 py-6 justify-between bg-gray-100 rounded-md mt-6">
                  <div>
                    <div
                      title={item.name}
                      className="font-semibold md:text-xl truncate "
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
