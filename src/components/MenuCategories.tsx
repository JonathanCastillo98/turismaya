import Link from "next/link"

const MenuCategories = () => {
    return (
        <div className="mt-[35px] mb-[60px] flex flex-wrap gap-[20px]">
            <Link href={'/blog?category=style'} className="py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#57c4ff31]">
                Style
            </Link>
            <Link href={'/blog?category=fashion'} className="py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#da85c731]">
                Fashion
            </Link>
            <Link href={'/blog?category=food'} className="py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#7fb88133]">
                Food
            </Link>
            <Link href={'/blog?category=travel'} className="py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#ff795736]">
                Travel
            </Link>
            <Link href={'/blog?category=culture'} className="py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#ffb04f45]">
                Culture
            </Link>
            <Link href={'/blog?category=coding'} className="py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#5e4fff31]">
                Coding
            </Link>
        </div>
    )
}
export default MenuCategories