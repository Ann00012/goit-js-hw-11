import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form=document.querySelector(".form");

form.addEventListener("submit",function(event){
event.preventDefault();
const inputValue = event.target.elements["search-text"].value.trim();
clearGallery();
showLoader();
  if (inputValue === '') {
    hideLoader();
     iziToast.error({
      title: 'Error',
      message: "You entered an empty string",
      position: "topRight",
      timeout: 3000,
    });
    return form.reset();
  }
 getImagesByQuery(inputValue)
 .then((images)=>{
    hideLoader();
    if (images.length > 0) {
        createGallery(images);
      }
 })
 .catch(() => {
      hideLoader(); 
    })
.finally(()=>{
    form.reset();
})
}
 )







