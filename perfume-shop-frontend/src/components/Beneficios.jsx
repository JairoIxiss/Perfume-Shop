import { IconRotate, IconTruckDelivery, IconMessageChatbot } from "@tabler/icons-react";

const Beneficios = () => {
  return (
<section className="my-15 w-full  border-red-500">
    <div className="grid grid-cols-3 gap-10 px-10 text-center font-nunito text-mauve-900">
        <div className="flex flex-col items-center gap-3 max-w-xs mx-auto">
            <IconTruckDelivery size={50}/>
            <h3 className="text-2xl">Envíos Gratis</h3>
            <p className="text-mauve-600">Envío gratis dentro de todo México </p>
        </div>
        <div className="flex flex-col items-center gap-3 max-w-xs mx-auto">
            <IconRotate size={50}/>
            <h3 className="text-2xl">Devoluciones</h3>
            <p className="text-mauve-600">Devoluciones gratuitas dentro de los 5 días posteriores a la compra</p>
        </div>
        <div className="flex flex-col items-center gap-3 max-w-xs mx-auto">
            <IconMessageChatbot size={50}/>
            <h3 className="text-2xl">Atención a Clientes</h3>
            <p className="text-mauve-600">Atención personalizada para resolver tus dudas y preocupaciones</p>
        </div>
    </div>
</section>
  );
};

export default Beneficios;