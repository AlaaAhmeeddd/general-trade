"use client"
import React from "react"
import FeatureHighlights from "../components/FeatureHighlights"
import Image from "next/image"
function page() {
  return (
    <div>
      <div>
        <section className=" text-black bg-white">
          <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                What makes us special
              </h2>

              <p className="mt-4 text-black">
                At General Trade, we stand out for our commitment to exceptional
                quality and innovative solutions in sheet metal products. Our
                focus on reliability and customer satisfaction makes us a
                trusted partner in the industry.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-secondary p-4">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">Exceptional Quality</h2>

                  <p className="mt-1 text-sm text-black">
                    We ensure top-notch quality in every product through
                    stringent quality control processes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-secondary p-4">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">Innovative Solutions</h2>

                  <p className="mt-1 text-sm text-black">
                    By integrating the latest technologies, we provide
                    cutting-edge solutions tailored to client needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-secondary p-4">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">Competitive Pricing</h2>

                  <p className="mt-1 text-sm text-black">
                    Our competitive pricing strategy delivers great value
                    without sacrificing quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-secondary p-4">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">
                    Dedicated Customer Service
                  </h2>

                  <p className="mt-1 text-sm text-black">
                    Our customer service team is dedicated to providing
                    exceptional support and building lasting relationships.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-secondary p-4">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">Continuous Improvement</h2>

                  <p className="mt-1 text-sm text-black">
                    We are committed to constant enhancement of our products and
                    services to meet evolving demands.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-secondary p-4">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">Reliable Solutions</h2>

                  <p className="mt-1 text-sm text-black">
                    We offer dependable solutions that our clients can trust for
                    their daily operational needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className=" py-12 bg-secondary">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12 px-4">
          <div className="w-full lg:w-1/2">
            <Image
              src="/image2.jpg"
              alt="Our Vision"
              className="rounded-lg"
              layout="responsive"
              objectFit="cover"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-black">
              <p>At General Trade, we are dedicated to:</p>
              <ul>
                <li>
                  Delivering exceptional quality and innovative sheet metal
                  products at competitive prices.
                </li>
                <li>
                  Building long-term relationships through dedicated customer
                  service and a commitment to continuous improvement.
                </li>
                <li>
                  Harnessing the latest technologies to ensure efficient and
                  reliable solutions that meet our clients' daily needs.
                </li>
                <li>
                  Embracing a culture of continuous improvement, driven by a
                  relentless pursuit of customer satisfaction.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
      <FeatureHighlights />
    </div>
  )
}

export default page
