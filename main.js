var idItemElt = document.getElementsByClassName('idItem');
var quantityItemsElt = document.getElementsByClassName('quantityItem');
var nameItemElt = document.getElementsByClassName('nameItem');
var unityCostElt = document.getElementsByClassName('unityCost');
var totalCostElt = document.getElementsByClassName('totalCost');
var totalCartElt = document.getElementsByClassName('totalCart');
var customItemElt = document.getElementsByClassName('custom');
var sumTeddies = sumCamera = sumFurniture = 0;
var i = localStorage.getItem('teddiesSelect');
var j = localStorage.getItem('cameraSelect');

if(localStorage.getItem("categoryItem") == "teddie")
{

const panier=
{
    detail: {
        name: localStorage.getItem('nameTeddies' + i),
        quantity: localStorage.getItem('quantityTeddies'), 
        category: localStorage.getItem('categoryItem'),
        _id: localStorage.getItem('idTeddies' + i),
        value: localStorage.getItem('colorsTeddies' + i),
        unitPrice: localStorage.getItem('unityCost' + i),
        totalPrice: localStorage.getItem('unityCost' + i) * localStorage.getItem('quantityTeddies')
    }
}

localStorage.setItem('panier' + localStorage.getItem('itemNumbers'), JSON.stringify(panier));

}

if(localStorage.getItem("categoryItem") == "camera")
{
const panier=
{
    detail: {
        name: localStorage.getItem('nameCamera' + j),
        quantity: localStorage.getItem('quantityCamera'), 
        category: localStorage.getItem('categoryItem'),
        _id: localStorage.getItem('idCamera' + j),
        value: localStorage.getItem('colorCamera' + j),
        unitPrice: localStorage.getItem('cameraUnityCost' + j),
        totalPrice: localStorage.getItem('cameraUnityCost' + j) * localStorage.getItem('quantityCamera')
    }
}


localStorage.setItem('panier' + localStorage.getItem('itemNumbers'), JSON.stringify(panier));

}


for(x=1; x<=localStorage.getItem('itemNumbers') ; x++){
    
var tr = document.createElement("tr");
tr.id="test" + x;
const trContent="<tr>\
<td class=\"idItem\">1</td>\
<td class=\"nameItem\">LTS Versions</td>\
<td class=\"custom\">none</td>\
<td class=\"quantityItem\"></td>\
<td><em class=\"unityCost\"></em>€</td>\
<td><em class=\"totalCost\"></em>€</td>\
</tr>"
tr.innerHTML=trContent;

const cartContainer = document.getElementById("tab");
cartContainer.appendChild(tr);

var containPanier = localStorage.getItem('panier' + x);
containPanier = JSON.parse(containPanier);
quantityItemsElt[x-1].textContent = containPanier.detail.quantity;
idItemElt[x-1].textContent = containPanier.detail._id;
nameItemElt[x-1].textContent = containPanier.detail.name;
customItemElt[x-1].textContent = containPanier.detail.value;
unityCostElt[x-1].textContent = containPanier.detail.unitPrice;
totalCostElt[x-1].textContent = containPanier.detail.totalPrice;


}










