// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("card_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var container = document.getElementsByClassName('container');
// When the user clicks the button, open the modal 


for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        modal.style.display = "block";
        for (var j = 0; j < container.length; j++) {
            container[j].classList.add("is-blurred");
            document.getElementById("body").classList.add("modal-open");
        }
    }
}


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    for (var i = 0; i < container.length; i++) {
        container[i].classList.remove("is-blurred");
        document.getElementById("body").classList.remove("modal-open");
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        for (var i = 0; i < container.length; i++) {
            container[i].classList.remove("is-blurred");
            document.getElementById("body").classList.remove("modal-open");
        }
    }
}// JavaScript source code
