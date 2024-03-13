import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer/footer"
import Navbar from '../components/navbar/navbar'
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CUWA",
  description: "CUWA - Where Every Customized Bottle Tells a Unique Brand Story.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={poppins.className}><Navbar/>{children}<Footer/></body>
    </html>
  );
}
//hi
