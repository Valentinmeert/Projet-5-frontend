var imgElt = document.getElementsByClassName("card-img-top");
const priceElt = document.getElementsByClassName('price');
const cardTextElt = document.getElementsByClassName('card-text');
const cardNameElt = document.getElementsByClassName('addCart');

function createCard(data){
    var card = document.createElement("div");
    card.className="col-lg-4 col-md-6 mb-4 mt-4";
    console.log(data);
    card.innerHTML =`
    <div class="card h-100">
        <a href="product.html?id=${data._id}"><img class="card-img-top" src="${data.imageUrl}" alt=""></a>
        <div class="card-body">
            <h4 class="card-title">
                <a class="addCart" href="product.html?id=${data._id}">${data.name}</a>
            </h4>
            <h5><em class="price">${data.price/100}</em> €</h5>
            <p class="card-text">${data.description}</p>
        </div>
    </div>`;
    const cardContainer = document.getElementById("row");
    cardContainer.appendChild(card);

}

fetcher("GET", "http://localhost:3000/api/teddies", function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {  
        var response = JSON.parse(this.responseText);
        for (let i=0; i < response.length; i++){
            createCard(response[i]);
        }
    }
});

let carts = document.querySelectorAll(".addCart");

for (let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
    })
}





