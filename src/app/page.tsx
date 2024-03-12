"use client"

import { RiArrowDownDoubleFill } from "react-icons/ri"
import Map from "./components/Home/Map"
import MainLayout from "./layouts/MainLayout"
import Image from "next/image"
import Logo from "../../public/images/logo.png"
import abuelito from "../../public/images/abuelito.jpg"
import cenote from "../../public/images/cenote.jpg"
import piramide from "../../public/images/piramide.jpg"
import { FaArrowRight } from "react-icons/fa"
import HomeGallery from "./components/Home/Column"

const Home = () => {
  return (
    <MainLayout>
      <section className="w-full h-screen flex bg-chichen bg-cover bg-no-repeat  bg-top">

        <div className="absolute inset-0 bg-white bg-opacity-50"></div>

        <div className='relative w-[90%] max-w-8xl h-[70%] flex items-center justify-center mx-auto mt-[70px] rounded-2xl'>
          <div className="absolute h-full w-full bg-gradient-to-r from-black/60 via-black/20 to-transparent mix-blend-hard-light z-10 rounded-2xl"></div>
          <video
            autoPlay
            muted
            loop
            className="absolute w-full h-full top-0 bottom-0 object-cover rounded-2xl"
          >
            <source src={"/videos/home3.mp4"} type="video/mp4" />
          </video>

          <div className="w-[50%] h-full z-50">
            <div className="h-full pl-4 flex flex-col justify-center ml-auto pr-12 lg:pl-[10%]">
              <h1 className="text-6xl  font-bold text-white mb-6 lg:text-8xl">Yucatán</h1>
              <p className="text-sm text-white mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ea aspernatur ullam repudiandae asperiores cupiditate nam enim incidunt quidem praesentium accusamus quod, magnam sequi provident ipsa, mollitia cum, ratione laborum.</p>
              <button className="w-max flex flex-row outline-none rounded-md px-[10px] py-[5px] bg-white border-2 border-white text-black font-bold gap-2 items-center justify-center text-sm hover:bg-transparent hover:text-white hover:border-white transition duration-300 ease-in-out">
                <span className="align-middle">Conócelo</span>
                <FaArrowRight className="text-sm align-middle" />
              </button>
            </div>
          </div>

          <div className="relative w-[50%] h-full flex flex-col justify-center z-10">
            <div className="absolute w-[200px] h-[60%] top-[40px] left-0 z-40 lg:top-[50px] lg:w-[20vw] ">
              <Image src={cenote} width={0} height={0} alt="" className="w-full h-full border-[4px] border-white" />
            </div>
            <div className="absolute w-[200px] h-[60%] top-[70px] left-[20%] z-30 lg:top-[100px] lg:w-[20vw] ">
              <Image src={piramide} width={0} height={0} alt="" className="w-full h-full" />
            </div>
            <div className="absolute w-[200px] h-[60%] top-[100px] left-[40%] z-20 lg:top-[150px] lg:w-[20vw] ">
              <Image src={abuelito} width={0} height={0} alt="" className="w-full h-full" />
            </div>
          </div>

        </div>
      </section>
      <div className="text-center bg-[#53adad] py-8 text-white">
        <h1 className=" md:text-4xl  font-bold ">Traza tu ruta maya y viaja con <span>Turismaya</span></h1>
        <p className="font-semibold text-lg max-w-4xl mx-auto leading-5 mt-4">Descubre la belleza y autenticidad que cada pueblo de Yucatán tiene para ofrecerte. Desde su historia hasta los misterios mayas que se encuentran en ellos.</p>
      </div>
      <Map />
    <HomeGallery />
    </MainLayout>
  )
}
export default Home