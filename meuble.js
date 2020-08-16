var imgElt = document.getElementsByClassName("card-img-top");
const priceElt = document.getElementsByClassName('price');
const cardTextElt = document.getElementsByClassName('card-text');
const cardNameFurniture = document.getElementsByClassName('addCart');

var requestFurniture = new XMLHttpRequest();
requestFurniture.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {  
        var response = JSON.parse(this.responseText);
        console.log(response);
        for (let i=0; i < imgElt.length; i++){
            imgElt[i].setAttribute('src' , response[i].imageUrl);
            localStorage.setItem('imgFurniture' + i, response[i].imageUrl);
            priceElt[i].textContent = response[i].price / 100;
            cardTextElt[i].textContent = response[i].description;
            cardNameFurniture[i].textContent = response[i].name;
            localStorage.setItem('idFurniture' + i , response[i]._id);
            localStorage.setItem('nameFurniture' + i , response[i].name);
            localStorage.setItem('furnitureUnityCost' + i , response[i].price / 100);
            cardNameFurniture[i].textContent = response[i].name;
        }
    }
}

requestFurniture.open("GET", "http://localhost:3000/api/furniture");
requestFurniture.send();

let carts = document.querySelectorAll('.addCart');

for (let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
    furnitureSelect(i);
    })
}

function furnitureSelect(x) {
    localStorage.setItem('furnitureSelect' , x);
    localStorage.setItem('categoryItem' , 'furniture');
};