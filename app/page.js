"use client";
import { Suspense } from "react";
// import { ToastContainer } from "react-toastify";
import Hero from "./components/Hero";
import HeroSlider from "./components/HeroSlider";
import Products from "./products/page";
import SkeletonCard from "./components/SkeletonCard";

export default function Home() {
  return (
    <main className=" mx-auto ">
      {/* <Hero /> */}
      <HeroSlider />
      <Suspense fallback={<SkeletonCard />}>
        <Products />
      </Suspense>
    </main>
  );
}
