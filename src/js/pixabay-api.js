import axios from "axios"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const API="52799161-b762ef396431272d847d94f09";
const BASE_URL="https://pixabay.com/api/";

export function getImagesByQuery(query){
   return  axios(BASE_URL,{
        params:{
            key:API,
            q:query,
            image_type: "photo",
            orientation:"horizontal",
            safesearch:true
        }
    })
    .then((response)=>{
        if(response.data.hits.length===0){
            throw new Error("NO RESULTS"); 
        };
        return response.data.hits
    })
    .catch((error)=>{
        throw error;
    });
}