import Pagination from "./Pagination"
import Card from "./Card"
import axios from "axios";

type Props = {
    page: number;
    category: string;
};


const getPosts = async (page: number, category: string) => {
    try {
        const posts = await axios.get(`http://localhost:8000/api/v1/posts/all?page=${page}&category=${category}`);
        return posts.data;

    } catch (error) {
        console.error(error);
        return { posts: [], count: 0 };
    }
}
const CardList = async ({ page, category }: Props) => {
    const { posts, count } = await getPosts(page, category);
    const POSTS_PER_PAGE = 2;
    const hasPrev = POSTS_PER_PAGE * (page - 1) > 0;
    const hasNext = POSTS_PER_PAGE * (page - 1) + POSTS_PER_PAGE < count;
    return (
        <div className="flex flex-col flex-[5_1_0%]">
            <h1 className="my-[50px] mx-0 text-[30px] font-bold text-foreground">Recent Posts</h1>
            <div className="posts">
                {
                    posts && posts.map((post: any) => (
                        <Card key={post.id} post={post} />
                    ))
                }
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
    )
}
export default CardList