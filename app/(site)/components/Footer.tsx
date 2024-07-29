import Link from "next/link"
import Image from "next/image"
import React from "react"

function Footer() {
  return (
    <footer id="footer" className="bg-secondary  text-white py-8 mt-50 px-4">
      <footer className="bg-secondary">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600">
            <Image src={"/logo.png"} width={50} height={50} alt="x"></Image>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            At General Trade, we stand out for our commitment to exceptional
            quality and innovative solutions in sheet metal products. Our focus
            on reliability and customer satisfaction makes us a trusted partner
            in the industry.
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link
                href="tel: +20122 5757 233"
                className="flex items-center space-x-2 btn-more mt-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.36 15.36 0 006.59 6.59l2.2-2.2a1 1 0 01.94-.26c1.05.27 2.17.42 3.34.42a1 1 0 011 1v3.5a1 1 0 01-1 1A18.5 18.5 0 013 5.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.17.15 2.29.42 3.34a1 1 0 01-.26.94l-2.2 2.2z" />
                </svg>
                <span> Call Us</span>
              </Link>
            </li>

            <li>
              <Link
                href="tel: +20122 6227 070"
                className="flex items-center space-x-2 btn-more mt-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.36 15.36 0 006.59 6.59l2.2-2.2a1 1 0 01.94-.26c1.05.27 2.17.42 3.34.42a1 1 0 011 1v3.5a1 1 0 01-1 1A18.5 18.5 0 013 5.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.17.15 2.29.42 3.34a1 1 0 01-.26.94l-2.2 2.2z" />
                </svg>
                <span> +20122 6227 070</span>
              </Link>
            </li>

            <li>
              <Link
                href="tel: +20122 5757 233"
                className="flex items-center space-x-2 btn-more mt-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.36 15.36 0 006.59 6.59l2.2-2.2a1 1 0 01.94-.26c1.05.27 2.17.42 3.34.42a1 1 0 011 1v3.5a1 1 0 01-1 1A18.5 18.5 0 013 5.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.17.15 2.29.42 3.34a1 1 0 01-.26.94l-2.2 2.2z" />
                </svg>
                <span> +20122 5757 233</span>
              </Link>
            </li>

            <li>
              <Link
                href="mailto:general2m@yahoo.com"
                className="flex items-center space-x-2 btn-more mt-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 13.5l-8-6V6l8 6 8-6v1.5l-8 6z" />
                  <path d="M4 8v10h16V8l-8 6-8-6z" />
                </svg>
                <span>Email Us</span>
              </Link>
            </li>

            <li>
              <Link
                href="https://www.google.com/maps?q=location+address"
                className="flex items-center space-x-2 btn-more mt-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C8.134 2 5 5.134 5 9c0 4.238 3.805 8.623 6.832 10.926.384.273.952.273 1.336 0C15.195 17.623 19 13.238 19 9c0-3.866-3.134-7-7-7zm0 2c2.761 0 5 2.239 5 5 0 3.172-3.028 6.885-5 8.714C10.028 15.885 7 12.172 7 9c0-2.761 2.239-5 5-5zm0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>troly road-ALSALAM</span>
              </Link>
            </li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </footer>
  )
}

export default Footer
