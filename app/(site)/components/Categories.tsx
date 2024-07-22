"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Navigation, Autoplay } from 'swiper/modules';
import { productsType } from '@/constants';
import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';


export default function Categories() {

  return (
    <div className='px-4 pt-8 pb-16 h-auto w-full'>
      <div className="container mx-auto">
        <h1 id='categories' className='my-12 font-semibold text-4xl text-basic-text capitalize text-center'>
          Our Products
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
                slidesPerView: 4,
              }
            }}
          spaceBetween={20}
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
            productsType.map((type, index)=>(
              <SwiperSlide key={index} className='group cursor-pointer pt-[20px]'>
                <div className='overflow-hidden rounded-lg group-hover:-translate-y-4 transition-all duration-200'>
                  <div className="w-[600px] h-72">
                    <Link href={type.href}>
                      <Image src={type.imageHref} alt="type" width={800} height={800} className='h-full w-full' />
                    </Link>
                  </div>
                </div>
                <div className='flex justify-between items-center mt-3 group-hover:-translate-y-4 transition-all duration-200'>
                  <p className='text-basic-text text-base font-semibold'>{type.title}</p>
                  <button>
                    <Link href={type.href} className='flex gap-1 items-center text-dark-gray text-sm group-hover:font-semibold  hover:font-semibold'>
                      Explore 
                      <IoIosArrowRoundForward className='text-lg' />
                    </Link>
                  </button>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
}
