var idItemElt = document.getElementsByClassName('idItem');
var quantityItemsElt = document.getElementsByClassName('quantityItem');
var nameItemElt = document.getElementsByClassName('nameItem');
var unityCostElt = document.getElementsByClassName('unityCost');
var totalCostElt = document.getElementsByClassName('totalCost');
var totalCartElt = document.getElementsByClassName('totalCart');
var customItemElt = document.getElementsByClassName('custom');
var sumTeddies = sumCamera = sumFurniture = 0;
var i =localStorage.getItem('teddiesSelect');

localStorage.setItem('quantity' + i , localStorage.getItem('quantity'));

    quantityItemsElt[i].textContent = localStorage.getItem('quantity' + i);
    idItemElt[i].textContent = localStorage.getItem('idTeddies' + i);
    nameItemElt[i].textContent = localStorage.getItem('nameTeddies' + i);
    unityCostElt[i].textContent = localStorage.getItem('unityCost' + i);
    totalCostElt[i].textContent = localStorage.getItem('unityCost' + i) * localStorage.getItem('quantity' + i);
    customItemElt[i].textContent = localStorage.getItem('colors' + i); 



for(x=0 ; x<5 ; x++){ 
    
    quantityItemsElt[x].textContent = localStorage.getItem('quantity' + x);
    idItemElt[x].textContent = localStorage.getItem('idTeddies' + x);
    nameItemElt[x].textContent = localStorage.getItem('nameTeddies' + x);
    unityCostElt[x].textContent = localStorage.getItem('unityCost' + x);
    customItemElt[x].textContent = localStorage.getItem('colors' + x); 
    totalCostElt[x].textContent = localStorage.getItem('unityCost' + x) * localStorage.getItem('quantity' + x);
    sumTeddies = sumTeddies + parseInt(localStorage.getItem('unityCost' + x) * localStorage.getItem('quantity' + x));

}



    
/*     if(x>=5 && x<10){
        quantityItemsElt[x].textContent = localStorage.getItem('camera' + x%5);
        idItemElt[x].textContent = localStorage.getItem('idCamera' + x);
        nameItemElt[x].textContent = localStorage.getItem('nameCamera' + x);
        unityCostElt[x].textContent = localStorage.getItem('unityCost' + x);
        totalCostElt[x].textContent = localStorage.getItem('unityCost' + x) * localStorage.getItem('camera' + x%5);
        sumCamera = sumCamera + parseInt(localStorage.getItem('unityCost' + x) * localStorage.getItem('camera' + x%5));
        }
    if(x>=10 && x<15){
        quantityItemsElt[x].textContent = localStorage.getItem('furniture' + x%5);
        idItemElt[x].textContent = localStorage.getItem('idFurniture' + x%5);
        nameItemElt[x].textContent = localStorage.getItem('nameFurniture' + x%5);
        unityCostElt[x].textContent = localStorage.getItem('unityCost' + x%5);
        totalCostElt[x].textContent = localStorage.getItem('unityCost' + x%5) * localStorage.getItem('furniture' + x%5);
        sumFurniture = sumFurniture + parseInt(localStorage.getItem('unityCost' + x%5) * localStorage.getItem('furniture' + x%5));
        } */


totalCartElt[0].textContent = sumTeddies + sumCamera + sumFurniture;






