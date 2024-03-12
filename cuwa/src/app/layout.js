import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer/footer"
import Navbar from '../components/navbar/navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CUWA",
  description: "CUWA - Where Every Customized Bottle Tells a Unique Brand Story.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Navbar/>{children}<Footer/></body>
    </html>
  );
}
//hi
