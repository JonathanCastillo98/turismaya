import Image from "next/image"
import Pagination from "./Pagination"
import Card from "./Card"

const CardList = () => {
    return (
        <div className="flex flex-col flex-[5_1_0%]">
            <h1 className="my-[50px] mx-0 text-[30px] font-bold text-foreground">Recent Posts</h1>
            <div className="posts">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Pagination />
        </div>
    )
}
export default CardList