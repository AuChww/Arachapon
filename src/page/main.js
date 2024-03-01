import React from 'react';
import "./main.css";
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";
import pink2 from "./image/pink2.jpg"

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);


    return (
        <section class="">
            {id === 1 ?
                <div class="">
                    <Page1 />
                </div>
                : null}
            {id === 2 ?
                <Page3 />
                : null}
            {id === 3 ?
                <Page3 />
                : null}
            {id === 4 ?
                <Page3 />
                : null}
            {id === 5 ?
                <Page2 />
                : null}
        </section>
    );
}

export default function Main() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            {[1, 2, 3, 4, 5].map((image) => (
                <Image id={image} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
        </>
    );
}