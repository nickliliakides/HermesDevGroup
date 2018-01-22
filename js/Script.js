(function () {

    var myParallax =
    document.querySelectorAll("#intro"), speed = 0.7;

    window.onscroll = function () {
        myParallax.forEach(function (elP) {
            var windowYOffset = -window.pageYOffset,
                elPBackgroundPos = "50%" + (windowYOffset * speed) + "px";

            elP.style.backgroundPosition = elPBackgroundPos;

        });
    };

})();
