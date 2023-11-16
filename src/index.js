import { fetchBreeds, fetchCatByBreed } from "./cat-api.js"
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css'

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loaderInfo = document.querySelector('.loader');
const errorInfo = document.querySelector('.error');

window.addEventListener('DOMContentLoaded', onContentLoaded);
breedSelect.addEventListener('change', onBreedSelectChange);

function templateCats({ name, id }) {
    return `<option value="${id}">${name}</option>`;
  }
  
function renderCats(cats) {
    const markup = cats.map(templateCats).join('');
    breedSelect.insertAdjacentHTML('afterbegin', markup);
  }

function onContentLoaded() {
    fetchBreeds()
    .then(response => {renderCats(response);})
new SlimSelect ({
  select: '#single',
});
hideLoader();
hideError();
}

function onBreedSelectChange(e) {
    fetchCatByBreed(e.target.value)
    .then(response => {renderInfoCats(response);})
    .catch(error => {console.log(error);})

}

  function showLoader() {
 loaderInfo.innerHTML = '<h1>loader</h1>';
  }

  function hideLoader() {
  loaderInfo.innerHTML = '';
      }

 function templateCatInfo(data) {
  console.log(data);
    return `<div class="load container ">
    <div class="img container ">
    <img 
    src="${data[0].url}"
    alt="#"
    class="catimage"/> 
    </div>
    <div class="catdescr">
    <h1 class="catname">${data[0].breeds[0].name}</h1>
    <p class="caties">
    ${data[0].breeds[0].description}</p>
    </div>`;
}

function renderInfoCats(cat) {
  const markupInfo = templateCatInfo(cat)
  catInfo.innerHTML =  markupInfo;
}

function showError() {
  errorInfo.innerHTML = '<h1>error</h1>';
   }
 
function hideError() {
    errorInfo.innerHTML = '';
       }   
