"use client"
import { useRouter } from "next/navigation"

type Props = {
    page: number;
    hasPrev: boolean;
    hasNext: boolean;
}
const Pagination = ({ page, hasNext, hasPrev }: Props) => {
    const router = useRouter();
    return (
        <div className="flex justify-between">
            <button
                disabled={!hasPrev}
                className="w-[100px] border-none p-[16px] bg-[crimson] text-white cursor-pointer font-semibold disabled:text-[rgba(220,20,60,0.473)] disabled:cursor-not-allowed disabled:text-white"
                onClick={() => router.push(`?page=${page - 1}`)}>Anterior</button>
            <button
                disabled={!hasNext}
                className="w-[100px] border-none p-[16px] bg-[crimson] text-white cursor-pointer font-semibold disabled:text-[rgba(220,20,60,0.473)] disabled:cursor-not-allowed disabled:text-white"
                onClick={() => router.push(`?page=${page + 1}`)}>Siguiente</button>
        </div>
    )
}
export default Pagination