
const INITIAL_STATE = {
    products: [],
  };
  
  export default function quantityReducer(state = INITIAL_STATE, actoin) {
    switch (actoin.type) {

      case "INC_QUANTITY":
        var index = state.products.indexOf(actoin.value);
        state.products[index].quantity += 1;
        return {
          products: [...state.products],
        };
        case "DEC_QUANTITY":
        var index = state.products.indexOf(actoin.value);
        state.products[index].quantity -= 1;
        return {
          products: [...state.products],
        };
      
      default:
        return { ...state };
    }
  }
  