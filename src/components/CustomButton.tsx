import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa"

type Props = {
    text: string;
    color: string;
    regionId: string;
}
const CustomButton = ({ text, color, regionId }: Props) => {
    const router = useRouter();
    return (
        <button
            className={`px-4 py-2 text-white flex flex-row justify-center items-center gap-2 outline-none font-bold border-2 border-background w-max rounded-sm transition duration-300 ease-in-out hover:bg-background hover:text-foreground hover:border-foreground`}
            style={{ backgroundColor: color }}
            onClick={() => router.push(`/regions/${regionId}`)}
        >
            <span className="align-middle">{text}</span>
            <FaArrowRight className="text-sm align-middle h-full" />
        </button>
    )
}
export default CustomButton