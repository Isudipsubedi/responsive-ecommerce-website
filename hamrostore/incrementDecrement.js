import { getCartProductFromLS } from "./getCartProducts";

export const incrementDecrement = (event, id, stock, price)=> {
    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElement.querySelector('.productQuantity');
    const productPrice = currentCardElement.querySelector('.productPrice');


    let quantity = 1;
    let localStoragePrice = 0;

    //Get data from local storage

    let localCartProducts = getCartProductFromLS();
    let existingProd = localCartProducts.find((curProd)=> curProd.id === id);

    if(existingProd){
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    }else{
        localStoragePrice = price;
        price = price;
    }

    //upper limit

    if (event.target.className === "cartIncrement" ){
        if(quantity<stock){
            quantity += 1;
        } else if (quantity === stock) {
            quantity = stock;
            localStoragePrice = price *  stock;
        }
    }

    //lower limit 

    if (event.target.className === "cartDecrement" ){
        if(quantity>1){
            quantity -= 1;
        }
    }

    //update actual local storage price

    localStoragePrice = price * quantity;

    let updatedCart = {id, quantity,price: localStoragePrice};
    updatedCart = localCartProducts.map((curProd)=>{
      return curProd.id === id ? updatedCart: curProd;
    });

    
    localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));


    //reflect the increment and decrement on screen too
    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;
};