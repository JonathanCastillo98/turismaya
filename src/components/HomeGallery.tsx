'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
    "p1.webp",
    "p1.webp",
    "p1.webp",
    "p1.webp",
    "p1.webp",
    "p1.webp",
    "p1.webp",
    "p1.webp",
    "p1.webp",
    "p1.webp",
    "p1.webp",
    "p1.webp",

]

export default function HomeGallery() {

    const gallery = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start']
    })
    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

    useEffect(() => {
        const lenis = new Lenis()

        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight })
        }

        window.addEventListener("resize", resize)
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])

    return (
        <>
            <div ref={gallery} className='h-[175vh] bg-background flex flex-row gap-[2vw] p-[2vw] border-box overflow-hidden'>
                <Column images={[images[0], images[1], images[2]]} y={y} top={"-45%"} />
                <Column images={[images[3], images[4], images[5]]} y={y2} top={"-95%"} />
                <Column images={[images[6], images[7], images[8]]} y={y3} top={"-45%"} />
                <Column images={[images[9], images[10], images[11]]} y={y4} top={"-75%"} />
            </div>
        </>
    )
}

const Column = ({ images, y, top }) => {
    return (
        <motion.div
            className="relative w-[25%] h-full flex flex-col gap-[2vw]"
            style={{ y, top }}
        >
            {
                images.map((src, i) => {
                    return <div key={i} className="w-full h-full relative rounded-[1vw] overflow-hidden">
                        <Image
                            src={`/images/${src}`}
                            alt='image'
                            fill
                            className=' object-cover'
                            loading='lazy'
                        />
                    </div>
                })
            }
        </motion.div>
    )
}