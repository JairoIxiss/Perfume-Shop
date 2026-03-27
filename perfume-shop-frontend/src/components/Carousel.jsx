import { useEffect, useState } from "react";
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

   //* useEffect(() => {
        //const interval = setInterval(() => {
       //     setIndex((prev) => (prev + 1) % slides.length);
       // }, );

       // return () => clearInterval(interval);
   // }, []);

    const next = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-11/12 mx-auto overflow-hidden rounded-2xl shadow-lg bg-amber-100 mt-15 mb-15">

            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {slides.map((slide, i) => (
                    <div key={i} className="min-w-full flex justify-center p-6">
                        {slide}
                    </div>
                ))}
            </div>

            <div className="absolute bottom-4 left-4 flex items-center gap-4">

                <div className="flex gap-2">
                    <button
                        onClick={prev}
                        className="bg-amber-900/50 text-white p-2 rounded-full hover:bg-amber-900/70"
                    >
                        <IconChevronLeft />
                    </button>

                    <button
                        onClick={next}
                        className="bg-amber-900/50 text-white p-2 rounded-full hover:bg-amber-900/70"
                    >
                        <IconChevronRight />
                    </button>
                </div>

                <div className="flex gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                                index === i
                                    ? "bg-amber-900 scale-125"
                                    : "bg-amber-900/40"
                            }`}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Carousel;