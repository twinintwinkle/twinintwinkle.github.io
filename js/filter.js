document.addEventListener('DOMContentLoaded', function () {
    var ui = 1, motion = 1, graphic = 1, programming = 1, others = 1;

    document.querySelector('#showall_btn').onclick = function () {
        var btns = document.getElementsByClassName("filter_btn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.add("active");
            ui = 1; motion = 1; graphic = 1; programming = 1; others = 1;
        }
    }

    document.querySelector('#ui_btn').onclick = function () {
        var element = document.getElementById('ui_btn');
        if (ui == 1) {
            ui = 0;
            element.classList.remove("active");
        } else {
            ui = 1;
            element.classList.add("active");
        }
    }

    document.querySelector('#motion_btn').onclick = function () {
        var element = document.getElementById('motion_btn');
        if (motion == 1) {
            motion = 0;
            element.classList.remove("active");
        } else {
            motion = 1;
            element.classList.add("active");
        }
    }

    document.querySelector('#graphic_btn').onclick = function () {
        var element = document.getElementById('graphic_btn');
        if (graphic == 1) {
            graphic = 0;
            element.classList.remove("active");
        } else {
            graphic = 1;
            element.classList.add("active");
        }
    }

    document.querySelector('#programming_btn').onclick = function () {
        var element = document.getElementById('programming_btn');
        if (programming == 1) {
            programming = 0;
            element.classList.remove("active");
        } else {
            programming = 1;
            element.classList.add("active");
        }
    }


    document.querySelector('#others_btn').onclick = function () {
        var element = document.getElementById('others_btn');
        if (others == 1) {
            others = 0;
            element.classList.remove("active");
        } else {
            others = 1;
            element.classList.add("active");
        }
    }

});

