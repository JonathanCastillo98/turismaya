import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="w-full">
            <div className=" w-[90%] mx-auto max-w-8xl flex flex-col gap-[50px] items-center justify-between mt-[50px] py-[20px] px-0 text-softTextColor md:flex-row md:gap-0">
                <div className="flex flex-1 flex-col gap-[14px]">
                    <div className="flex items-center gap-[10px]">
                        <Image src={'/images/p1.webp'} alt='Turismayab blog' width={50} height={50} />
                        <h1 className=" font-bold text-[24px]">Turismayab Blog</h1>
                    </div>
                    <p className="font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque obcaecati doloribus quidem at? Hic velit quibusdam reiciendis odio laboriosam rem ea praesentium tempora labore totam, quis alias voluptate corrupti error!</p>
                    <div className="mt-[10px] flex gap-[10px]">
                        <Image src={'/images/p1.webp'} alt='Turismayab Facebook' width={18} height={18} />
                        <Image src={'/images/p1.webp'} alt='Turismayab Instagram' width={18} height={18} />
                    </div>
                </div>
                <div className="flex flex-1 justify-between w-[100%] gap-[50px] lg:gap-[100px] md:justify-end md:w-auto text-[14px] sm:text-[16px]">
                    <div className="flex flex-col gap-[10px] font-[300]">
                        <span className="font-bold">Links</span>
                        <Link href={'/'}>Inicio</Link>
                        <Link href={'/'}>Contacto</Link>
                        <Link href={'/'}>Conocenos</Link>
                        <Link href={'/blog'}>Blog</Link>
                    </div>
                    <div className="flex flex-col gap-[10px] font-[300]">
                        <span className="font-bold">Tags</span>
                        <Link href={'/'}>Style</Link>
                        <Link href={'/'}>Fashion</Link>
                        <Link href={'/'}>Coding</Link>
                        <Link href={'/'}>Travel</Link>
                    </div>
                    <div className="flex flex-col gap-[10px] font-[300]">
                        <span className="font-bold">Social</span>
                        <Link href={'/'}>Facebook</Link>
                        <Link href={'/'}>Instagram</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer