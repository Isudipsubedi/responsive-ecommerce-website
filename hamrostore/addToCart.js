import { getCartProductFromLS } from "./getCartProducts";

export const addToCart = (event, id, stock)=>{

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElement = document.querySelector(`#card${id}`);
  //  console.log(currentProdElement);

    let quantity = currentProdElement.querySelector('.productQuantity').innerText;
    let price = currentProdElement.querySelector('.productPrice').innerText;

  // console.log(quantity, price);


};