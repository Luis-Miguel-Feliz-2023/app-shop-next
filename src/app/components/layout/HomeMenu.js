import Image from "next/image";
import MenuItem from "@/app/components/Menu/MenuItem";


export default function HomeMenu() {
    return(

        <section className="">

            <div className="absolute left-0 right-0 w-full justify-start">

                <div className="absolute left-0 -top-[30px] text-left-z-10">
                <Image src={"/herramientas2.jpeg"} width={109} height={190} alt={"herramientas2"} />  
                </div>

                <div className="absolute -top-[100px] right-0 -z-10">
                <Image src={"/herramientas2.jpeg"} width={107} height={195} alt={"herramientas2"} />  
                </div>

            </div>

            <div className="text-center mb-4">

               <SectionHeaders 
               subHeader={'verificar menu'}
               mainHeader={'menu'}
               />

            </div>

            <div className="grid grid-cols-3 gap-4">

            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />


            </div>

        </section>
    );
}