import { Link } from 'react-router-dom';
import Frescos from '../assets/Frescos.png';

const FrescosCard = () => {
    return (
        <div className="relative w-full">
            <div className="titulo flex justify-center">
                <h2 className="py-4 leading-relaxed font-pacifico text-4xl md:text-6xl lg:text-7xl px-5 bg-gradient-to-r from-indigo-500 to-amber-500 bg-[length:150%_100%] bg-clip-text text-transparent">
                    Aromas Frescos
                </h2>
            </div>
            
            <div className="descrip-imagen grid grid-cols-1 md:grid-cols-[60%_40%] place-items-center w-full gap-6">
                <div className="descripcion p-4">
                    <p className="font-nunito text-shadow-md text-blue-950 text-xl md:text-2xl lg:text-3xl text-center">
                        Fragancias frescas y ligeras que transmiten limpieza y energía.<br/><br/>
                        Perfectas para el día a día y climas cálidos.
                    </p>
                </div>
                <div className="img flex justify-center order-first md:order-none">
                    <img 
                        src={Frescos} 
                        alt="Aromas Frescos" 
                        className="w-48 md:w-80 lg:w-115 md:relative md:bottom-20" 
                    />
                </div>
            </div>
        </div>
    );
}

export default FrescosCard;