import Hero from "@/app/components/layout/Hero";
import HomeMenu from "@/app/components/layout/HomeMenu";
import SectionHeaders from "@/app/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
  
      <Hero />  
      <HomeMenu /> 
      <section className="text-center my-16">

      <SectionHeaders 

        subHeader={'Our story'}
        mainHeader={'about'}

        />

        <div className="text-gray-600 max-w-2x1 mx-auto mt-4 flex-col gap-4">

        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam id, placeat cumque reprehenderit earum sint 
          incidunt facere aperiam laborum voluptas. Natus dolores ipsam architecto, veritatis eos excepturi ducimus facere obcaecati!
        </p>

        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam id, placeat cumque reprehenderit earum sint 
          incidunt facere aperiam laborum voluptas. Natus dolores ipsam architecto, veritatis eos excepturi ducimus facere obcaecati!
        </p>

        </div>
      </section>

      <section className="text-center my-8">

        <SectionHeaders 
        subHeader={'no olvides contactarnos'}
        mainHeader={'contacto'}
        />

        <div className="mt-8">

          <a className="text-4xl text-gray-500" href="">
            809 000 0000
            </a>
        </div>

      </section>

    </>
  );
}
