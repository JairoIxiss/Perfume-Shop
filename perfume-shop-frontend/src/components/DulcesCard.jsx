import { Link } from 'react-router-dom';
import dulces from '../assets/dulces.png';

const DulcesCard = () => {
    return (
        <div className="relative">
            <div className="titulo border-red-600 flex">
                <h2 className="py-4 leading-relaxed font-pacifico text-7xl px-5 bg-gradient-to-r from-indigo-500  to-amber-500 bg-[length:150%_100%] bg-clip-text text-transparent">Perfumes Dulces</h2>
            </div>
            <div className="descrip-imagen grid grid-cols-[60%_40%] place-items-center border-red-500 w-full">
                <div className="descripcion p-4">
                    <p className="font-nunito text-shadow-md text-blue-950 text-3xl">
                        Fragancias dulces con notas envolventes y cálidas que destacan por su carácter intenso y seductor.<br /><br />
                        Ideales para quienes buscan un aroma duradero, atractivo y lleno de personalidad.
                    </p>
                </div>
                <div className="img flex justify-center">
                    <img src={dulces} alt="Aromas Dulces" className="relative w-115" />
                </div>
            </div>
        </div>

    );
}

export default DulcesCard;