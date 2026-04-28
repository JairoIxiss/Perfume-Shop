import { Link } from 'react-router-dom';
import frutales from '../assets/frutales.png';

const FrutalesCard = () => {
    return (
        <div className="relative">
            <div className="titulo flex justify-center">
                <h2 className="py-4 leading-relaxed font-pacifico text-4xl md:text-6xl lg:text-7xl px-5 bg-gradient-to-r from-indigo-500 to-amber-500 bg-[length:150%_100%] bg-clip-text text-transparent">
                    Dulzor Frutal
                </h2>
            </div>
            
            <div className="descrip-imagen grid grid-cols-1 md:grid-cols-[60%_40%] place-items-center w-full gap-6">
                <div className="descripcion p-4">
                    <p className="font-nunito text-shadow-md text-blue-950 text-xl md:text-2xl lg:text-3xl text-center">
                        Fragancias frutales llenas de vitalidad, con notas dulces y jugosas que evocan frescura y alegría.<br/><br/>
                        Ideales para quienes buscan un aroma vibrante, juvenil y fácil de llevar en cualquier ocasión.
                    </p>
                </div>
                <div className="img flex justify-center order-first md:order-none">
                    <img 
                        src={frutales} 
                        alt="Dulzor Frutal" 
                        className="w-48 md:w-80 lg:w-100 md:relative md:bottom-20" 
                    />
                </div>
            </div>
        </div>
    );
}

export default FrutalesCard;