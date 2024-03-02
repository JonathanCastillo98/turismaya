"use client"

import { RiArrowDownDoubleFill } from "react-icons/ri"
import Map from "./components/Home/Map"
import MainLayout from "./layouts/MainLayout"
import Image from "next/image"
import Logo from "../../public/images/logo.png"

const Home = () => {
  return (
    <MainLayout>
      <section className="relative items-center justify-center flex-col w-[100%] h-screen m-auto hidden -z-100 md:flex">
        <div className="absolute w-full h-full bg-[rgb(62,87,96)] top-0 bottom-0 z-10 mix-blend-hard-light "></div>
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full top-0 bottom-0 object-cover"
        >
          <source src={"/videos/home.mp4"} type="video/mp4" />
        </video>

        <div className="border border-white w-full h-[80%] z-20">

        </div>
      </section>
    </MainLayout>
  )
}
export default Home