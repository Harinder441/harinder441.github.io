
// animation on toggle
$(document).ready(
   function(){
        setTimeout(function(){
            $('.navbar-toggler').addClass('shake');
        }, 3000);
    }, function(){
        $('.navbar-toggler').removeClass('shake');
    }
);
