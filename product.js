var imgElt = document.getElementsByClassName("card-img");

var indiceTeddies = localStorage.getItem('teddiesSelect');
var indiceCamera = localStorage.getItem('cameraSelect');

var selectElt = document.getElementById("quantity");
var customElt = document .getElementById("colors");
var btnElt = document.getElementsByClassName("btn-success");
console.log(btnElt);
var colorTab = [];
var lensesTab = [];

function createRow() {
var option = document.createElement("option");
const currentOption = document.getElementById("colors") ;
currentOption.appendChild(option);
option.className = "perso";
}



if(localStorage.getItem('categoryItem') == "teddie"){

    var requestTeddies = new XMLHttpRequest();
    requestTeddies.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {  
            var response = JSON.parse(this.responseText);
            for (let i=0; i < response.length; i++){
                colorTab[i] = response[i].colors;
                createRow();
            }
            let perso = document.getElementById("colors").getElementsByClassName("perso");
                for(x=0 ; x<colorTab[indiceTeddies].length ; x++)  {
                    perso[x].textContent = colorTab[indiceTeddies][x];
                }
        }
    }

    requestTeddies.open("GET", "http://localhost:3000/api/teddies");
    requestTeddies.send();

    imgElt[0].setAttribute('src' , localStorage.getItem('imgTeddies' + localStorage.getItem('teddiesSelect')) );
    selectElt.addEventListener('change', () => {
        var index = selectElt.selectedIndex;
        localStorage.setItem('quantityTeddies' , index);
        console.log(index);
        
    })
    customElt.addEventListener('change', () => {
        
        var custom = customElt.options[customElt.selectedIndex].text;
        localStorage.setItem('colorsTeddies' + indiceTeddies , custom);
        console.log(typeof indiceTeddies);
        
    })

    btnElt[0].addEventListener('click', () => {
        ItemNumbersElt = localStorage.getItem('itemNumbers');
        ItemNumbersElt = parseInt(localStorage.getItem('itemNumbers'));
        if(ItemNumbersElt){
            localStorage.setItem('itemNumbers' , ItemNumbersElt + 1);
            
        }
        else {
            localStorage.setItem('itemNumbers' , 1);
        }
        
        })
}


if(localStorage.getItem('categoryItem') == "camera"){

    var requestCameras = new XMLHttpRequest();
    requestCameras.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var response = JSON.parse(this.responseText);
            for (let i=0; i < response.length; i++){
                lensesTab[i] = response[i].lenses;
                createRow();
            }
            let perso = document.getElementById("colors").getElementsByClassName("perso");
            
                for(x=0 ; x<lensesTab[indiceCamera].length ; x++)  {
                    perso[x].textContent = lensesTab[indiceCamera][x];
                    
                }
        }
    }
    requestCameras.open("GET", "http://localhost:3000/api/cameras");
    requestCameras.send();
    
    imgElt[0].setAttribute('src' , localStorage.getItem('imgCamera' + localStorage.getItem('cameraSelect')) );
    selectElt.addEventListener('change', () => {
        var index = selectElt.selectedIndex;
        localStorage.setItem('quantityCamera' , index);
        console.log(index);

    })
    customElt.addEventListener('change', () => {
        
        var custom = customElt.options[customElt.selectedIndex].text;
        localStorage.setItem('colorCamera' + indiceCamera , custom);
        console.log(custom);
        
    })

    btnElt[0].addEventListener('click', () => {
        ItemNumbersElt = localStorage.getItem('itemNumbers');
        ItemNumbersElt = parseInt(localStorage.getItem('itemNumbers'));
        if(ItemNumbersElt){
            localStorage.setItem('itemNumbers' , ItemNumbersElt + 1);
            
        }
        else {
            localStorage.setItem('itemNumbers' , 1);
        }
        
        })



}



