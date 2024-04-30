import CardList from "@/components/CardList"
import Categories from "@/components/Categories"
import Featured from "@/components/Featured"
import Menu from "@/components/Menu"

const Blog = () => {
    return (
        <section className="w-full ">
            <section className="w-[90%] max-w-8xl mx-auto mt-[70px]">
                <Featured />
                <Categories />
                <div className="flex gap-[50px]">
                    <CardList />
                    <Menu />
                </div>
            </section>
        </section>
    )
}
export default Blog