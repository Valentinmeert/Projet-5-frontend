var idItemElt = document.getElementsByClassName('idItem');
var quantityItemsElt = document.getElementsByClassName('quantityItem');
var nameItemElt = document.getElementsByClassName('nameItem');
var unityCostElt = document.getElementsByClassName('unityCost');
var totalCostElt = document.getElementsByClassName('totalCost');
var totalCartElt = document.getElementsByClassName('totalCart');
var sumTeddies = sumCamera = sumFurniture = 0;

for (x=0 ; x<15 ; x++){
    if(x>=0 && x<5){
    quantityItemsElt[x].textContent = localStorage.getItem('teddies' + x);
    idItemElt[x].textContent = localStorage.getItem('idTeddies' + x);
    nameItemElt[x].textContent = localStorage.getItem('nameTeddies' + x);
    unityCostElt[x].textContent = localStorage.getItem('unityCost' + x);
    totalCostElt[x].textContent = localStorage.getItem('unityCost' + x) * localStorage.getItem('teddies' + x);
    sumTeddies = sumTeddies + parseInt(localStorage.getItem('unityCost' + x) * localStorage.getItem('teddies' + x));
    }
    if(x>=5 && x<10){
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
        }
}

totalCartElt[0].textContent = sumTeddies + sumCamera + sumFurniture;






