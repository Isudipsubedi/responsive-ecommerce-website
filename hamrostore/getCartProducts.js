export const getCartProductFromLS =() => {
    let cartProducts = localStorage.getItem('cartProductLS');
    if (!cartProducts){
        return[];
    }
    cartProducts = JSON.parse(cartProducts);
    return cartProducts;
};
