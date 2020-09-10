//Menu Responsive
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    links = document.getElementById("links");

    //Click open
    btnMenuOpen.addEventListener("click", function() {
        menuResponsive.classList.add("active");
    });

    //Click close
    btnMenuClose.addEventListener("click", function() {
        menuResponsive.classList.remove("active");
    });

    //Close menu with link elements
    links.addEventListener("click", function() {
        menuResponsive.style.transitionDelay = "0.5s";
        menuResponsive.classList.remove("active");
    });


//Products Slider
var wrapper = document.querySelector('.slider'),
    btnLeft = document.getElementById("btnLeft"),
    btnRight = document.getElementById("btnRight");

    //Event for the right button
    btnRight.addEventListener("click", function() {
        wrapper.scrollLeft += wrapper.offsetWidth;
    });

    //Event for the left button
    btnLeft.addEventListener("click", function() {
        wrapper.scrollLeft -= wrapper.offsetWidth;
    });


//Form Validation
var form = document.getElementById("form");

    function validate(e) {
        var inputName = document.getElementById("name"),
            inputEmail = document.getElementById("email"),
            inputComments = document.getElementById("comments");

        if (inputName.value == 0 || inputEmail.value == 0 || inputComments.value == 0) {
            //e.preventDeFault();
            alert("Datos vacíos");
        }else {
            //e.preventDeFault();
            alert("Datos enviados");
            inputName.value = "";
            inputEmail.value = "";
            inputComments.value = "";
        }
    };


// Form events
form.addEventListener("submit", validate);