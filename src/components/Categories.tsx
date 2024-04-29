import Image from "next/image"
import Link from "next/link"

const Categories = () => {
    return (
        <div className="">
            <h1 className="my-[50px] mx-0">Popular Categories</h1>
            <div className="flex flex-wrap justify-between gap-[20px]">
                <Link href='/blog?cat=style' className="flex items-center gap-[10px] capitalize w-[100%] h-[80px] justify-center rounded-[10px] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] bg-[#57c4ff31]">
                    <Image
                        src={'/images/p1.webp'}
                        alt=""
                        width={32}
                        height={32}
                        className="rounded-[50%]"
                    />
                    style
                </Link>
                <Link href='/blog?cat=fashion' className="flex items-center gap-[10px] capitalize w-[100%] h-[80px] justify-center rounded-[10px] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] bg-[#da85c731]">
                    <Image
                        src={'/images/p1.webp'}
                        alt=""
                        width={32}
                        height={32}
                        className="rounded-[50%]"
                    />
                    fashion
                </Link>
                <Link href='/blog?cat=food' className="flex items-center gap-[10px] capitalize w-[100%] h-[80px] justify-center rounded-[10px] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] bg-[#7fb88133]">
                    <Image
                        src={'/images/p1.webp'}
                        alt=""
                        width={32}
                        height={32}
                        className="rounded-[50%]"
                    />
                    food
                </Link>
                <Link href='/blog?cat=travel' className="flex items-center gap-[10px] capitalize w-[100%] h-[80px] justify-center rounded-[10px] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] bg-[#ff795736]">
                    <Image
                        src={'/images/p1.webp'}
                        alt=""
                        width={32}
                        height={32}
                        className="rounded-[50%]"
                    />
                    travel
                </Link>
                <Link href='/blog?cat=culture' className="flex items-center gap-[10px] capitalize w-[100%] h-[80px] justify-center rounded-[10px] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] bg-[#ffb04f45]">
                    <Image
                        src={'/images/p1.webp'}
                        alt=""
                        width={32}
                        height={32}
                        className="rounded-[50%]"
                    />
                    culture
                </Link>
                <Link href='/blog?cat=coding' className="flex items-center gap-[10px] capitalize w-[100%] h-[80px] justify-center rounded-[10px] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] bg-[#5e4fff31]">
                    <Image
                        src={'/images/p1.webp'}
                        alt=""
                        width={32}
                        height={32}
                        className="rounded-[50%]"
                    />
                    coding
                </Link>
            </div>
        </div>
    )
}
export default Categories