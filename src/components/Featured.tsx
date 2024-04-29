import Image from "next/image"

const Featured = () => {
    return (
        <div className="mt-[30px]">
            <h1 className="text-[96px]">
                <b>Hey, Turismaya here!</b> Discover the wonder of Yucatán.
            </h1>
            <div className="mt-[60px] flex items-center gap-[50px]">
                <div className="flex-1 h-[500px] relative">
                    <Image src={'/images/p1.webp'} alt='image' fill className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col gap-[20px]">
                    <h1 className="text-[40px] font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className="text-[20px] font-[300] text-softTextColor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, omnis! Velit aspernatur fugiat officiis dignissimos maxime rerum deserunt adipisci expedita dicta, eum ab, ullam blanditiis consectetur esse autem quo doloribus!
                        Alias iusto magni ratione dicta facilis, quo laboriosam vel corrupti veritatis sit porro ea itaque nihil dignissimos quasi, dolorum, dolores molestiae velit! Facere consequatur nostrum molestiae architecto optio voluptatibus ea!</p>
                    <button className="py-[16px] px-[20px] border-none rounded-[5px] w-max bg-foreground text-background">Read more</button>
                </div>
            </div>
        </div>
    )
}
export default Featured