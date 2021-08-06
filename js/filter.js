var filterCheck = {
    uiux: true,
    motiongraphic: true,
    graphic: true,
    programming: true,
    others: true
};

document.addEventListener('DOMContentLoaded', function () {

    var showallbtn = document.getElementById('showall_btn');
    if (showallbtn) {
        showallbtn.onclick = function () {
            var btns = document.getElementsByClassName("filter_btn");
            filterCheck.uiux = true, filterCheck.motiongraphic = true, filterCheck.grphic = true, filterCheck.programming = true, filterCheck.others = true;
            for (var i = 0; i < btns.length; i++) {
                btns[i].classList.add("active");
            }
        }
    }

    var uibtn = document.getElementById('ui_btn');
    if (uibtn) {
        uibtn.onclick = function () {
            filterCheck.uiux = change(uibtn, "uiux");
        }
    }

    var motionbtn = document.getElementById('motion_btn');
    if (motionbtn) {
        motionbtn.onclick = function () {
            filterCheck.motiongraphic = change(motionbtn, "motiongraphic");
        }
    }

    var graphicbtn = document.getElementById('graphic_btn');
    if (graphicbtn) {
        graphicbtn.onclick = function () {
            filterCheck.graphic = change(graphicbtn, "graphic");
        }
    }

    var programmingbtn = document.getElementById('programming_btn');
    if (programmingbtn) {
        programmingbtn.onclick = function () {
            filterCheck.programming = change(programmingbtn, "programming");
        }
    }

    var othersbtn = document.getElementById('others_btn');
    if (othersbtn) {
        othersbtn.onclick = function () {
            filterCheck.others = change(othersbtn, "others");
        }
    }

    document.querySelectorAll('.filter_btn').forEach(item => {
        item.addEventListener('click', check);
    })
   

});



function change(btn, element) {
    var element_value = eval("filterCheck." + element);
    if (element_value == true) {
        element_value = false;
        btn.classList.remove("active");
    } else {
        element_value = true;
        btn.classList.add("active");
    }
    return element_value;
}

function check() {
    for (const [key, value] of Object.entries(filterCheck)) {
        if (value == false) {
            checkFalse(key);
        }
    }
    for (const [key, value] of Object.entries(filterCheck)) {
        if (value == true) {
            checkTrue(key);
        }
    }
}

function checkFalse(element) {
    var hide = document.getElementsByClassName(element);
    for (var i = 0; i < hide.length; i++) {
        hide[i].classList.add("filterDiv");
    }
}

function checkTrue(element) {
    var show = document.getElementsByClassName(element);
    for (var i = 0; i < show.length; i++) {
        show[i].classList.remove("filterDiv");
    }
}



