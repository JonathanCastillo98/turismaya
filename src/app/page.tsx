"use client"

import { RiArrowDownDoubleFill } from "react-icons/ri"
import Map from "./components/Home/Map"
import MainLayout from "./layouts/MainLayout"
import Image from "next/image"
import Logo from "../../public/images/logo.png"
import { FaArrowRight } from "react-icons/fa"

const Home = () => {
  return (
    // <MainLayout>
    //   <section className="relative items-center justify-center flex-col w-[100%] h-screen m-auto hidden -z-100 md:flex">
    //     <div className="absolute w-full h-full bg-[rgb(62,87,96)] top-0 bottom-0 z-10 mix-blend-hard-light "></div>
    //     <video
    //       autoPlay
    //       muted
    //       loop
    //       className="absolute w-full h-full top-0 bottom-0 object-cover"
    //     >
    //       <source src={"/videos/home.mp4"} type="video/mp4" />
    //     </video>

    //     <div className="border border-white w-full h-[80%] flex flex-row z-20">
    //       <div className="border border-white w-[50%] h-full">
    //         <div className="border border=white h-full w-[80%] flex flex-col justify-center ml-auto pr-12">
    //           <h1 className="text-8xl font-bold text-white mb-4">Yucatán</h1>
    //           <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ea aspernatur ullam repudiandae asperiores cupiditate nam enim incidunt quidem praesentium accusamus quod, magnam sequi provident ipsa, mollitia cum, ratione laborum.</p>
    //         </div>
    //       </div>
    //       <div className="border border-white w-[50%] h-full flex flex-col justify-center"></div>
    //     </div>
    //   </section>
    //   <Map />
    // </MainLayout>
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
            <div className="h-full w-[80%] flex flex-col justify-center ml-auto pr-12">
              <h1 className="text-8xl font-bold text-white mb-6">Yucatán</h1>
              <p className="text-white mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ea aspernatur ullam repudiandae asperiores cupiditate nam enim incidunt quidem praesentium accusamus quod, magnam sequi provident ipsa, mollitia cum, ratione laborum.</p>
              <button className="w-max flex flex-row outline-none rounded-md px-[10px] py-[5px] bg-white text-black font-bold gap-2 items-center justify-center text-sm">
                <span className="align-middle">Conócelo</span>
                <FaArrowRight className="text-sm align-middle" />
              </button>
            </div>
          </div>

          <div className="relative w-[50%] h-full flex flex-col justify-center z-50 border border-white">
            <div className="absolute border border-[yellow] w-[200px] h-[250px] top-0 left-0"></div>
            <div className="absolute border border-[yellow] w-[200px] h-[250px] top-0 left-[200px]"></div>
            <div className="absolute border border-[yellow] w-[200px] h-[250px] top-0 left-[400px]"></div>
          </div>

        </div>
      </section>
      <Map />
    </MainLayout>
  )
}
export default Home