import Comments from "@/components/Comments"
import Menu from "@/components/Menu"
import axios from "axios"
import Image from "next/image"

const getPost = async (postId: string) => {
    try {
        const post = await axios(`http://localhost:8000/api/v1/posts/${postId}`);
        return post.data;
    } catch (error) {
        console.error(error);
    }
}

const SinglePage = async ({ params }: { params: { postId: string } }) => {
    const { postId } = params;
    const post = await getPost(postId);
    return (
        <div className="w-full">
            <div className="mt-[80px] w-[90%] max-w-8xl mx-auto">
                <div className="flex items-center gap-[50px]">
                    <div className="flex-1">
                        <h1 className="text-[64px] mb-[50px] font-bold">{post.title}</h1>
                        <div className="flex items-center gap-[20px]">
                            {
                                post?.user?.image && (
                                    <div className=" w-[50px] h-[50px] relative">
                                        <Image src={'/images/p1.webp'} alt='image' fill className="object-cover rounded-[50%]" />
                                    </div>
                                )
                            }
                            <div className="flex flex-col gap-[5px] text-softTextColor">
                                <span className="text-[20px] font-[500]">{post?.user?.username}</span>
                                <span>{post.createdAt.substring(0, 10)}</span>
                            </div>
                        </div>
                    </div>
                    {
                        post?.image && (
                            <div className="flex-1 h-[350px] relative">
                                <Image src={'/images/p1.webp'} alt='image' fill className="object-cover" />
                            </div>
                        )
                    }
                </div>
                <div className="flex gap-[50px]">
                    <div className="flex flex-col flex-[5_1_0%] mt-[60px]">
                        <div dangerouslySetInnerHTML={{ __html: post?.description }} />
                        <div>
                            <Comments postId={postId} />
                        </div>
                    </div>
                    <Menu />
                </div>
            </div>
        </div>
    )
}
export default SinglePage