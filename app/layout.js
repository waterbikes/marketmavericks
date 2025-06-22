import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/page";
import Navbar from "./components/Navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Helpuit",
  description: "Serivices in 10 mins",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en">
      <head />
      <body className="bg-white text-gray-900">
        <Navbar />  
        {children}  
        <Footer />   
      </body>
    </html>
  );
}
