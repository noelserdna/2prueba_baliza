import Image from "next/image";
import barrio_poetas from "@/../public/barrio_poetas.webp";
import santa_teresa from "@/../public/santa_teresa.webp";
import avenida_madrid from "@/../public/avenida_madrid.webp"; 

function ProjectSection() {
    return (
      <section className="py-24">
          <h3 className="text-9xl">DIVIDIR PARA INVERTIR</h3>
          <div className="bg-black text-white">
            <h4 className="p-10 text-4xl">Últimos proyectos</h4>
            <div className="p-10 flex justify-around">
              <Image src={barrio_poetas} alt="Barrio Poetas" height={300}/>
              <Image src={santa_teresa} alt="Barrio Poetas" height={300}/>
              <Image src={avenida_madrid} alt="Barrio Poetas" height={300}/>
            </div>
          </div>
      </section>
    );
  }
  
  export default ProjectSection;