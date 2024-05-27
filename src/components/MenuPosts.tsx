import Image from "next/image"
import Link from "next/link"

const MenuPosts = () => {
    return (
        <div className="flex flex-col gap-[35px] mt-[35px] mb-[60px]">
            <Link href={'/'} className="flex items-center gap-[20px]">
                <div className="flex-1 relative aspect-[1/1]">
                    <Image src={'/images/p1.webp'} alt='image' fill className="rounded-[50%] border-[3px] border-white object-cover" />
                </div>
                <div className="flex-[4_1_0%] flex flex-col gap-[5px]">
                    <span className="py-[3px] px-[8px] rounded-[10px] text-[12px] text-white bg-[#ff7857] w-max">Travel</span>
                    <h3 className="text-[18px] font-[500] text-softTextColor">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <div className="text-[12px]">
                        <span>Jhon Doe</span>
                        <span className="text-[gray]"> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href={'/'} className="flex items-center gap-[20px]">
                <div className="flex-1 relative aspect-[1/1]">
                    <Image src={'/images/p1.webp'} alt='image' fill className="rounded-[50%] border-[3px] border-white object-cover" />
                </div>
                <div className="flex-[4_1_0%] flex flex-col gap-[5px]">
                    <span className="py-[3px] px-[8px] rounded-[10px] text-[12px] text-white bg-[#ff7857] w-max">Travel</span>
                    <h3 className="text-[18px] font-[500] text-softTextColor">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <div className="text-[12px]">
                        <span>Jhon Doe</span>
                        <span className="text-[gray]"> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href={'/'} className="flex items-center gap-[20px]">
                <div className="flex-1 relative aspect-[1/1]">
                    <Image src={'/images/p1.webp'} alt='image' fill className="rounded-[50%] border-[3px] border-white object-cover" />
                </div>
                <div className="flex-[4_1_0%] flex flex-col gap-[5px]">
                    <span className="py-[3px] px-[8px] rounded-[10px] text-[12px] text-white bg-[#ff7857] w-max">Travel</span>
                    <h3 className="text-[18px] font-[500] text-softTextColor">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <div className="text-[12px]">
                        <span>Jhon Doe</span>
                        <span className="text-[gray]"> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href={'/'} className="flex items-center gap-[20px]">
                <div className="flex-1 relative aspect-[1/1]">
                    <Image src={'/images/p1.webp'} alt='image' fill className="rounded-[50%] border-[3px] border-white object-cover" />
                </div>
                <div className="flex-[4_1_0%] flex flex-col gap-[5px]">
                    <span className="py-[3px] px-[8px] rounded-[10px] text-[12px] text-white bg-[#ff7857] w-max">Travel</span>
                    <h3 className="text-[18px] font-[500] text-softTextColor">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <div className="text-[12px]">
                        <span>Jhon Doe</span>
                        <span className="text-[gray]"> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default MenuPosts