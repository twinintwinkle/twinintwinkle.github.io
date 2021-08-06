document.addEventListener('DOMContentLoaded', function () {

    var modal = document.getElementById("myModal");
    var btn = document.getElementsByClassName("card_btn");
    var closebtn = document.getElementById("close_btn");
    var container = document.getElementsByClassName('container');



    for (var i = 0; i < btn.length; i++) {
        btn[i].onclick = function () {
            modal.style.display = "block";
            for (var j = 0; j < container.length; j++) {
                container[j].classList.add("is-blurred");
                document.getElementById("body").classList.add("modal-open");
                modal.classList.add("showModal");
                var current_id = "./" + this.id + ".html";
                console.log(current_id);
                document.getElementById("iframe").src = current_id;
            }
        }
    }

    if (closebtn) {
        closebtn.addEventListener("click", close);
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            close();
        }
    }

    function close() {
        modal.style.display = "none";
        for (var i = 0; i < container.length; i++) {
            container[i].classList.remove("is-blurred");
            document.getElementById("body").classList.remove("modal-open");
            modal.classList.remove("showModal");
        }
    }



});