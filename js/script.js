// navbar Menu

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



$(document).ready(function() {
    $('#contact-form').on('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Serialize form data
        var formData = $(this).serialize();

        // Send the AJAX request
        $.ajax({
            url: 'mailer.php', // The PHP file to handle the form submission
            type: 'POST',
            data: formData,
            beforeSend: function() {
                $('#form-message').html('<p>Sending your message...</p>');
            },
            success: function(response) {
                $('#form-message').html(response); // Display success or error message
            },
            error: function() {
                $('#form-message').html('<p>Something went wrong, please try again later.</p>');
            }
        });
    });
});
