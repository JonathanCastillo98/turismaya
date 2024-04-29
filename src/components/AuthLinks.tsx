"use client"

import Link from "next/link";
import { useState } from "react";

const AuthLinks = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            {!isAuthenticated ? (
                <Link className="hidden" href={'/login'}>Iniciar sesión</Link>
            ) : (
                <>
                    <Link href={'/write'}>Crear</Link>
                    <span className="cursor-pointer">Cerrar sesión</span>
                </>
            )}
            <div className="w-[20px] h-[16px] flex-col justify-between cursor-pointer flex sm:hidden" onClick={() => setOpen(!open)}>
                <div className="w-[100%] h-[2px] bg-foreground"></div>
                <div className="w-[100%] h-[2px] bg-foreground"></div>
                <div className="w-[100%] h-[2px] bg-foreground"></div>
            </div>
            {
                open && (
                    <div className="absolute top-[70px] left-0 bg-background h-[calc(100vh-70px)] w-[100%] flex flex-col items-center justify-center gap-[50px] text-[36px] z-50">
                        <Link href='/'>Inicio</Link>
                        <Link href='/'>Contacto</Link>
                        <Link href='/'>Conocenos</Link>
                        {!isAuthenticated ? (
                            <Link href={'/login'}>Iniciar sesión</Link>
                        ) : (
                            <>
                                <Link href={'/write'}>Crear</Link>
                                <span className="cursor-pointer">Cerrar sesión</span>
                            </>
                        )}
                    </div>
                )
            }
        </>
    )
}
export default AuthLinks