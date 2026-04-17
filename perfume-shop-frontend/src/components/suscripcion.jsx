const suscripcion = () => {
    return (
        <section className="relative w-full h-[400px] md:h-[500px]">

            <img
                src="/perfumes.webp"
                alt="Promociones perfumes"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

                <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
                    No te pierdas nuestras promociones
                </h2>

                <p className="text-white/90 text-lg mb-6">
                    Suscríbete y recibe ofertas exclusivas directamente en tu correo
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    <input
                        type="email"
                        placeholder="Ingresa tu correo"
                        className="bg-amber-50 flex-1 px-4 py-3 rounded-md outline-none"
                    />

                    <button className="bg-amber-500/90 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-semibold">
                        Suscribirse
                    </button>
                </div>

            </div>
        </section>
    );
};

export default suscripcion;