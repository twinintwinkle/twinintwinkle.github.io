document.addEventListener('DOMContentLoaded', function () {
    var ui = 1, motionGraphic = 1, graphic = 1, programming = 1, others = 1;

    document.querySelector('.ui_btn').onclick = btnClick(ui);

    function btnClick(element) {

    }

    document.querySelector('.ui_btn').onclick = function () {
        if (ui = 1) {
            ui = 0;
            removeClass(ui);
        } else {
            ui = 1;
            addClass(ui);
        }
    }
    document.querySelector('.motiongraphic_btn').onclick = function () {
        if (motionGraphic = 1) {
            motionGraphic = 0;
            removeClass(motionGraphic);
        } else {
            motionGraphic = 1;
            addClass(motionGraphic);
        }
    }

    document.querySelector('.graphic_btn').onclick = function () {
        if (graphic = 1) {
            graphic = 0;
            removeClass(graphic);
        } else {
            graphic = 1;
            addClass(graphic);
        }
    }

    document.querySelector('.programming_btn').onclick = function () {
        if (programming = 1) {
            programming = 0;
            removeClass(programming);
        } else {
            programming = 1;
            addClass(programming);
        }
    }

    document.querySelector('.others_btn').onclick = function () {
        if (others = 1) {
            others = 0;
            removeClass(others);
        } else {
            others = 1;
            addClass(others);
        }
    }




}