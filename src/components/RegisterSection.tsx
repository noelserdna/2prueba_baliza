import Image from "next/image";
import panel1 from "@/../public/panel-1.webp";
import panel2 from "@/../public/panel-2.webp";
import panel3 from "@/../public/panel-3.webp";
import panel4 from "@/../public/panel-4.webp";
import panel5 from "@/../public/panel-5.webp";
import panel6 from "@/../public/panel-6.webp";

function RegisterSection() {
  return (
    <section className="py-24 flex items-center flex-col">
      <h3 className="text-2xl p-5">
        REGÍSTRATE Y PASA EL KYC PARA EMPEZAR YA A INVERTIR EN INMUEBLES
      </h3>
      <h3 className="text-2xl p-5">
        ¡POTENCIA TUS FINANZAS CON NUESTRA PLATAFORMA!
      </h3>
      <button className="rounded-2xl text-3xl m-10 px-20 py-5 bg-gray-900 text-white">
        Regístrate
      </button>
      <div className="flex gap-5">
        <Image className="rounded-xl" src={panel1} alt="Panel 1" height={120} />
        <Image className="rounded-xl" src={panel2} alt="Panel 2" height={120} />
        <Image className="rounded-xl" src={panel3} alt="Panel 3" height={120} />
        <Image className="rounded-xl" src={panel4} alt="Panel 4" height={120} />
        <Image className="rounded-xl" src={panel5} alt="Panel 5" height={120} />
        <Image className="rounded-xl" src={panel6} alt="Panel 6" height={120} />
      </div>
    </section>
  );
}

export default RegisterSection;
