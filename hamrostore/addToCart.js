import { getCartProductFromLS } from "./getCartProducts";

export const addToCart = (event, id, stock)=>{

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElement = document.querySelector(`#card${id}`);
  //  console.log(currentProdElement);

    let quantity = currentProdElement.querySelector('.productQuantity').innerText;
    let price = currentProdElement.querySelector('.productPrice').innerText;

    // console.log(quantity, price);

    price = price.replace('रु','' );
    price = Number(price * quantity);
    quantity = Number(quantity);

    let updateCart = {id, quantity, price};
    arrLocalStorageProduct.push(updateCart);
    localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));

};