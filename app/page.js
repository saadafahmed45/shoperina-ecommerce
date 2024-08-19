// import { ToastContainer } from "react-toastify";
import Hero from "./components/Hero";
import Products from "./products/page";

export default function Home() {
  return (
    <main className=" mx-auto ">
      <Hero />
      <Products />
    </main>
  );
}
