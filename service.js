console.log("test");
var card = document.getElementsByClassName("addCart");
card[0].addEventListener('click',function(event){
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {  
        var response = JSON.parse(this.responseText);
        console.log(response); 
    const priceElt = document.getElementsByClassName('price');
    priceElt[0].textContent = response[0].price;
    }
}



request.open("GET", "http://localhost:3000/api/teddies");
request.send();
});
