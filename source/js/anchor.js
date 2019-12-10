$("body").on('click', '[href*="#top"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({
        scrollTop: $(this.hash).offset().top - fixed_offset
    }, 1000);
    e.preventDefault();
});

var $win = $(window),
    $fixed = $(".fixed"),
    limit = 300;

function tgl(state) {
    $fixed.toggleClass("hidden", state);
}

$win.on("scroll", function () {
    var top = $win.scrollTop();

    if (top < limit) {
        tgl(true);
    } else {
        tgl(false);
    }
});