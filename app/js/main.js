$(document).ready(function () {
    function setProgress(selector, percent) {
        const $circle = $(selector);
        const radius = 45; 
        const circumference = 2 * Math.PI * radius; 

        $circle.css('stroke-dasharray', circumference);

        const offset = circumference - (percent / 100) * circumference;
        $circle.css('stroke-dashoffset', offset);
    }

    setProgress('.circle-progress-1', 91); // 91%
    setProgress('.circle-progress-2', 56); // 56%
    setProgress('.circle-progress-3', 35); // 35%
    setProgress('.circle-progress-4', 9);  // 9%
});

///header-menu////
$(document).ready(function () {
    $(".header__menu-toggle").click(function () {
        $(".header__menu-list").toggleClass("show"); 
        if ($(".header__menu-list").hasClass("show")) {
            $("body").css("overflow", "hidden"); 
            $("body").append('<div class="body-overlay"></div>'); 
        } else {
            $("body").css("overflow", "auto");
            $(".body-overlay").remove();
        }
    });
    $(document).click(function (e) {
        if (!$(e.target).closest(".header__menu").length && !$(e.target).is(".header__menu-toggle")) {
            $(".header__menu-list").removeClass("show");
            $("body").css("overflow", "auto");
            $(".body-overlay").remove();
        }
    });
});


