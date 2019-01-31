(function($) {
    $('#phone_click_1').click(function(e){
        $('#contact_a').show();

    })
    $('#phone_click_2').click(function(e){
        $('#contact_b').show();
    })
    $('#guest_user_form_close_button').click(function(e){
        $('#contact_a').hide();
        $('#contact_b').hide();
    })
})(jQuery);
