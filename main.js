var quantityItemElt = document.getElementById('quantityItem');
quantityItemElt = localStorage.getItem('cartNumbers');
console.log(quantityItemElt);
document.getElementById('quantityItem').textContent = quantityItemElt;


