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
      createGallery(images);
 })
 .catch((error) => {
 if (error.message === "NO RESULTS") {
        iziToast.error({
          title: "No Results",
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
          timeout: 3000,
        });
      } else {
        iziToast.error({
          title: "Error",
          message: "An unexpected error occurred. Please try again later.",
          position: "topRight",
          timeout: 3000,
        });
      }
    })
.finally(()=>{
    hideLoader();
    form.reset();
})
}
 )







