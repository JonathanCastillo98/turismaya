"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import AuthLinks from "./AuthLinks"

const Navbar = () => {
    const [isScrolledDown, setIsScrolledDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY; // Get current scroll position
            setIsScrolledDown(scrollY > 0); // Update state based on scroll position
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 h-[70px] w-screen z-50 transition duration-300 ease-in-out ${isScrolledDown ? 'bg-background' : 'bg-transparent'}`}>
            <div className="w-[90%] max-w-8xl mx-auto flex items-center justify-between h-full">
                <div className="text-center text-[36px] font-bold xl:text-[32px] md:text-[24px]">Turismayab</div>
                <div className="flex gap-[20px] items-center xl:text-[18px] xl:gap-[15px]">
                    <ThemeToggle />
                    <Link className="hidden sm:flex" href='/'>Inicio</Link>
                    <Link className="hidden sm:flex" href='/'>Contacto</Link>
                    <Link className="hidden sm:flex" href='/'>Conocenos</Link>
                    <Link className="hidden sm:flex" href='/blog'>Blog</Link>
                    <AuthLinks />
                </div>
            </div>
        </div>
    )
}

export default Navbar
