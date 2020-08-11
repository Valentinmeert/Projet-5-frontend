
var imgElt = document.getElementsByClassName("card-img-top");
const priceElt = document.getElementsByClassName('price');
const cardTextElt = document.getElementsByClassName('card-text');
const cardNameElt = document.getElementsByClassName('addCart');
let productNumbers = 0;
let countTeddies = 0;
var requestTeddies = new XMLHttpRequest();

requestTeddies.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {  
        var response = JSON.parse(this.responseText);
        console.log(response);
        for (let i=0; i < imgElt.length; i++){
            imgElt[i].setAttribute('src' , response[i].imageUrl);
            priceElt[i].textContent = response[i].price / 100;
            cardTextElt[i].textContent = response[i].description;
            localStorage.setItem('idTeddies' + i , response[i]._id);
            localStorage.setItem('nameTeddies' + i , response[i].name);
            localStorage.setItem('unityCost' + i , response[i].price / 100);
            cardNameElt[i].textContent = response[i].name;
        }
    }
}


requestTeddies.open("GET", "http://localhost:3000/api/teddies");
requestTeddies.send();

let carts = document.querySelectorAll('.addCart');

for (let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
    teddiesNumbers(i);
    })
}

function teddiesNumbers(x) {
    if(x==0){
        let countTeddies = localStorage.getItem('teddies' + x);
        countTeddies = parseInt(countTeddies);
    if(countTeddies){
        localStorage.setItem('teddies' + x , countTeddies + 1);
    }
    else {
        localStorage.setItem('teddies' + x , 1);
    }
    }

    if(x==1){
        let countTeddies = localStorage.getItem('teddies' + x);
        countTeddies = parseInt(countTeddies);
        if(countTeddies){
            localStorage.setItem('teddies' + x , countTeddies + 1);
        }
        else {
            localStorage.setItem('teddies' + x , 1);
        }
    }

    if(x==2){
        let countTeddies = localStorage.getItem('teddies' + x);
        countTeddies = parseInt(countTeddies);
        if(countTeddies){
            localStorage.setItem('teddies' + x , countTeddies + 1);
        }
        else {
            localStorage.setItem('teddies' + x , 1);
        }
    }

    if(x==3){
        let countTeddies = localStorage.getItem('teddies' + x);
        countTeddies = parseInt(countTeddies);
        if(countTeddies){
            localStorage.setItem('teddies' + x , countTeddies + 1);
        }
        else {
            localStorage.setItem('teddies' + x , 1);
        }
    }

    if(x==4){
        let countTeddies = localStorage.getItem('teddies' + x);
        countTeddies = parseInt(countTeddies);
        if(countTeddies){
            localStorage.setItem('teddies' + x , countTeddies + 1);
        }
        else {
            localStorage.setItem('teddies' + x , 1);
        }
    }
    
}




