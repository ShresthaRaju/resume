$(document).ready(function() {

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // animate progress bar
    $('.progress-bar').each(function() {
        let valueNow = $(this).attr('aria-valuenow');

        $(this).animate({
                width: valueNow + "%",
            },
            "slow",
            function() {
                setTimeout(function() {
                    $('.text-left').css('display', 'block');
                }, 1000);

            });
    });
});