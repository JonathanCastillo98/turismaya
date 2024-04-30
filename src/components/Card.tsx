import Image from "next/image"
import Link from "next/link"

const Card = () => {
    return (
        <div className="mb-[50px] flex items-center gap-[50px]">
            <div className="flex flex-1 h-[350px] relative">
                <Image
                    src={"/images/p1.webp"}
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-1 flex-col gap-[20px]">
                <div className="textDetail">
                    <span className="text-[gray]">11.02.2023 - </span>
                    <span className="text-[crimson] font-[500]">Culture</span>
                </div>
                <Link href='/'>
                    <h1 className="text-[32px] font-bold text-foreground">Lorem ipsum dolor sit amet</h1>
                </Link>
                <p className="text-[18px] font-[300] text-softTextColor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellat eligendi minus animi eveniet voluptatem, labore assumenda mollitia dolores quidem.</p>
                <Link href='/' className="border-b border-softTextColor w-max  text-softTextColor font-bold">Read more</Link>
            </div>
        </div>
    )
}
export default Card