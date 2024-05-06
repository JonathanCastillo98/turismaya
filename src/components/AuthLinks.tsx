"use client"

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { IoMdClose } from "react-icons/io";
import { FaHome, FaPen } from "react-icons/fa";
import { RiContactsBook3Fill, RiLogoutBoxFill } from "react-icons/ri";
import { BiLogoBlogger } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";

const AuthLinks = () => {
    const status = "authenticated";
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            {status !== "authenticated" ? (
                <Link className="hidden md:block" href={'/login'}>Iniciar sesión</Link>
            ) : (
                <>
                    <Link className="hidden md:block" href={'/write'}>Crear</Link>
                    <span className="cursor-pointer hidden md:block">Cerrar sesión</span>
                </>
            )}
            <div className="w-[20px] h-[16px] flex-col justify-between cursor-pointer flex md:hidden" onClick={() => setOpen(!open)}>
                <div className="w-[100%] h-[2px] bg-foreground"></div>
                <div className="w-[100%] h-[2px] bg-foreground"></div>
                <div className="w-[100%] h-[2px] bg-foreground"></div>
            </div>
            {
                open && (
                    <div className="absolute top-0 left-0 bg-background h-screen w-[100%] flex flex-col text-[36px] z-50 md:hidden">
                        <div className="w-[90%] mx-auto h-[70px] flex justify-between items-center">
                            <div className="text-center text-[24px] font-bold xl:text-[32px] md:text-[24px]">Turismayab</div>
                            <div className="flex items-center h-full gap-[15px]">
                                <ThemeToggle />
                                <IoMdClose className="cursor-pointer text-[24px]" onClick={() => setOpen(!open)} />
                            </div>
                        </div>
                        <div className="w-[90%] mx-auto h-[calc(100vh-70px)]">
                            {
                                status === "authenticated" && (
                                    <div className="w-full h-[150px] flex justify-center items-center">
                                        <div className="w-[150px] h-[150px] rounded-[50%] border-4 border-foreground text-[12px] flex justify-center items-center">Photohere</div>
                                    </div>
                                )
                            }
                            <div className="w-full h-full bg-softBg rounded-xl flex flex-col justify-start items-center mt-8  text-[20px] font-semibold gap-[20px]">
                                <Link
                                    href={'/'}
                                    className="w-max flex items-center gap-[15px]">
                                    <FaHome />
                                    Inicio
                                </Link>
                                <Link
                                    href={'/contact'}
                                    className="w-max flex items-center gap-[15px]">
                                    <RiContactsBook3Fill />
                                    Contacto
                                </Link>
                                <Link
                                    href={'/about-us'}
                                    className="w-max flex items-center gap-[15px]">
                                    <FaPeopleGroup />
                                    Conocenos
                                </Link>
                                <Link
                                    href={'/blog'}
                                    className="w-max flex items-center gap-[15px]">
                                    <BiLogoBlogger />
                                    Blog
                                </Link>
                                {
                                    status === "authenticated" ? (
                                        <>
                                            <Link
                                                href={'/write'}
                                                className="w-max flex items-center gap-[15px]">
                                                <FaPen />
                                                Crear
                                            </Link>
                                            <button className="py-[16px] px-[20px] border-none rounded-[5px] w-[90%] bg-foreground text-background font-bold flex justify-center items-center gap-[15px]">
                                                <RiLogoutBoxFill />
                                                Cerrar sesión
                                            </button>
                                        </>
                                    ) : (
                                        <button className="py-[16px] px-[20px] border-none rounded-[5px] w-[90%] bg-foreground text-background font-bold flex justify-center items-center gap-[15px]">
                                            <RiLogoutBoxFill />
                                            Iniciar sesión
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default AuthLinks