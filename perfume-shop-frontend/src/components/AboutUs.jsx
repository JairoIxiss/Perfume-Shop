import { Link } from 'react-router-dom';
import securebuy from '../assets/secure-buy.png';
import group1 from '../assets/group1.png';

const AboutUs = () => {
    return (
        <div className="relative w-full">
            <div className="titulo flex justify-center">
                <h2 className="py-4 leading-relaxed font-pacifico text-3xl md:text-5xl px-5 bg-linear-to-r from-indigo-500 to-amber-500 bg-size-[150%_100%] bg-clip-text text-transparent">
                    Perfume Shop
                </h2>
            </div>
            
            <div className="descrip-imagen grid grid-cols-1 md:grid-cols-[60%_40%] place-items-center w-full gap-6">
                <div className="descripcion p-4">
                    <p className="font-nunito text-shadow-md text-blue-950 text-xl md:text-2xl lg:text-3xl text-center">
                        En Perfume Shop creemos que un buen perfume no es solo una fragancia, es una forma de expresar quién eres. Por eso nos dedicamos a ofrecer perfumes 100% originales.<br /><br />
                        Nuestro compromiso es con nuestros clientes: brindarte seguridad, confianza y un servicio excepcional, desde el momento en que eliges tu fragancia hasta que llega a tus manos.
                    </p>
                </div>
                <div className="img flex justify-center order-first md:order-none">
                    <img src={group1} alt="Perfumes agrupados" className="w-48 md:w-full md:max-w-md" />
                </div>
            </div>
        </div>      
    );
}

export default AboutUs;