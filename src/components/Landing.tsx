"use client"
import { useTheme } from "next-themes";
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
            <section className="w-full h-screen hidden bg-chichen bg-cover bg-no-repeat bg-top md:flex">

                <div className="absolute inset-0 bg-background/40"></div>

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

                    <div className="w-[50%] h-full z-40">
                        <div className="h-full pl-4 flex flex-col justify-center ml-auto pr-12 lg:pl-[10%]">
                            <h1 className="text-6xl  font-bold text-white mb-6 lg:text-7xl">En el sureste de México</h1>
                            <p className="text-sm text-white mb-6 lg:text-base"><b>Yucatán</b>, es un destino lleno de historia maya, playas hermosas y comida deliciosa. Con sus ruinas antiguas, aguas cristalinas y platillos como la cochinita pibil, ofrece una experiencia única llena de cultura y encanto.</p>
                        </div>
                    </div>

                    <div className="relative w-[50%] h-full flex flex-col justify-center z-10">
                        {/* TODO: Make the stats here */}
                    </div>

                </div>
            </section>
            <section className="w-full h-screen flex flex-col md:hidden bg-background">
                <div className={`relative w-full h-[70%] ${dark ? 'bg-home_mobile' : 'bg-ch'} bg-cover bg-no-repeat bg-top `}>
                    <div className="absolute h-full w-full bg-gradient-to-t from-background/100 via-background/10 to-transparent  z-10"></div>
                    <div className="w-[90%] mx-auto h-full flex flex-col mt-[70px]">
                        <h2 className="text-4xl font-bold text-foreground text-left mt-4">En el sureste de México</h2>
                        <h2 className="text-7xl font-bold text-foreground text-center mt-14">Yucatán</h2>
                        <p className="text-[14px] text-black z-40 dark:text-white mb-6 font-semibold leading-4 rounded-lg p-4 bg-white/25 dark:bg-black/25 mt-16 text-center"><b>Yucatán</b>, es un destino lleno de historia maya, playas hermosas y comida deliciosa. Con sus ruinas antiguas, aguas cristalinas y platillos como la cochinita pibil, ofrece una experiencia única llena de cultura y encanto.</p>
                    </div>
                </div>
                <div className='relative w-full h-[30%]'>
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