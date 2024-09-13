import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart =(id) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd)=> curProd.id !==id);

    // update localStorage after removing the item
    localStorage.setItem('cartProductLS', JSON.stringify(cartProducts));


    //to remove the div onclick
    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv){
        removeDiv.remove()
    } 

    updateCartValue(cartProducts);

    //calculating the card total in our cartProducts page

    updateCartProductTotal();
};