import { FaArrowRight } from "react-icons/fa"

const Landing = () => {
    return (
        <section className="w-full h-screen flex bg-chichen bg-cover bg-no-repeat  bg-top">

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
                        <h1 className="text-6xl  font-bold text-white mb-6 lg:text-8xl">Yucatán</h1>
                        <p className="text-sm text-white mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ea aspernatur ullam repudiandae asperiores cupiditate nam enim incidunt quidem praesentium accusamus quod, magnam sequi provident ipsa, mollitia cum, ratione laborum.</p>
                        <button className="w-max flex flex-row outline-none rounded-md px-[10px] py-[5px] bg-white border-2 border-white text-black font-bold gap-2 items-center justify-center text-sm hover:bg-transparent hover:text-white hover:border-white transition duration-300 ease-in-out">
                            <span className="align-middle">Conócelo</span>
                            <FaArrowRight className="text-sm align-middle" />
                        </button>
                    </div>
                </div>

                <div className="relative w-[50%] h-full flex flex-col justify-center z-10">
                    {/* TODO: Make the stats here */}
                </div>

            </div>
        </section>
    )
}
export default Landing