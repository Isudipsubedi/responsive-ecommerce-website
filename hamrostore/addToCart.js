import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock)=>{

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElement = document.querySelector(`#card${id}`);
  //  console.log(currentProdElement);

    let quantity = currentProdElement.querySelector('.productQuantity').innerText;
    let price = currentProdElement.querySelector('.productPrice').innerText;

    // console.log(quantity, price);

    price = price.replace('रु','' );

    let existingProd = arrLocalStorageProduct.find((curProd)=>curProd.id === id);

    if (existingProd){
    //  console.log(`quantity`,quantity)
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = {id, quantity,price};
    updatedCart = arrLocalStorageProduct.map((curProd)=>{
      return (curProd.id === id) ? updatedCart: curProd;
    });
    console.log(updatedCart);
    
    localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));
    }

    if (existingProd){
    //  alert('Already Added')
      return false;
    }



    price = Number(price * quantity);
    quantity = Number(quantity);

    let updateCart = {id, quantity, price};
    arrLocalStorageProduct.push(updateCart);
    localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));

    //update the cart button value

    updateCartValue(arrLocalStorageProduct);



};