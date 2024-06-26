export default function MenuItem() {
    return(
        <div className="bg-gray-400 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">

            <div className="text-center">
                
            <img src="/herramientas3.jpeg" className="max-h-auto max-h-24 block mx-auto" alt={"herramientas"}/>

            </div>
                    <h4 className="font-semibold text-xl my-3"
                    >martillo
                    </h4>
                    
                    <p className="text-gray-500 text-sm">
                        excelente para la casa y trabajo
                    </p>

                    <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
                        Añadir al carrito de compra $ 300
                    </button>
                </div>
    )
}