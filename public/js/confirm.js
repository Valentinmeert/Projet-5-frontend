myInput = document.getElementById("name");
myBtn = document.getElementById("btn");

myInput.addEventListener('input', function(e) {
    if (myInput.validity.valid == true) {
        
        myBtn.disabled = false ;
        
    } else {
        myBtn.disabled = true ;
    }
}, false);



myBtn.addEventListener('click' , function(e) {
    e.preventDefault();
    e.stopPropagation();
    const cart = {
        contact: {
            firstName: "Valentin",
            lastName: "Meert",
            address: "173, chemin des grands",
            city: "La Farlède",
            email: "valentin.meert@gmail.com",
            },
        products: ["5beaa8bf1c9d440000a57d94"],
    };
    fetcher("POST" , "http://localhost:3000/api/teddies/order" , function() {
        if(this.readyState === 4 && this.status === 201){
            let data = JSON.parse(this.response);
            console.log(data.orderId);
            localStorage.setItem('orderId' , data.orderId);
            window.location.href = "recap.html"
        }
    } , cart , "application/JSON");
})
