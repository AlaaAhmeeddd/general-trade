"use client"
import ProductMachineType from "@/types/Product"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Autoplay } from 'swiper/modules';
import { productsType } from '@/constants';
import { IoIosArrowRoundForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';


type Props = {
  items: ProductMachineType[]
}

function Similer({ items }: Props) {
  console.log(items)
  return (
    <div className='px-4 pt-8 pb-16 h-auto w-full'>
      <div className="container mx-auto">
        <div className="pb-10 min-h-[70vh]">
          <h1
            className={`text-[30px] lg:text-[40px] pb-10 font-bold  text-basic-text left-5 text-center`}
          >
            Similer Proudcts{" "}
          </h1>
          <Swiper
              slidesPerView={1}
                breakpoints={{
                  620:{
                    spaceBetween: 20,
                    slidesPerView: 2,
                  },
                  960:{
                    spaceBetween: 20,
                    slidesPerView: 3,
                  }
                }}
              spaceBetween={40}
              keyboard={{
                enabled: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Keyboard, Navigation, Autoplay]}
              className="mySwiper relative;"
            >
              {
                items?.map((item, index)=>(
                  <SwiperSlide key={index} className='cursor-pointer py-[25px] h-full'>
                    <div className="border-gray-100 shadow-md p-2 rounded-md">
                      <div className='overflow-hidden rounded-lg'>
                        <div className="h-auto relative">
                          <Link href={`/${
                            item.category === "machine" ? "machine" : "product"
                            }/${item._id}`}>
                            <Image src={item.mainImage} alt="type" width={500} height={500} className='h-[300px] w-[300px] relative left-[50%] -translate-x-[50%]' />
                          </Link>
                        </div>
                      </div>
                      <div className='flex justify-between items-center mt-3 p-4 rounded-md bg-gray-50'>
                        <p className='text-basic-text text-base font-semibold'>{item.name}</p>
                        <button>
                          <Link href={`/${
                            item.category === "machine" ? "machine" : "product"
                            }/${item._id}`} 
                            className='flex gap-1 items-center text-dark-gray text-sm group-hover:font-semibold  hover:font-semibold'>
                            Explore 
                            <IoIosArrowRoundForward className='text-lg' />
                          </Link>
                        </button>
                      </div>
                    </div>
                    
                  </SwiperSlide>
                ))
              }
            </Swiper>
          {/* <div className="flex flex-row">
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
            </div> */}
        </div>
        </div>
    </div>
  )
}

export default Similer
