import { useState, useEffect } from "react";

export const SpinBarTextAnimation = ({speed = 120}:{speed?: number}) => {
    const spinners = ['|', '/','-', '\\'];

    const [current, setCurrent] = useState(0);
    let i = 0;''
    
    useEffect(() => {
        const interval = setInterval(() => {
            i = current;
            i++;
            if (i === spinners.length) {
                i = 0;
            }
            setCurrent(i);
        }, speed);
        return () => clearInterval(interval);
    }, [current, speed]);

    return (
        <span className="font-mono">
            {spinners[current]}
        </span>
    );

}