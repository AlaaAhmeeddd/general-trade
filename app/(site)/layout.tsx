import Footer from "./components/Footer"
import Header from "./components/Header"
import "../globals.css"
import { Inter } from "next/font/google"
import Image from "next/image"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "General Trade",
  description:
    "Top-quality sheet and press metal solutions for stylish designs.",
  icons: {
    icon: "/we.png",
  },
}

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-[70vh]">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
