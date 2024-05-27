import Image from "next/image"
import Link from "next/link"
import axios from "axios";

const getCategories = async () => {
    try {
        const categories = await axios.get('http://localhost:8000/api/v1/categories/all');
        return categories.data;

    } catch (error) {
        console.log(error);

    }
}

const Categories = async () => {
    const categories = await getCategories();
    console.log(categories);
    return (
        <div className="">
            <h1 className="my-[50px] mx-0 text-[30px] font-bold text-foreground">Popular Categories</h1>
            <div className="flex flex-wrap justify-between gap-[20px]">
                {categories.length > 0 && categories.map((category: any) => (
                    <Link
                        key={category.id}
                        href={`/blog?cat=${category.name}`}
                        className="flex items-center gap-[10px] capitalize w-[100%] h-[80px] justify-center rounded-[10px] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] bg-[#57c4ff31]">
                        <Image
                            src={'/images/p1.webp'}
                            alt={`category ${category.name}`}
                            width={0}
                            height={0}
                            className="rounded-[50%] w-[32px] h-[32px]"
                        />
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Categories