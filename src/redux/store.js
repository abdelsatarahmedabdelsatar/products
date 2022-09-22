
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import combine from "./reducer/combine";
import thunk from "redux-thunk";
const store = createStore(combine, applyMiddleware(thunk));

export default store;