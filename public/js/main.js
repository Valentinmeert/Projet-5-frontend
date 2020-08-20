var idItemElt = document.getElementsByClassName("idItem");
var quantityItemsElt = document.getElementsByClassName("quantityItem");
var nameItemElt = document.getElementsByClassName("nameItem");
var unityCostElt = document.getElementsByClassName("unityCost");
var totalCostElt = document.getElementsByClassName("totalCost");
var totalCartElt = document.getElementsByClassName("totalCart");
var customItemElt = document.getElementsByClassName("custom");
var btnEraseElt = document.getElementsByClassName("erase");
var sum = 0;


const cart = JSON.parse(localStorage.getItem('cart')) || {};
Object.keys(cart).forEach(function(productIdentifier){
    const productInfo = cart[productIdentifier];
    console.log(productInfo);
    fetcher("GET" , "http://localhost:3000/api/teddies/" + productInfo._id , function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {  
            var response = JSON.parse(this.responseText);
            var tr = document.createElement("tr");
            tr.id= productIdentifier;
            tr.innerHTML = `
            <tr>
                <td class="idItem">${response._id}</td>
                <td class="nameItem">${response.name}</td>
                <td class="custom">${productInfo.color}</td>
                <td class="quantityItem">${productInfo.quantity}</td>
                <td><em class="unityCost">${response.price / 100}</em>€</td>
                <td><em class="totalCost">${(response.price / 100) * productInfo.quantity}</em>€</td>
            </tr>`;
            
            const cartContainer = document.getElementById("tab");
            cartContainer.appendChild(tr);
            totalCartElt[0].textContent = +totalCartElt[0].textContent + (response.price / 100) * productInfo.quantity;
            localStorage.setItem("orderPrice" , totalCartElt[0].textContent);
        }
    });
})

btnEraseElt[0].addEventListener("click" , () => {
    localStorage.removeItem("cart");
})


