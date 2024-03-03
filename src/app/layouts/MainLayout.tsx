import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Props = {
    children: React.ReactNode;
}
const MainLayout = ({ children }: Props) => {
    return (
        <>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default MainLayout