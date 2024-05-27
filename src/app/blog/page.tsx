import CardList from "@/components/CardList"
import Categories from "@/components/Categories"
import Featured from "@/components/Featured"
import Menu from "@/components/Menu"

const Blog = ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1;
    const category = searchParams.category || "";

    return (
        <section className="w-full ">
            <section className="w-[90%] max-w-8xl mx-auto mt-[70px]">
                <Featured />
                {category && <h1 className="bg-foreground py-[5px] px-[10px] text-background text-center mt-[30px] capitalize">{category}</h1>}
                <Categories />
                <div className="flex gap-[50px]">
                    <CardList page={page} category={category} />
                    <Menu />
                </div>
            </section>
        </section>
    )
}
export default Blog