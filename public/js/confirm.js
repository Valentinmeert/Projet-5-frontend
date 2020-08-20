myName = document.getElementById("name");
mySurname = document.getElementById("surname");
myEmail = document.getElementById("mail");
myAdress = document.getElementById("adress");
myCity = document.getElementById("city");
myBtn = document.getElementById("btn");
test = JSON.parse(localStorage.getItem('cart'));
x = 0;
let prodTab =[];
for(x=0 ; x<Object.keys(test).length ; x++ ){
    prodTab[x] = Object.values(test)[x]._id; 
    }
myBtn.addEventListener("click" , function(e) {
    e.preventDefault();
    e.stopPropagation();
    if(myName.validity.valid == true && mySurname.validity.valid == true && myEmail.validity.valid == true && myAdress.validity.valid == true && myCity.validity.valid == true){
        console.log(prodTab);
        const cart = {
        
        contact: {
            firstName: myName.value,
            lastName: mySurname.value,
            address: myAdress.value,
            city: myCity.value,
            email: myEmail.value,
            },
        /* products: [Object.values(test)[0]._id], */
        products: prodTab,
    };

    console.log(cart);
    fetcher("POST" , "http://localhost:3000/api/teddies/order" , function() {
        if(this.readyState === 4 && this.status === 201){
            let data = JSON.parse(this.response);
            console.log(data.orderId);
            localStorage.setItem("orderId" , data.orderId);
            window.location.href = "recap.html"
        }
    } , cart , "application/JSON");
}
})
