$(document).ready(function() {
    
    raseMeny();
    smoothScroll(300);
    foreldreMeny();
    
});

function raseMeny() {
    
    $('.rasemeny').first().addClass('aktivrase');
    $('.raseholder').first().addClass('aktivrase');
    
    
    $('.rasemeny').click(function(){
        var $this = $(this),     
            $siblings = $this.parent().children(),
            position = $siblings.index($this);
            
        $('.rasemeny').removeClass('aktivrase').eq(position).addClass('aktivrase');
        $('.raseholder').removeClass('aktivrase').eq(position).addClass('aktivrase');
    });
}

function smoothScroll(duration) {
    
    $('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );
    
    if ( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
            }, duration);
        }
    });
}

function foreldreMeny() {
    
    $('.bildeforelder').on('click', function(){
       
        if ($(this).hasClass('aktivforelder')) {
            $(this).removeClass('aktivforelder');
            $('.infoforelder').removeClass('aktivforelder');
            return false;
        }
        else {
        $('.bildeforelder').removeClass('aktivforelder');
        $(this).addClass('aktivforelder');
        }
        
        if ($(this).hasClass('sigurd')) {
            $('.infoforelder').removeClass('aktivforelder');
            $('.infoforelder.sigurd').addClass('aktivforelder');
        }
        else {
            $('.infoforelder').removeClass('aktivforelder');
            $('.infoforelder.lena').addClass('aktivforelder');
        }
    });
}