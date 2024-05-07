"use client"
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import CountUp from 'react-countup'

const Landing = () => {
    const { theme } = useTheme();
    const dark = theme === "dark";
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null
    return (
        <>
            <section className="w-full h-max hidden bg-chichen bg-cover bg-no-repeat bg-top lg:flex lg:h-screen">

                <div className="absolute inset-0 bg-background/40"></div>

                <div className='relative w-[90%] max-w-8xl h-[70vh] max-h-[400px] flex items-center justify-center mx-auto mt-[120px] rounded-2xl'>
                    <div className="absolute h-full w-full bg-gradient-to-r from-black/60 via-black/20 to-transparent mix-blend-hard-light z-10 rounded-2xl"></div>
                    <video
                        autoPlay
                        muted
                        loop
                        className="absolute w-full h-full top-0 bottom-0 object-cover rounded-2xl"
                    >
                        <source src={"/videos/home3.mp4"} type="video/mp4" />
                    </video>

                    <div className="w-[50%] h-full z-40">
                        <div className="h-full pl-4 flex flex-col justify-center ml-auto pr-12 lg:pl-[10%]">
                            <h1 className="text-6xl  font-bold text-white mb-6 lg:text-7xl">Yucatán</h1>
                            <p className="text-sm text-white mb-6 lg:text-base">Un destino lleno de historia maya, playas hermosas y comida deliciosa. Con sus ruinas antiguas, aguas cristalinas y platillos como la cochinita pibil, ofrece una experiencia única llena de cultura y encanto.</p>
                        </div>
                    </div>

                    <div className="relative w-[50%] h-full flex flex-row items-center justify-center z-10 text-white">
                        <div className=" flex flex-row w-[80%] py-4 rounded-2xl bg-black/35">
                            <div className="flex-1 border-r border-softTextColor flex flex-col justify-center items-center h-max gap-[15px] p-2">
                                <h3 className="text-2xl font-bold">
                                    +<CountUp start={0} end={106} duration={5} />
                                </h3>
                                <span>Municipios</span>
                            </div>
                            <div className="flex-1 flex flex-col justify-center items-center h-max gap-[15px] p-2">
                                <h3 className="text-2xl font-bold">
                                    +<CountUp start={0} end={8} duration={5} />K
                                </h3>
                                <span>Cenotes</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="w-full h-max flex flex-col lg:hidden">
                <div className="absolute inset-0 bg-background/40"></div>
                <div className='relative w-[90%] max-w-8xl h-[700vh] max-h-[400px] flex flex-col items-center justify-between mx-auto mt-[70px] rounded-2xl'>
                    <div className="absolute h-full w-full bg-gradient-to-t from-black/100 via-black/10 to-transparent z-10 rounded-2xl"></div>
                    <Image src={"/images/Home_Mobile.webp"} alt="home_mobile" fill className="object-cover rounded-2xl absolute top-0 left-0" />
                    <h2 className="text-6xl font-bold text-white text-center mt-12 z-40">Yucatán</h2>
                    <p className="text-[14px] z-40 text-white font-semibold leading-4 rounded-2xl bg-black/25 py-8 px-4 text-center">Un destino lleno de historia maya, playas hermosas y comida deliciosa. Con sus vestigios antiguos, aguas cristalinas y platillos como la cochinita pibil, ofrece una experiencia única llena de cultura y encanto.</p>
                </div>
                <div className='relative w-full h-max mt-4'>
                    <div className="w-[90%] mx-auto h-full flex flex-row">
                        <div className="flex-1 border-r border-softTextColor flex flex-col justify-center items-center h-max gap-[15px] p-2">
                            <h3 className="text-2xl font-bold">
                                +<CountUp start={0} end={106} duration={5} />
                            </h3>
                            <span>Municipios</span>
                        </div>
                        <div className="flex-1 flex flex-col justify-center items-center h-max gap-[15px] p-2">
                            <h3 className="text-2xl font-bold">
                                +<CountUp start={0} end={8} duration={5} />K
                            </h3>
                            <span>Cenotes</span>
                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}
export default Landing