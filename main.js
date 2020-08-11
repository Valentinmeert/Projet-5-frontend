var idItemElt = document.getElementsByClassName('idItem');
var quantityItemsElt = document.getElementsByClassName('quantityItem');
var nameItemElt = document.getElementsByClassName('nameItem');
var unityCostElt = document.getElementsByClassName('unityCost');
var totalCostElt = document.getElementsByClassName('totalCost');
var totalCartElt = document.getElementsByClassName('totalCart');
var count = 0;

for (x=0 ; x<5 ; x++){
    quantityItemsElt[x].textContent = localStorage.getItem('teddies' + x);
    idItemElt[x].textContent = localStorage.getItem('idTeddies' + x);
    nameItemElt[x].textContent = localStorage.getItem('nameTeddies' + x);
    unityCostElt[x].textContent = localStorage.getItem('unityCost' + x);
    totalCostElt[x].textContent = localStorage.getItem('unityCost' + x) * localStorage.getItem('teddies' + x);
    count = count + parseInt(localStorage.getItem('unityCost' + x) * localStorage.getItem('teddies' + x));
}
totalCartElt[0].textContent = count;






