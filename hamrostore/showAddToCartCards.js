import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProducts";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd)=>{
  //  console.log(curProd.name);
  //  console.log(curProd.id);
  return cartProducts.some((curElem)=> curElem.id === curProd.id);
});

console.log(filterProducts);

