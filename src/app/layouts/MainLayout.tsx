import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Props = {
    children: React.ReactNode;
}
const MainLayout = ({ children }: Props) => {
    return (
        <html lang="en">
            <body>
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}

export default MainLayout