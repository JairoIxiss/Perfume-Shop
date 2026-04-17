import { Link } from 'react-router-dom';
import citricos from '../assets/citricos.png';

const CitricosCard = () => {
    return (
            <div className="relative">
                <div className="titulo border-red-600 flex  ">
                    <h2 className="py-4 leading-relaxed font-pacifico text-7xl px-5 bg-gradient-to-r from-indigo-500  to-amber-500 bg-[length:150%_100%] bg-clip-text text-transparent">Frescura Cítrica</h2>
                </div>
                <div className="descrip-imagen grid grid-cols-[60%_40%] place-items-center border-red-500 w-full">
                    <div className="descripcion p-4">
                        <p className="font-nunito text-shadow-md text-blue-950 text-3xl">
                            Fragancias cítricas con notas brillantes y energizantes que aportan frescura inmediata. <br /><br />
                            Perfectas para quienes buscan un aroma limpio, ligero y revitalizante que acompañe durante todo el día.
                        </p>
                    </div>
                    <div className="img flex justify-center">
                        <img src={citricos} alt="Aromas Citricos" className="relative bottom-20 w-115" />
                    </div>
                </div>
            </div>
    );
}

export default CitricosCard;