import { useEffect, useState } from "react";
import { perfumeService } from "../services/perfumeService";
import PerfumeCard from "./PerfumeCard";

const TopSellers = () => {

    const [perfumes, setperfumes] = useState([]);

    useEffect(() => {
        const loadPerfumes = async () => {
            try {
                const data = await perfumeService.getAll();
                setperfumes(data.slice(0, 4));
            } catch (error) {
                console.error("Error cargando perfumes", error);
            }
        };
        loadPerfumes();
    }, []);

    return (
        <section className="w-full py-8 md:py-12 bg-transparent">

            <h2 className="font-pacifico text-3xl md:text-4xl lg:text-5xl text-center text-yellow-900">
                - Los Más Vendidos -
            </h2>

            <p className="text-center text-gray-500 text-sm md:text-base mx-6 md:mx-10 my-6 md:my-10">
                Descubre las fragancias más amadas por la comunidad
            </p>

            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 md:px-10">
                {perfumes.map((perfume) => (
                    <PerfumeCard key={perfume.idPerfume} perfume={perfume} />
                ))}
            </div>

        </section>
    );
}

export default TopSellers;