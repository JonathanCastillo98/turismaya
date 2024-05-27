"use client"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

type Props = {
    postId: string;
}

const fetcher = async (url: string) => {
    const comments = await axios.get(url);
    const { data } = comments;
    if (data?.message) {
        const error = new Error(data.message);
        throw error;
    }
    return data;
};


const Comments = ({ postId }: Props) => {
    const [newCommentContent, setNewCommentContent] = useState<string>('');
    const status = "authenticated";
    const { data, mutate, isLoading } = useSWR(`http://localhost:8000/api/v1/comments/postOwner/${postId}`, fetcher);
    const createNewComment = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8000/api/v1/comments/create?postId=${postId}&userId=${"5dc57b4c-c11d-44ba-8240-44428b34f609"}`, { content: newCommentContent });
            mutate();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="mt-[50px]">
            <h1 className="text-[30px] font-bold text-softTextColor mb-[30px]">Comentarios</h1>
            {status === "authenticated" ? (
                <div className="flex items-center justify-between gap-[30px]">
                    <textarea placeholder="Escribe tu comentario..." className="w-full p-[20px]" onChange={(e) => setNewCommentContent(e.target.value)} />
                    <button className="py-[16px] px-[20px] bg-foreground text-background font-bold border-none rounded-[5px] cursor-pointer" onClick={createNewComment}>Enviar</button>
                </div>) : (
                <Link href={'/login'}>Iniciar sesión para comentar</Link>
            )}
            <div className="mt-[50px]">
                {isLoading ?
                    <p>Cargando...</p> :
                    data?.map((comment: any) => (
                        <div key={comment.id} className="mt-[50px]">
                            <div className="flex items-center gap-[20px] mb-[20px]">
                                <Image src={'/images/p1.webp'} alt='image' width={0} height={0} className="w-[50px] h-[50px] rounded-[50%] object-cover" />
                                <div className="flex flex-col gap-[5px] text-softTextColor">
                                    <span className="font-[500]">{comment.user.username}</span>
                                    <span className="text-[14px]">{comment.createdAt.substring(0, 10)}</span>
                                </div>
                            </div>
                            <p className="text-[18px] font-[300]">{comment.content}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default Comments