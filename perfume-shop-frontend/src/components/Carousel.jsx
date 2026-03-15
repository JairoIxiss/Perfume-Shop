import { useState } from "react";
import AboutUs from "./AboutUs";
import FrescosCard from "./FrescosCard";
import CitricosCard from "./CitricosCard";
import FrutalesCard from "./FrutalesCard";
import DulcesCard from "./DulcesCard";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const Carousel = () => {
    const [index, setIndex] = useState(0);

    const slides = [
        <AboutUs />,
        <FrescosCard />,
        <CitricosCard />,
        <FrutalesCard />,
        <DulcesCard />
    ];

    const next = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full overflow-hidden">
            <button
                onClick={prev}
                className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-md text-gray-800 p-3 rounded-3xl hover:bg-white/40 shadow-lg"
            >
                <IconChevronLeft className="w-7 h-7" />
            </button>
            <button
                onClick={next}
                className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-md text-gray-800 p-3 rounded-3xl hover:bg-white/40 shadow-lg"
            >
                <IconChevronRight className="w-7 h-7" />
            </button>
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {slides.map((slide, i) => (
                    <div key={i} className="min-w-full flex justify-center">
                        {slide}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;