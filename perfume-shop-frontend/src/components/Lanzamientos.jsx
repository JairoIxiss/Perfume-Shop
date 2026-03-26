import { useEffect, useState } from "react";
import { perfumeService } from "../services/perfumeService";

import PerfumeCard from "./PerfumeCard";

const Lanzamientos = () => {

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
        <section className="w-full py-5 bg-transparent">

            <h2 className="font-pacifico text-5xl text-center">
                - Nuevas Fragancias -
            </h2>

            <p className="text-center text-gray-500 m-10">
                Descubre las fragancias más amadas por la comunidad
            </p>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10">
                {perfumes.map((perfume) => (
                    <PerfumeCard key={perfume.idPerfume} perfume={perfume} />
                ))}
            </div>

        </section>

    )
}

export default Lanzamientos;