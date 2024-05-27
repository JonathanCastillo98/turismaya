"use client"
import axios from "axios";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {
    regionId: string
}

const Map = ({ regionId }: Props) => {
    const [selectedTown, setSelectedTown] = useState<any>(null);
    const [hoverTown, setHoverTown] = useState<string>("");
    const [mounted, setMounted] = useState(false);
    const [towns, setTowns] = useState<any[]>([]);

    const { theme } = useTheme();
    const dark = theme === "dark";

    const fetchTowns = async () => {
        try {
            const towns = await axios.get(`http://localhost:8000/api/v1/towns/getTownsByRegionId/${regionId}`);
            setTowns(towns.data);
            setSelectedTown(towns.data[0]);
        } catch (error) {
            console.error(error);
        }
    }

    const handleClick = (town: any) => {
        setSelectedTown(town);
    };

    useEffect(() => {
        setMounted(true);
        fetchTowns();
    }, []);

    if (!mounted) return null

    return (
        <div className="w-full h-full mt-[90px]">
            <section className="w-[90%] max-w-8xl mx-auto flex flex-col justify-center items-center h-max lg:flex-row">
                <h2 className="font-bold tracking-tighter text-center text-4xl block lg:hidden">{selectedTown && (hoverTown || selectedTown.name)}</h2>
                <article className="flex-1 h-full hidden flex-col justify-center items-center lg:flex">
                    <h2 className="text-5xl font-bold tracking-tighter text-center">{selectedTown && (hoverTown || selectedTown.name)}</h2>
                    <button className="px-4 py-2 bg-foreground text-background flex flex-row justify-center items-center gap-2 outline-none font-bold border-2 border-background w-max rounded-sm transition duration-300 ease-in-out hover:bg-background hover:text-foreground hover:border-foreground">
                        <span className="align-middle">Conócelo</span>
                        <FaArrowRight className="text-sm align-middle h-full" />
                    </button>
                </article>
                <article className="flex-1 h-max w-full flex flex-col items-center lg:flex-[2_1_0%] lg:w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox={selectedTown && selectedTown.region.viewBox} preserveAspectRatio="xMinYMin meet" className="w-full lg:h-max">
                        <g key="square"
                            clipPath="url(#a)"
                            style={{
                                visibility: "visible",
                            }}
                            transform="matrix(.04794 0 0 .04794 22710.005 5472.519)"
                        >
                            <path
                                d="M-942472.56-471233.66H942477.8h-5.24V471233.66H-942477.8h5.24V-470191.7"
                                style={{
                                    fill: "transparent",
                                    fillOpacity: 1,
                                    fillRule: "evenodd",
                                    stroke: "#a1c3cc",
                                    strokeWidth: 1.1883862,
                                    strokeOpacity: 1,
                                }}
                            />
                        </g>
                        <g
                            key="towns"
                            clipPath="url(#a)"
                            style={{
                                visibility: "visible",
                            }}
                            transform={selectedTown && selectedTown.region.transform}

                        >
                            {towns.length > 0 && towns.map((town, index) => (
                                <path
                                    key={index}
                                    d={town.path}
                                    style={{
                                        fill: (selectedTown && selectedTown.name === town.name) ? town.color : hoverTown === town.name ? town.color : "#f0f0f0",
                                        fillOpacity: 1,
                                        fillRule: "evenodd",
                                        stroke: dark ? "#232123" : "#000000",
                                        strokeWidth: 30,
                                        strokeOpacity: 1,
                                    }}
                                    onMouseEnter={() => setHoverTown(town.name)}
                                    onMouseLeave={() => setHoverTown("")}
                                    onClick={() => handleClick(town)}
                                    className={"cursor-pointer"}
                                />
                            ))}

                        </g>
                        <defs>
                            <clipPath id="a">
                                <path d="M-473424.45-113894.8h16023.344v12269.403h-16023.344z" />
                            </clipPath>
                            <clipPath id="b">
                                <path d="M-22698.121-5460.635h768.232v588.251h-768.232z" />
                            </clipPath>
                        </defs>
                    </svg>
                    <button className="px-4 py-2 bg-foreground text-background flex flex-row justify-center items-center gap-2 outline-none font-bold border-2 border-background w-max rounded-sm transition duration-300 ease-in-out hover:bg-background hover:text-foreground hover:border-foreground lg:hidden">
                        <span className="align-middle">Conócelo</span>
                        <FaArrowRight className="text-sm align-middle h-full" />
                    </button>
                </article>
            </section>
        </div>
    )

}
export default Map