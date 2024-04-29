"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

const ThemeToggle = () => {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    })

    const dark = theme === "dark"
    return (
        <div
            className="w-[40px] h-[20px] rounded-[50px] cursor-pointer flex items-center justify-between relative"
            onClick={() => setTheme(dark ? "light" : "dark")}
            style={
                theme === "dark"
                    ? { background: "#ddd" }
                    : { background: "#0f172a" }
            }
        >
            <Image src="/moon.png" alt="moon" width={14} height={14} />
            <div
                className="w-[15px] h-[15px] rounded-[50%] absolute"
                style={
                    theme === "dark"
                        ? { left: "1px", background: "#0f172a" }
                        : { right: "1px", background: "#ddd" }
                }
            ></div>
            <Image src="/sun.png" alt="sun" width={14} height={14} />
        </div>
    )
}
export default ThemeToggle