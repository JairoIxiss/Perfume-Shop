import { Link } from 'react-router-dom';
import securebuy from '../assets/secure-buy.png';

const AboutUs = () => {
    return (
        <div className="min-h-[90vh] flex items-center justify-center border-amber-600" >
            <div className=" w-[85%] h-[70vh] relative bg-black/20 backdrop-blur-lg rounded-lg shadow-lg">
                <div className="titulo border-red-600 flex justify-center ">
                    <h2 className="py-4 leading-relaxed font-pacifico text-5xl px-5 bg-gradient-to-r from-indigo-500  to-amber-500 bg-[length:150%_100%] bg-clip-text text-transparent">Perfume Shop</h2>
                </div>
                <div className="descrip-imagen grid grid-cols-[60%_40%] place-items-center border-red-500 w-full">
                    <div className="descripcion p-4">
                        <p className="font-nunito text-shadow-md text-white text-xl">
                            En Perfume Shop creemos que un buen perfume no es solo una fragancia, es una forma de expresar quién eres. Por eso nos dedicamos a ofrecer perfumes 100% originales, cuidadosamente seleccionados para garantizar calidad, autenticidad y una experiencia única en cada compra.<br /><br />
                            Nuestro compromiso es con nuestros clientes: brindarte seguridad, confianza y un servicio excepcional, desde el momento en que eliges tu fragancia hasta que llega a tus manos. Trabajamos para que cada entrega sea rápida, segura y con la garantía de que estás recibiendo un producto auténtico.<br /><br />
                            En Perfume Shop no solo vendemos perfumes, te ayudamos a encontrar la esencia que mejor representa tu estilo y personalidad.
                        </p>
                    </div>
                    <div className="img flex justify-center">
                        <img src={securebuy} alt="Compra Segura" className="w-72" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;