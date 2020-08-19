var imgElt = document.getElementsByClassName("card-img");

var selectElt = document.getElementById("quantity");
var customElt = document .getElementById("colors");
var btnElt = document.getElementsByClassName("btn");


function createColorOption(color) {
    var option = document.createElement("option");
    option.textContent = color;
    option.className = "perso";
    const optionsContainer = document.getElementById("colors") ;
    optionsContainer.appendChild(option);
}

function setImageSource(url){
    imgElt[0].setAttribute('src' , url);
}
console.log(customElt.validity);
customElt.addEventListener('change' , function(e){
console.log(customElt.validity);
})
const productId = window.location.search.split("=")[1];
fetcher("GET" , "http://localhost:3000/api/teddies/" + productId , function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {  
        var response = JSON.parse(this.responseText);
        for (let i=0; i < response.colors.length; i++){
            createColorOption(response.colors[i]);
            setImageSource(response.imageUrl);
        }
        
        btnElt[0].addEventListener('click' , function(e){
            
            e.preventDefault();
            e.stopPropagation();
            if(selectElt.validity.valid == true){
            const selectedQuantity = +selectElt.value;
            const selectedColor = customElt.value;
            const cart = JSON.parse(localStorage.getItem('cart')) || {};
            console.log(cart);

            
            if(cart[response._id + selectedColor] == null ){
                const product = {
                    _id: response._id ,
                    color: selectedColor ,
                    quantity: selectedQuantity 
                }
                cart[response._id + selectedColor]= product;
            }
            else{
                cart[response._id + selectedColor].quantity += selectedQuantity ;
            }
            localStorage.setItem('cart' , JSON.stringify(cart));
            window.location.href = "cart.html";
        }})
    }
})



