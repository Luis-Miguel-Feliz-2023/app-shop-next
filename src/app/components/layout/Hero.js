import Image from "next/image";
import Right from "@/app/components/layout/icons/Right"


export default function Hero(){
    return(

        <section className="sectionhero">

            <div className="py-12">

            <h1 className="text-4xl font-semibold">
                todas tus herramientas en un solo lugar <span className="text-primary">compralas hoy</span>
            </h1>

            <p className="my-6 text-gray-400 text-sm">
                herramientas de todo tipo ,lo que necesitas para el trabajo y hogar
            </p>

            <div className="flex gap-4 text-sm">

                <button className="bg-teal-500 flex gap-2 text-white px-5 py-2 uppercase rounded-full items-center">
                    Compra ahora
                    <Right />
                </button>

                <button className="flex gap-2 py-2 font-semibold">
                    Ver mas articulos
                    <Right />
                </button>
            </div>


            </div>

            <div className="relative">

            <Image src={"/herramientas3.jpeg"} layout={"fill"} objectFit={"contain"} alt={"herramientas"} />


            </div>


        </section>
    );
}