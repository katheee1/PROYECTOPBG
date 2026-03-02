/*
-- useState ([]) aqui guardaremos los productos
-- useEffect ([]) se ejecuta una sola vez al cargar la pagina
-- fetch(url) llama a la API
--.then() convierte la respuesta a JSON
-- setProducts(data) guarda los productos en el estado 
*/
import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="pt-24 px-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Productos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white shadow rounded-xl p-4 hover:shadow-lg"
          >
            {/* Imagen */}
            <div className="rounded-2xl h-40 flex items-center justify-center mb-3">
              <img
                src={product.image}
                alt={product.title}
                className="h-28 object-contain"
              />
            </div>

            {/* Titulo y categoria */}
            <div className="flex justify-between text-sm font-semibold">
              <span>{product.title.slice(0,12)}</span>
              <span className="text-gray-500">{product.category}</span>
            </div>

            {/* Descripción */}
            <p className="text-sm mt-2 text-gray-600 line-clamp-2">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex justify-between text-sm mt-2">
              <span>Rating: {product.rating.rate}</span>
              <span>Count: {product.rating.count}</span>
            </div>

            {/* Precio y botón */}
            <div className="flex justify-between items-center mt-3">
              <span className="font-bold">${product.price}</span>
              <button className="border border-gray-500 px-3 py-1 rounded-lg text-sm">
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
   - map recorre el arreglo de productos
   - cada producto se pinta dentro de una tarjeta 
   -grid-cols-1 /sm/md crean diseño responsive
   -line-clamp-2 corta texrtos muy largos => ver mas, leer mas
   -gap agrega espacios a sus hijos 
   -object-contain mantiene la proporcion de las imagenes
   contenga el precio , categoria y RangeError(puntuacion y contador)
*/ 

