
export default function changeAddCart(status){
    status.quantity = 1;
    return{
        type:"ADD_TO_CART",
        value:status
    }
}