import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { ToastContainer } from "react-toastify";
import ContextProvider from "./Context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <Navbar />
          <div className="mt-16">{children}</div>
          <ToastContainer />
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
