export const homeQuantityToggle = (event,id,stock)=>{
    const currentCardElement = document.querySelector(`#card${id}`);
 //   console.log(currentCardElement);

const productQuantity = currentCardElement.querySelector('.productQuantity');
//console.log(productQuantity);

let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;
// ||1 for we know it is 1 trivially. parseInt because the data  might be in string format

if (event.target.className === "cartIncrement" ){
    if(quantity<stock){
        quantity += 1;
    } else if (quantity === stock) {
        quantity = stock;
    }
}

if (event.target.className === "cartDecrement" ){
    if(quantity>1){
        quantity -= 1;
    } else if (quantity <2) {
        quantity = 1;
    }
}

productQuantity.innerText = quantity;
console.log(quantity);
productQuantity.setAttribute("data-quantity", quantity);
return quantity;



};