"use client"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import ProductMachineType from "@/types/Product"
import { notFound } from "next/navigation"

import Similer from "./SimilerProudcts"
import useProducts from "@/hooks/use-products"
import FeatureHighlights from "./FeatureHighlights"
import Link from "next/link"
type props = {
  product: ProductMachineType
}

function ProductMachinePage({ product }: props) {
  const { products, isLoading } = useProducts(product.type)
  if (product == null) {
    return notFound()
  } else {
    return (
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white shadow-md rounded-lg">
          <div className="flex flex-col md:w-1/2 w-full space-y-4">
            <div className="relative w-full h-auto sm:ml-[30%] ml-0 ">
              <Image
                src={product.mainImage}
                alt="Vintage Cuff Ring"
                // layout="fill"
                objectFit="cover"
                className="rounded-md"
                height={200}
                width={250}
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="relative w-full h-32">
                <Image
                  src="/kitchen2.jpg"
                  alt="Ring View 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="relative w-full h-32">
                <Image
                  src="/kitchen3.jpg"
                  alt="Ring View 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="relative w-full h-32">
                <Image
                  src="/kitchen4.jpg"
                  alt="Ring View 3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 space-y-4 mt-4 md:mt-0 md:ml-8">
            <h2 className="text-2xl font-bold"> {product.name}</h2>
            <div className="text-gray-700">
              {product.content && (
                <>
                  <h1 className="text-md font-bold uppercase md:text-xl text-black ">
                    Specifications
                  </h1>
                  <hr />
                  <div className="flex flex-col gap-6 py-4 text-lg text-black">
                    <PortableText value={product.content} />
                  </div>
                </>
              )}
            </div>
            <div>
              <span className="font-medium text-black">Product Number:</span>{" "}
              5672-9013-4826
            </div>
            <div>
              <span className="font-medium text-black">Category:</span>{" "}
              {product.category}
            </div>

            <Link
              href="mailto:general2m@yahoo.com"
              className="flex items-center space-x-2 btn-more mt-2"
            >
              <svg
                className="h-6 w-6 "
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 13.5l-8-6V6l8 6 8-6v1.5l-8 6z" />
                <path d="M4 8v10h16V8l-8 6-8-6z" />
              </svg>
              <span className="text-center">Email Us</span>
            </Link>
            {/* </a> */}
          </div>
        </div>
        <FeatureHighlights />
        <Similer items={products} />
      </div>

      //           href={product.url || "/"}

      //           {product.content && (

      //           {product.features && (

      //         {product.table && (
    )
  }
}

export default ProductMachinePage
