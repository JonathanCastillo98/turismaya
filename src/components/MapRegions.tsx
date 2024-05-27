"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import CustomRegionList from "./CustomRegionList";
import axios from "axios";

const MapRegions = () => {

    const [selectedRegion, setSelectedRegion] = useState<any>(null);
    const [hoverRegion, setHoverRegion] = useState<string | null>("");
    const [mounted, setMounted] = useState<boolean>(false);
    const [btnColor, setBtnColor] = useState<string>("");
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const [regions, setRegions] = useState<any[]>([]);



    const { theme } = useTheme();
    const dark = theme === "dark";

    const handleClick = (region: any) => {
        setSelectedRegion(region);
    };

    const fetchRegions = async () => {
        try {
            const regions = await axios.get("http://localhost:8000/api/v1/regions/all");
            setRegions(regions.data);
            setSelectedRegion(regions.data[0]);
            setBtnColor(regions.data[0].color);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setMounted(true);
        const isLargeScreen = window.matchMedia("(min-width: 768px)").matches;
        setIsLargeScreen(isLargeScreen);
        fetchRegions();
    }, []);

    if (!mounted) return null;

    return (

        <div className="w-full h-full">
            <section className="w-[90%] max-w-8xl h-[calc(100vh-70px)] mx-auto flex flex-col justify-center items-center lg:flex-row">
                <h2 className="font-bold tracking-tighter text-center my-8 text-3xl block lg:hidden">Conoce las regiones del Mayab</h2>
                <article className="flex-1 h-full flex-col justify-center items-center hidden lg:flex">
                    <h2 className="font-bold tracking-tighter text-center mb-8 text-4xl xl:text-4xl hidden lg:block">Conoce las regiones del Mayab</h2>
                    <CustomRegionList regions={regions} />
                    <CustomButton text={selectedRegion?.name} color={btnColor} regionId={selectedRegion?.id} />
                </article>
                <article className="flex-1 h-max w-full flex flex-col items-center lg:flex-[2_1_0%] lg:w-auto">
                    <div className="block lg:hidden">
                        <CustomRegionList regions={regions} />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1373 1080" preserveAspectRatio="xMinYMin meet" className="w-full lg:h-max">
                        <defs>
                            <clipPath id="clip-path">
                                <path fill="#ffffff" d="M113 0H1373v1080H113z" />
                            </clipPath>
                        </defs>
                        <g id="Region">
                            {regions.map((region, index) => (
                                <path
                                    key={index}
                                    fill={isLargeScreen ? selectedRegion.name === region.name ? dark ? region.color : region.color : hoverRegion === region.name ? region.color : dark ? "#f1f1f1" : "#f1f1f1" : region.color}
                                    fillRule="evenodd"
                                    stroke={"#232123"}
                                    strokeWidth={3.5}
                                    strokeOpacity={1}
                                    d={region.path}
                                    onClick={() => {
                                        handleClick(region);
                                        setBtnColor(region.color);
                                    }}
                                    onMouseEnter={() => setHoverRegion(region.name)}
                                    onMouseLeave={() => setHoverRegion("")}
                                    style={{
                                        cursor: "pointer"
                                    }}
                                />
                            ))}
                            {/* Labels */}
                        </g>
                        {/* RIVIERA */}
                        <g
                            className="hidden md:block"
                            data-slide="slider_riviera"
                            transform="translate(907.05 175.5)"
                        >
                            <text transform="translate(-538.394 64.032)">
                                <tspan x={0} y={0}>
                                    {"Riviera"}
                                </tspan>
                                <tspan x={-7.9} y={25}>
                                    {"Yucat\xE1n"}
                                </tspan>
                            </text>
                            <text className="st9 st12 st13" transform="translate(-464.875 64.032)" />
                        </g>
                        {/* CENOTES */}
                        <g
                            className="hidden md:block"
                            data-slide="slider_yucatan_cenotes"
                            transform="translate(907.05 181.5)"
                        >
                            <text transform="translate(-287.772 196.545)">
                                <tspan x={0} y={0}>
                                    {"Cenotes"}
                                </tspan>
                                <tspan x={-7.9} y={25}>
                                    {"y Haciendas"}
                                </tspan>
                            </text>
                            <text className="st9 st12 st13" transform="translate(-157.421 196.545)" />
                        </g>
                        {/* RUTA PUUC */}
                        <g
                            className="hidden md:block"
                            data-slide="slider_ruta_pucc"
                            transform="translate(1000.05 150.5)"
                        >
                            <text transform="translate(-358.686 546.495)">
                                <tspan x={0} y={0}>
                                    {"Ruta Puuc"}
                                </tspan>
                                <tspan x={-11.2} y={25}>
                                    {"y Aldeas Mayas"}
                                </tspan>
                            </text>
                            <text className="st9 st12 st13" transform="translate(-208.293 506.495)" />
                        </g>
                        {/* CAPITAL MAYA */}
                        <g
                            className="hidden md:block"
                            data-slide="slider_capital_maya"
                            transform="translate(907.05 181.5)"
                        >
                            <text transform="translate(144.588 226.496)">
                                <tspan x={0} y={0}>
                                    {"Capital del"}
                                </tspan>
                                <tspan x={-30.7} y={25}>
                                    {"Mundo Maya"}
                                </tspan>
                            </text>
                            <text className="st9 st12 st13" transform="translate(219.843 226.496)" />
                        </g>
                        {/* PUERTO MAYA */}
                        <g
                            className="hidden md:block"
                            data-slide="slider_puerto_maya"
                            transform="translate(907.05 181.5)"
                        >
                            <text transform="translate(231.005 -4.2)">
                                <tspan x={0} y={0}>
                                    {"Puerto "}
                                </tspan>
                                <tspan x={10.5} y={25}>
                                    {"Maya"}
                                </tspan>
                            </text>
                            <text className="st9 st12 st13" transform="translate(306.167 -4.2)" />
                        </g>
                        {/* MERIDA */}
                        <g className="hidden md:block" data-slide="slider_merida">
                            <text transform="translate(510 290)">{"M\xE9rida"}</text>
                        </g>
                    </svg>
                    <div className="block lg:hidden">
                        <CustomButton text={selectedRegion?.name} color={btnColor} regionId={selectedRegion?.id} />
                    </div>
                </article>
            </section>
        </div>
    );
};

export default MapRegions;
