import dns from 'node:dns'
dns.setServers(['8.8.8.8','8.8.4.4'])
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import { ToastContainer } from "react-toastify";



const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
})

export const metadata = {
  title: "Dragon News — Real Stories. Real Time ",
  description: "Dragon News is a modern digital news platform delivering breaking news, trending stories, and category-based updates with a fast, clean, and responsive user experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <main>{children}</main>
        <ToastContainer />
      </body>
    </html>
  );
}
