import Calendar from "@/components/Calendar"
import HomeGallery from "@/components/HomeGallery"
import Landing from "@/components/Landing"
import Map from "@/components/Map"
import Image from "next/image"

const Home = () => {
  return (
    <>
      <Landing />
      <Calendar />
      {/* <div className="text-center bg-[#53adad] py-8 text-white">
        <h1 className=" md:text-4xl  font-bold ">Traza tu ruta maya y viaja con <span>Turismaya</span></h1>
        <p className="font-semibold text-lg max-w-4xl mx-auto leading-5 mt-4">Descubre la belleza y autenticidad que cada pueblo de Yucatán tiene para ofrecerte. Desde su historia hasta los misterios mayas que se encuentran en ellos.</p>
      </div>  */}
      {/* <Map /> */}
      {/* <HomeGallery /> */}
    </>
  )
}
export default Home