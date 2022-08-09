import React, { createContext, useState} from "react";

export const CartContext = createContext();
const { Provider } = CartContext;

const CartCustomProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const addProduct = (product, cantidad) => {
        cantidad = parseInt(cantidad);
        if(isInCart(product.id)){
            const aux = [...products]; 
            const found = aux.find (p => p.id === product.id);
            const index = products.indexOf(found);
            const newQty = aux[index].qty + cantidad;
            if(aux[index].stock >= newQty){
                aux[index].totalPrice = aux[index].price * newQty;
                aux[index].qty = newQty;
            }else{
                console.log("No hay suficiente stock");
            }                
            setProducts(aux);
        }else{
            product.totalPrice = product.price * cantidad;
            product.qty = cantidad;
            setProducts([...products, product]);
        };
    }

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !==id));
    };

    const isInCart = (id) => {
        return products.some(products => products.id === id);
    }

    const clear = () => {
        setProducts([]);
    }

    return(
        <Provider value={{products, addProduct, deleteProduct, clear}}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider;