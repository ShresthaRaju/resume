$(document).ready(function() {
    // animate progress bar
    $('.progress-bar').each(function() {
        let valueNow = $(this).attr('aria-valuenow');

        $(this).animate({
            width: valueNow + "%"
        }, {
            duration: 2000,
            easing: "swing",
        });
    });

    // animate percentage
    $(".text-left").each(function() {
        $(this).prop('percentage', 0).animate({
            percentage: $(this).text()
        }, {
            duration: 2500,
            easing: 'swing',
            step: function(current) {
                $(this).text(Math.ceil(current) + "%");
            }
        });

    });
});