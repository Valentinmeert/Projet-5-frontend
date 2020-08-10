var imgElt = document.getElementsByClassName("card-img-top");
console.log(imgElt);
var requestTeddies = new XMLHttpRequest();
requestTeddies.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {  
        var response = JSON.parse(this.responseText);
        console.log(response);
        imgElt[0].setAttribute('src' , response[0].imageUrl);
        
    }
}

var requestCameras = new XMLHttpRequest();
requestCameras.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {  
        var response = JSON.parse(this.responseText);
        console.log(response); 
        imgElt[1].setAttribute('src' , response[0].imageUrl);
    }
}

var requestFurniture = new XMLHttpRequest();
requestFurniture.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {  
        var response = JSON.parse(this.responseText);
        console.log(response); 
        imgElt[2].setAttribute('src' , response[0].imageUrl);
    }
}

requestTeddies.open("GET", "http://localhost:3000/api/teddies");
requestTeddies.send();
requestCameras.open("GET", "http://localhost:3000/api/cameras");
requestCameras.send(); 
requestFurniture.open("GET", "http://localhost:3000/api/furniture");
requestFurniture.send(); 