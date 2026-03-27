import { Link } from 'react-router-dom';
import securebuy from '../assets/secure-buy.png';
import group1 from '../assets/group1.png';

const AboutUs = () => {
    return (
            <div className=" relative">
                <div className="titulo border-red-600 flex justify-center ">
                    <h2 className="py-4 leading-relaxed font-pacifico text-5xl px-5 bg-linear-to-r from-indigo-500  to-amber-500 bg-size-[150%_100%] bg-clip-text text-transparent">Perfume Shop</h2>
                </div>
                <div className="descrip-imagen grid grid-cols-[60%_40%] place-items-center border-red-500 w-full">
                    <div className="descripcion p-4">
                        <p className="font-nunito text-shadow-md text-emerald-950 text-2xl">
                            En Perfume Shop creemos que un buen perfume no es solo una fragancia, es una forma de expresar quién eres. Por eso nos dedicamos a ofrecer perfumes 100% originales.<br /><br />
                            Nuestro compromiso es con nuestros clientes: brindarte seguridad, confianza y un servicio excepcional, desde el momento en que eliges tu fragancia hasta que llega a tus manos.<br /><br />
                            <br /><br />
                            En Perfume Shop no solo vendemos perfumes, te ayudamos a encontrar la esencia que mejor representa tu estilo y personalidad.
                        </p>
                    </div>
                    <div className="img flex justify-center">
                        <img src={group1} alt="Perumes agrupados" className="w-140" />
                    </div>
                </div>
            </div>      
    );
}

export default AboutUs;