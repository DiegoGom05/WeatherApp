import { updateDom} from "./updateDom";
import { createClient } from 'pexels';


const pexelsClient = createClient('o7AgZyjGDZp3qindgNF2X8qiCcQ7mEIb8rhuuyISsKcCTqpOUqXHRyhQ');
let firstTime = true;
let data;
let response;
const input = document.querySelector('.input');
export async function fetchData(){
    if(firstTime){
        response = await fetch('https://api.weatherapi.com/v1/current.json?key=a6b5243ea37a4adc9ae35224241401&q=london');
        firstTime = false;
    } else{
        let country  = input.value;  
        response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a6b5243ea37a4adc9ae35224241401&q=${country}`);
    }
    data = await response.json();
    fetchImage(data);
    updateDom();
   
}

async function fetchImage(data){
    const body = document.querySelector('body');
    const query =  data.current.condition.text;
    const response = await pexelsClient.photos.search({ query: query  , per_page: 1 });
    const imageUrl = response.photos[0]?.src.original;
    if(query == 'Partly cloudy'){
        body.style.backgroundImage = `url(../images/clear-sky.jpg)`;
    }
    else{
         
        body.style.backgroundImage = `url("${imageUrl}")`;
    }
 
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundPosition = 'center'; // Opcional: para centrar la imagen
    body.style.width = '100vw'; // Ancho al 100% del viewport
    body.style.height = '100vh'; // Alto al 100% del viewport
}



export {data};
 