"use client"
import { LazyMotion, domAnimation, m } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useContext } from "react"
import Link from "next/link"

function Hero() {
  return <LazyMotion features={domAnimation}>
    <div className="bg-secondary px-4 py-10">
      <div className="flex items-center justify-between container mx-auto text-basic-text">
        <div className="flex flex-col gap-y-8">
          <h1 className="text-4xl font-semibold">
            Crafting Excellence in Stainless Steel: Durable Solutions for a Brighter Future
          </h1>
          <p className="text-dark-gray">
            At our company, we pride ourselves on delivering top-quality stainless steel 
            products designed to stand the test of time.
          </p>
        </div>
        <div className="flex gap-8">
          <div className="rounded-t-full rounded-b-xl overflow-hidden">
            <Image src='/image1.jpg' alt='image' width={300} height={400} />
          </div>
          <div className="rounded-b-full rounded-t-xl overflow-hidden">
            <Image src='/image2.jpg' alt='image' width={300} height={400} />
          </div>
        </div>
      </div>
    </div>
  </LazyMotion>
}

export default Hero
