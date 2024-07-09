import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie streeming app",
  description: "created by mifta juneidi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
   
        <Navbar />
        {children}
          <Footer />
      
        </body>
    </html>
  );
}
