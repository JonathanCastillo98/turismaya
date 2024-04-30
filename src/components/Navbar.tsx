import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import AuthLinks from "./AuthLinks"

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 h-[70px] w-screen z-50 bg-background">
            <div className="w-[90%] max-w-8xl mx-auto flex items-center justify-between h-full">
                <div className="text-center text-[36px] font-bold xl:text-[32px] md:text-[24px]">Turismaya</div>
                <div className="flex gap-[20px] items-center xl:text-[18px] xl:gap-[15px]">
                    <ThemeToggle />
                    <Link className="hidden sm:flex" href='/'>Inicio</Link>
                    <Link className="hidden sm:flex" href='/'>Contacto</Link>
                    <Link className="hidden sm:flex" href='/'>Conocenos</Link>
                    <Link className="hidden sm:flex" href='/blog'>Blog</Link>
                    <AuthLinks />
                </div>
            </div>
        </div>
    )
}
export default Navbar