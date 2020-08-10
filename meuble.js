var imgElt = document.getElementsByClassName("card-img-top");
const priceElt = document.getElementsByClassName('price');
const cardTextElt = document.getElementsByClassName('card-text');
const cardNameElt = document.getElementsByClassName('addCart');
console.log(imgElt);
var requestFurniture = new XMLHttpRequest();
requestFurniture.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {  
        var response = JSON.parse(this.responseText);
        console.log(response);
        for (let i=0; i < imgElt.length; i++){
            imgElt[i].setAttribute('src' , response[i].imageUrl);
            priceElt[i].textContent = response[i].price;
            cardTextElt[i].textContent = response[i].description;
            cardNameElt[i].textContent = response[i].name;
        }
        
        
    }
}



requestFurniture.open("GET", "http://localhost:3000/api/furniture");
requestFurniture.send();