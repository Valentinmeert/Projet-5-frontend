const divOrder = document.createElement("div");
divOrder.id = "orderId";
divOrder.innerHTML =`
<p class="font-weight-bold mb-4">Numéro de la commande</p>
<p class="mb-1">${localStorage.getItem("orderId")}</p>
`;
const divOrderContainer = document.getElementById("orderPart");
divOrderContainer.appendChild(divOrder);

const divPrice = document.createElement("div");
divPrice.id = "pricePart";
divPrice.innerHTML =`
<p class="font-weight-bold mb-4">Prix de la commande</p>
<p class="mb-1">${localStorage.getItem("orderPrice")}<em>€</em></p>
`;
const divPriceContainer = document.getElementById("orderPart");
divPriceContainer.appendChild(divPrice);