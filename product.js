var imgElt = document.getElementsByClassName("card-img");
imgElt[0].setAttribute('src' , localStorage.getItem('imgTeddies' + localStorage.getItem('teddiesSelect')) );
var indice = parseInt(localStorage.getItem('teddiesSelect'));
var selectElt = document.getElementById("quantity");
var customElt = document .getElementById("colors");
var requestTeddies = new XMLHttpRequest();
var colorTab = [];
requestTeddies.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {  
        var response = JSON.parse(this.responseText);
        console.log(response);
        for (let i=0; i < response.length; i++){
            colorTab[i] = response[i].colors;
        }
        
        let perso = document.getElementsByClassName("perso");
            for(x=0 ; x<colorTab[indice].length ; x++)  {
                perso[x].textContent = colorTab[indice][x];
                console.log(colorTab[indice][x]);
            }
    }
}

requestTeddies.open("GET", "http://localhost:3000/api/teddies");
requestTeddies.send();



    selectElt.addEventListener('change', () => {
        
        var index = selectElt.selectedIndex;
        localStorage.setItem('quantity' , index);
        console.log(index);
        
    })

    customElt.addEventListener('change', () => {
        
        var custom = customElt.options[customElt.selectedIndex].text;
        localStorage.setItem('colors' + indice , custom);
        console.log(custom);
        
    })





document.getElementsByClassName("btn").addEventListener('click', function() {
localStorage.setItem('teddies' + index , index);

});

