"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

interface ImageLightboxProps {
    image: string | null;
    onClose: () => void;
}

export const ImageLightbox = (props: ImageLightboxProps) => {

//block page scroll and unblock it when the lightbox is closed
React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
        document.body.style.overflow = "auto";
    }
}, [])

React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") props.onClose();
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
}, [])


return <div className="bg-black/20 overflow-y-auto overflow-x-hidden backdrop-blur-lg fixed top-0 left-0 w-full h-full flex-col items-start justify-center z-50 px-[4vw]">
<div className="flex items-center justify-end sticky  top-[2vw] right-0"><span className="inline-flex  cursor-pointer relative right-[-2vw]  items-center gap-[0.2vw] bg-black p-[1vw] border border-white/20 "  onClick={props.onClose}>
    ESC <XMarkIcon className="w-[4vw] lg:w-[1.5vw] text-white"/>
</span></div>
<img src={props.image || ""} alt={""} className="border border-white/20 rounded-[1.5vw]" />

</div>

}