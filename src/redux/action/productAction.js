import axios from "axios";

export default function changeProduct(page){
    return (dispatch) => {
        axios.create({baseURL:page}).get()
        .then(res => {
            dispatch({type:"SET_PRODUCTS",value:res.data})
        }).
        catch(err => {
            console.log("Error : ",err);
        })
    }
}