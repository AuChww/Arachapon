import React from 'react';
import "./main.css";
import Page1 from './component/page1';
import Page2 from './component/page2';
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
        <section>

            {id === 1 ?
                <div class="">
                    <Page1 />
                </div>
                : null}
            {id === 2 ?
                <Page2 />
                : null}
            {id === 3 ?
                <div></div>
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
            {[1, 2, 3].map((image) => (
                <Image id={image} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
        </>
    );
}