
var imgElt = document.getElementsByClassName("card-img-top");
const priceElt = document.getElementsByClassName('price');
const cardTextElt = document.getElementsByClassName('card-text');
const cardNameElt = document.getElementsByClassName('addCart');
let productNumbers;
var requestTeddies = new XMLHttpRequest();

requestTeddies.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {  
        var response = JSON.parse(this.responseText);
        for (let i=0; i < imgElt.length; i++){
            imgElt[i].setAttribute('src' , response[i].imageUrl);
            priceElt[i].textContent = response[i].price / 100;
            cardTextElt[i].textContent = response[i].description;
            cardNameElt[i].textContent = response[i].name;
        }
    }
}

requestTeddies.open("GET", "http://localhost:3000/api/teddies");
requestTeddies.send();

let carts = document.querySelectorAll('.addCart');


for (let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
    cartNumbers();
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
    }
    else {
        localStorage.setItem('cartNumbers' , 1);
    }
}




