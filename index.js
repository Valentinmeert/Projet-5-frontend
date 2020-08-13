var imgElt = document.getElementsByClassName("card-img-top");
console.log(imgElt);
const categories = ["teddies" , "cameras" , "furniture"];
categories.forEach(function(category , index){
    fetcher('GET' , "http://localhost:3000/api/" + category , function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {  
            var response = JSON.parse(this.responseText);
            imgElt[index].setAttribute('src' , response[0].imageUrl);
        }
    });
})

function fetcher(method , url , callBack) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = callBack;
    request.open(method , url);
    request.send();
}