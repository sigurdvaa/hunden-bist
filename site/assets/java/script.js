$(document).ready(function() {
    
    raseMeny();
    smoothScroll(300);
    foreldreMeny();
    galleri();
    closeGalleri();
    galleriKontroller();
    
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

function galleri() {
    
    $('.thumb').on('click', function(){
        
        var nr = $(this).attr('src').substring(27,29);
        
        $('.show').addClass('aktivbilde').attr('src', 'assets/media/galleri/' + nr + '.JPG');
        
        $('.close').addClass('aktiv');
        $('.blackbackground').addClass('aktiv');
        $('.neste').addClass('aktiv');
        $('.forrige').addClass('aktiv');
        
    });
    
}

function closeGalleri() {
    
    $('.close').on('click', function(){
        
        if ($(this).hasClass('aktiv')) {
            
            $(this).removeClass('aktiv');
            $('.show').removeClass('aktivbilde').attr('src','');
            $('.blackbackground').removeClass('aktiv');
            $('.neste').removeClass('aktiv');
            $('.forrige').removeClass('aktiv');
            
        }
        
        });
    
}

function galleriKontroller() {
    
    $('.gallerikontroll').on('click', function(){
        
        var nr = parseInt($('.show').attr('src').substring(21,23));
        
        if ($(this).hasClass('neste')) {            
            if (nr == 37) {
                nr = 1;
            } else {
                nr += 1;
            }
            if (nr < 10) {
                nr = '0' + nr;
            }
            $('.show').attr('src', 'assets/media/galleri/' + nr + '.JPG');            
        } else {            
            if (nr == 1) {
                nr = 37;
            } else {
                nr -= 1;
            }
            if (nr < 10) {
                nr = '0' + nr;
            }
            $('.show').attr('src', 'assets/media/galleri/' + nr + '.JPG');
        }
        
        });
    
}