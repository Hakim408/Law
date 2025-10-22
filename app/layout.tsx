import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Toaster } from "@/components/ui/toaster"  // ✅ Add this line

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Justice Law Firm",
  description:
    "A professional law firm specializing in various practice areas including family law, corporate law, and criminal defense.",
  icons: {
    icon: "/images/favicon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </div>

        {/* ✅ Add the Toaster here so toast notifications appear anywhere in the app */}
        <Toaster />
      </body>
    </html>
  )
}
