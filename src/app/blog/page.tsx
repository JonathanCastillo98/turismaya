import Categories from "@/components/Categories"
import Featured from "@/components/Featured"

const Blog = () => {
    return (
        <section className="w-full ">
            <section className="w-[90%] max-w-8xl mx-auto mt-[70px]">
                <Featured />
                <Categories />
            </section>
        </section>
    )
}
export default Blog