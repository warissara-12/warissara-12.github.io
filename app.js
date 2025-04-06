$(function () {
    app.changeLang(sessionStorage.getItem("lang"));
    $('.zoom-image').hover(function () {
        $(this).siblings('.zoom-image').css('z-index', 10);
        $(this).css('z-index', 99);
    });

    setTimeout(function () {
        $('#loadingDiv').hide();
    }, 1000);

});

(function ($) {
    $(".paper").on("click", function () {
        var w = $(this).width(), x = event.clientX, y = event.clientY;
        $(".ink").remove();
        $(this).append("<span class='ink'></span>");
        $(".ink").css({ "top": "0" + y + "px", "left": "0" + x + "px" });
        setTimeout(function () {
            $(".ink").css({ "top": "0" + y - w * 1.5 - 48 + "px", "left": "0" + x - w * 1.5 - 48 + "px", "width": "0" + w * 3 + "px", "height": "0" + w * 3 + "px", "opacity": "1", "transition-duration": "1s" });
        }, 1);
        $(this).css({ "box-shadow": "0 0 3em rgba(0,0,0,0.1)" });
        setTimeout(function () {
            $(".paper").css({ "box-shadow": "0 0 3em rgba(0,0,0,0.3)" });
            $(".ink").css({ "opacity": "0", "transition-duration": "0.5s" });
        }, 2000);
    });
})(jQuery)

app.changeLang = function (lang) {
    $('#loadingDiv').show();
    if (lang === $Config.baseLang[0].shortName) {
        sessionStorage.setItem("lang", lang);
        $("#btn_change_lang_th").css({ "background-color": "#28a745", "color": "white" });
        $("#btn_change_lang_en").css({ "background-color": "transparent", "color": "#28a745" });
        app.findMessageAndRender(sessionStorage.getItem("lang"));
    } else {
        sessionStorage.setItem("lang", lang);
        $("#btn_change_lang_en").css({ "background-color": "#28a745", "color": "white" });
        $("#btn_change_lang_th").css({ "background-color": "transparent", "color": "#28a745" });
        app.findMessageAndRender(sessionStorage.getItem("lang"));
    }

    setTimeout(function () {
        $('#loadingDiv').hide();
    }, 1000);
}

app.findMessageAndRender = function (lang) {
    $.getJSON("messagelocal/message_" + lang.toLowerCase() + ".json", function (json) {
        $('span[lang-code]').each(function () {
            $(this).text(json[$(this).attr("lang-code")]);
        });
    });
}