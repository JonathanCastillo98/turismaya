"use client"
import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react";

type Props = {
    post: any;
}

const Card = ({ post }: Props) => {
    const plainTextDescription = useMemo(() => {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = post.description;
        tempElement.querySelectorAll('img').forEach(img => img.remove());
        return tempElement.textContent || tempElement.innerText || '';
    }, [post.description]);
    return (
        <div className="mb-[50px] flex items-center gap-[50px]">
            {
                post.image && (
                    <div className="hidden flex-1 h-[350px] relative xl:flex">
                        <Image
                            src={post.image}
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>
                )
            }
            <div className="flex flex-1 flex-col gap-[20px]">
                <div className="textDetail">
                    <span className="text-[gray]">{post.createdAt.substring(0, 10)} - </span>
                    {/* <span className="text-[crimson] font-[500] capitalize">{post.category.name}</span> */}
                </div>
                <Link href='/'>
                    <h1 className="text-[32px] font-bold text-foreground">{post.title}</h1>
                </Link>
                <p className="text-[18px] font-[300] text-softTextColor">{plainTextDescription.substring(0, 60)}</p>
                <Link href={`/posts/${post.id}`} className="border-b border-softTextColor w-max  text-softTextColor font-bold">Read more</Link>
            </div>
        </div>
    )
}
export default Card