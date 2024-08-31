"use client"
// import { ToastContainer } from "react-toastify";
import Hero from "./components/Hero";
import HeroSlider from "./components/HeroSlider";
import Products from "./products/page";

export default function Home() {
  return (
    <main className=" mx-auto ">
      {/* <Hero /> */}
      <HeroSlider />
      <Products />
    </main>
  );
}
