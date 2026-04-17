import { useEffect, useState } from "react";
import { perfumeService } from "../services/perfumeService";

import PerfumeCard from "./PerfumeCard";

const Lanzamientos = () => {

    const [perfumes, setperfumes] = useState([]);

    useEffect(() => {
        const loadPerfumes = async () => {
            try {
                const data = await perfumeService.getAll();
                const idsDeseados = [8, 9, 10, 11];

                const filtrados = data.filter(p => 
                    idsDeseados.includes(p.idPerfume)
                );

                setperfumes(filtrados);
            } catch (error) {
                console.error("Error cargando perfumes", error);
            }
        };
        loadPerfumes();
    }, []);

    return (
        <section className="w-full py-15 bg-transparent">

            <h2 className="font-pacifico text-5xl text-center">
                - Nuevas Fragancias -
            </h2>

            <p className="text-center text-gray-500 m-10">
                Conoce los nuevos lanzamientos del año y házlos parte de tu día
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