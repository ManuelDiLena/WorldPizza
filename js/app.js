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