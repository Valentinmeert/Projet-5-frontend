var imgCamera = document.getElementsByClassName("card-img-top");
const priceCamera = document.getElementsByClassName('price');
const cardTextCamera = document.getElementsByClassName('card-text');
const cardNameCamera = document.getElementsByClassName('addCart');

var requestCameras = new XMLHttpRequest();
requestCameras.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {  
        var response = JSON.parse(this.responseText);
        console.log(response);
        for (let i=0; i < imgCamera.length; i++){
            imgCamera[i].setAttribute('src' , response[i].imageUrl);
            localStorage.setItem('imgCamera' + i, response[i].imageUrl);
            priceCamera[i].textContent = response[i].price / 100;
            cardTextCamera[i].textContent = response[i].description;
            localStorage.setItem('idCamera' + i, response[i]._id);
            localStorage.setItem('nameCamera' + i, response[i].name);
            localStorage.setItem('cameraUnityCost' + i , response[i].price / 100);
            cardNameCamera[i].textContent = response[i].name;
        }
    }
}

requestCameras.open("GET", "http://localhost:3000/api/cameras");
requestCameras.send();

let carts = document.querySelectorAll('.addCart');

for (let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
    cameraSelect(i);
    })
}

function cameraSelect(x) {
    localStorage.setItem('cameraSelect' , x);
    localStorage.setItem('categoryItem' , 'camera');
};


