var imgElt = document.getElementsByClassName("card-img-top");
const priceElt = document.getElementsByClassName('price');
const cardTextElt = document.getElementsByClassName('card-text');
const cardNameElt = document.getElementsByClassName('addCart');
console.log(imgElt);
var requestCameras = new XMLHttpRequest();
requestCameras.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {  
        var response = JSON.parse(this.responseText);
        console.log(response);
        for (let i=0; i < imgElt.length; i++){
            imgElt[i].setAttribute('src' , response[i].imageUrl);
            priceElt[i].textContent = response[i].price / 100;
            cardTextElt[i].textContent = response[i].description;
            cardNameElt[i].textContent = response[i].name;
        }
        
        
    }
}



requestCameras.open("GET", "http://localhost:3000/api/cameras");
requestCameras.send();

let carts = document.querySelectorAll('.addCart');


for (let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
    cameraNumbers();
    })
}

function cameraNumbers() {
    let productNumbers = localStorage.getItem('cameraNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cameraNumbers', productNumbers + 1);
    }
    else {
        localStorage.setItem('cameraNumbers' , 1);
    }
}