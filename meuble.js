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
            priceElt[i].textContent = response[i].price / 100;
            cardTextElt[i].textContent = response[i].description;
            cardNameElt[i].textContent = response[i].name;
            localStorage.setItem('idFurniture' + i , response[i]._id);
            localStorage.setItem('nameFurniture' + i , response[i].name);
            localStorage.setItem('unityCost' + i , response[i].price / 100);
            cardNameElt[i].textContent = response[i].name;
        }
        
        
    }
}



requestFurniture.open("GET", "http://localhost:3000/api/furniture");
requestFurniture.send();

let carts = document.querySelectorAll('.addCart');

for (let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
    furnitureNumbers(i);
    })
}

function furnitureNumbers(x) {
    if(x==0){
        let countFurniture = localStorage.getItem('furniture' + x);
        countFurniture = parseInt(countFurniture);
    if(countFurniture){
        localStorage.setItem('furniture' + x , countFurniture + 1);
    }
    else {
        localStorage.setItem('furniture' + x , 1);
    }
    }

    if(x==1){
        let countFurniture = localStorage.getItem('furniture' + x);
        countFurniture = parseInt(countFurniture);
        if(countFurniture){
            localStorage.setItem('furniture' + x , countFurniture + 1);
        }
        else {
            localStorage.setItem('furniture' + x , 1);
        }
    }

    if(x==2){
        let countFurniture = localStorage.getItem('furniture' + x);
        countFurniture = parseInt(countFurniture);
        if(countFurniture){
            localStorage.setItem('furniture' + x , countFurniture + 1);
        }
        else {
            localStorage.setItem('furniture' + x , 1);
        }
    }

    if(x==3){
        let countFurniture = localStorage.getItem('furniture' + x);
        countFurniture = parseInt(countFurniture);
        if(countFurniture){
            localStorage.setItem('furniture' + x , countFurniture + 1);
        }
        else {
            localStorage.setItem('furniture' + x , 1);
        }
    }

    if(x==4){
        let countFurniture = localStorage.getItem('furniture' + x);
        countFurniture = parseInt(countFurniture);
        if(countFurniture){
            localStorage.setItem('furniture' + x , countFurniture + 1);
        }
        else {
            localStorage.setItem('furniture' + x , 1);
        }
    }
    
}