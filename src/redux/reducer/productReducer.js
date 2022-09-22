
export default function productReducer(state = [],action){
    switch(action.type){
        case "SET_PRODUCTS":
            return action.value;
        default:
            return state;    

    }
}