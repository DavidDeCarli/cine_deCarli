import React from "react";

function cartContext() {

    return(
        <div>
            CartContext
        </div>
    )
}

export default cartContext;


// Tiene que tener un botón englobado con un link que envíe la información a Cart
// imagen
//     nombre
//     descripción
//     precio
//     condicion (manejar en un estado de la función onAdd, puede ser con un UseState) ? itemCount :  botonFinalizar

// function cartContext() {

//     const [producto, setProducto] = useState('');
//     const [productos, setProductos] = useState([]);

//     const controlarCambio = (event) => {
//         setProducto(event.tarjet.value);
//     }

//     // Agregar contenido al listado
//     const modificarCantidad = () => {
//         const copia = [...productos];
//         copia.push(producto);
//         setProductos(copia);
//     }

// useEffect(() =>{
//     const getItems = async () => {
//         try{
//             const response = await fetch(URL);
//             const data = await response.json();
//             setProducts(data);
//         }catch{
//             setError(true);
//         }finally{
//             setLoading(false);
//             console.log(error);
//         }
//     }

//     setTimeout(()=>{
//         getItems();
//     },2000);

// }, [categoryName]);

// //     return(
// //         <div>
// //             <input onChange={controlarCambio} type='text'></input>
// //             <button Onclick={modificarCantidad}>Agregar</button>
// //             <ItemDetail productos ={productos}/>
// //         </div>
// //     )
// // }

// // export default cartContext;