import { Link } from 'react-router-dom';
import Frescos from '../assets/Frescos.png';

const FrescosCard = () => {
    return (
            <div className="relative w-full">
                <div className="titulo border-red-600 flex ">
                    <h2 className="py-4 leading-relaxed font-pacifico text-7xl px-5 bg-gradient-to-r from-indigo-500  to-amber-500 bg-[length:150%_100%] bg-clip-text text-transparent">Aromas Frescos</h2>
                </div>
                <div className="descrip-imagen grid grid-cols-[60%_40%] place-items-center border-red-500 w-full">
                    <div className="descripcion p-4">
                        <p className="font-nunito text-shadow-md text-blue-950 text-3xl">
                            Fragancias frescas y ligeras que transmiten limpieza y energía.<br/><br/>
                            Perfectas para el día a día y climas cálidos.
                        </p>
                    </div>
                    <div className="img flex ">
                        <img src={Frescos} alt="Aromas Frescos" className="relative bottom-20 w-115" />
                    </div>
                </div>
            </div>
        
    );
}

export default FrescosCard;