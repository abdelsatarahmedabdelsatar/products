const INITIAL_STATE = {
  products: [],
};

export default function cartReducer(state = INITIAL_STATE, actoin) {
  switch (actoin.type) {
    case "ADD_TO_CART":
      return {
        products: [...state.products, actoin.value],
      };
    case "DEL_FROM_CART":
      var arr = [...state.products];
      arr.splice(actoin.value, 1);

      return {
        products: [...arr],
      };

    default:
      return { ...state };
  }
}
