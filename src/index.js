import {fetchData} from './apiCaller'
const  searchButton = document.querySelector('.searchButton');

(function main(){
    fetchData();
    searchButton.addEventListener('click', fetchData)
})();