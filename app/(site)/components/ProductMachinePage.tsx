"use client"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import Link from "next/link"
import Images from "./Images"
import ProductMachineType from "@/types/Product"
import { notFound } from "next/navigation"
import { PiCertificateFill } from "react-icons/pi"
import { AiFillSafetyCertificate } from "react-icons/ai"
import { MdLocalShipping } from "react-icons/md"
import { BsTransparency } from "react-icons/bs"
import Similer from "./SimilerProudcts"
import useProducts from "@/hooks/use-products"
import FeatureHighlights from "./FeatureHighlights"
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
            {/* <div>
            <span className="font-medium">Tags:</span> Bracelet, Accessories
          </div> */}
            <button className="mt-4 bg-black hover:bg-gold-700 text-white font-bold py-2 px-2 rounded ">
              Email Us
            </button>
          </div>
        </div>
        <FeatureHighlights />
        <Similer items={products} />
      </div>
      // <div className="bg-secondary ">
      //   <div className="container mx-auto py-20 px-[10px] flex justify-between flex-col gap-20 pt-[200px] ">
      //     <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
      //       <div className="flex gap-6 flex-col pt-[10%]">
      //         <h1 className="text-4xl font-bold text-gray-200">
      //           {product.name}
      //         </h1>
      //         <p className="text-lg  text-gray-600">{product.description}</p>
      //       </div>
      //       <Image
      //         src={product.mainImage}
      //         alt="image"
      //         width={500}
      //         height={500}
      //         className="bg-white shadow-2xl rounded-2xl "
      //       />
      //     </div>
      //     {product.url && (
      //       <div className="flex flex-col gap-4">
      //         <Link
      //           href={product.url || "/"}
      //           target="_blank"
      //           rel="noopener noreferrer"
      //           className="bg-red-700 text-white px-3 py-2 text-center rounded-[30px] flex-1 text-lg font-semibold"
      //         >
      //           youtube video
      //         </Link>
      //         <hr />
      //       </div>
      //     )}
      //     <div className="flex justify-between items-start gap-10 flex-col lg:flex-row max-w-[120%]">
      //       <div className="max-w-full sm:max-w-[50%]">
      //         <div className="flex flex-col gap-4 ">
      //           {product.content && (
      //             <>
      //               <h1 className="text-3xl font-bold uppercase md:text-5xl ">
      //                 Specifications
      //               </h1>
      //               <hr />
      //               <div className="flex flex-col gap-6 py-4 text-lg">
      //                 <PortableText value={product.content} />
      //               </div>
      //             </>
      //           )}
      //         </div>
      //         <div className="flex flex-col gap-4">
      //           {product.features && (
      //             <>
      //               <h1 className="text-3xl font-bold uppercase md:text-5xl ">
      //                 features
      //               </h1>
      //               <hr />
      //               <div className="flex flex-col gap-6 py-4 text-lg ">
      //                 <PortableText value={product.features} />
      //               </div>
      //             </>
      //           )}
      //         </div>
      //       </div>
      //       <div className="w-full xvw">
      //         {product.table && (
      //           <Image
      //             src={product.table}
      //             alt="image"
      //             className="object-cover w-full h-full rounded-lg"
      //             width={1500}
      //             height={800}
      //           />
      //         )}
      //         <Images product={product} />
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default ProductMachinePage
