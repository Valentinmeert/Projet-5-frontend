myInput = document.getElementById("name");
myBtn = document.getElementById("btn");


myInput.addEventListener('input', function(e) {
    if (myInput.validity.valid == true) {
        
        myBtn.disabled = false ;
        
    } else {
        myBtn.disabled = true ;
    }
}, false);

