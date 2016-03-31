//$(window).load(function(){
//    $('.loading-page-container').css("opacity" , '0');
//    $('.loading-page-container').css("transform" ,'translate(0px, -2000px)');
//    setTimeout(function(){$('.loading-page-container').css("z-index" ,'0');}, 1000);
//
//    $('body').css("height" , '300vh');
//});
//



$(window).scroll(function(){
    
    var wScroll_Left = $(this).scrollLeft();
    var wScroll_Left_Percentage = wScroll_Left * 100/3800;
    var wScroll_Top = $(this).scrollTop();
    var wScroll_Top_Percentage = wScroll_Top * 100/($(window).height());

    if(wScroll_Top_Percentage >= 10){
        $('.section-key-interests-right-article-container').each(function(i){
            setTimeout(function(){
            $('.section-key-interests-right-article-container').eq(i).addClass('section-key-interests-right-article-container-fadein');}, 500*(i+1));
        })
        $('.section-key-interests-right-title-container h1').each(function(i){
            setTimeout(function(){
            $('.section-key-interests-right-title-container h1').eq(i).addClass('section-key-interests-right-title-fadein-top');}, 500*(i+1));
        })

        setTimeout(function(){
            $('.section-key-interests-left-title-container h1').addClass('section-key-interests-left-title-container-fadein-left');}, 200);

        setTimeout(function(){
            $('.section-key-interests-left-title-container p').addClass('section-key-interests-left-title-container-fadein-left');}, 1500);
    }
    if(wScroll_Top_Percentage >= 90){
        setTimeout(function(){
            $('.skills-svg-pre-animation').addClass('skills-svg-post-animation');}, 800);
        setTimeout(function(){
            $('.skills-right-sub-container-right-title-container h2').addClass('skills-right-sub-container-right-title-container-zoom-in');}, 2800);
        setTimeout(function(){
            $('.section-skills-right-title-container h1').addClass('section-skills-right-title-container-fadein-top');}, 1800);
        setTimeout(function(){
             $('.section-skills-left-title-container h1').addClass('section-skills-left-title-container-fade-in-right');}, 1000);
    }
    if(wScroll_Top_Percentage >= 160){
        $('.section-skills-container-left').css("overflow" , 'hidden');
    }

    
    
    
    
    if(wScroll_Top_Percentage >= 10 && $(window).width() >= 800){
        $('.left-container-intro').css("transform" , 'translate(-2000px, 0px)');
        $('.right-container-intro').css("transform" , 'translate(2000px, 0px)');
    }
    else if(wScroll_Top_Percentage <= 10 && $(window).width() >= 800){   
        $('.left-container-intro').css("transform" , 'translate(0px, 0px)');
        $('.right-container-intro').css("transform" , 'translate(0px, 0px)');  
    }
    
    if(wScroll_Top_Percentage >= 90 && $(window).width() >= 800)  {
        $('.section-key-interests-container-left').css("transform" , 'translate(-2000px, 0px)');
        $('.section-key-interests-container-right').css("transform" ,'translate(2000px, 0px)');  
    } else if(wScroll_Top_Percentage <= 90  && $(window).width() >= 800)  {
        $('.section-key-interests-container-left').css("transform" , 'translate(0px, 0px)');
        $('.section-key-interests-container-right').css("transform" , 'translate(0px, 0px)');  
    } 
    
    if(wScroll_Top_Percentage >= 160  && $(window).width() >= 800){
        $('.section-skills-container-left').css("transform" , 'translate(-'+ wScroll_Top_Percentage*10 +'px, 0px)');
        $('.section-skills-container-right').css("transform" , 'translate('+ wScroll_Top_Percentage*10 +'px, 0px)');      
    }
    else if(wScroll_Top_Percentage <= 160 && $(window).width() >= 800){    
        $('.section-skills-container-left').css("transform" , 'translate(0px, 0px)');
        $('.section-skills-container-right ').css("transform" , 'translate(0px, 0px)');
    } 
    
    if($(window).width() <= 800){
        $('.right-container-intro').css("transform" , 'translate(0px, 0px)');
        $('.section-key-interests-container-left').css("transform" , 'translate(0px, 0px)');
        $('.section-key-interests-container-right').css("transform" ,'translate(0px, 0px)');  
        $('.section-skills-container-right').css("transform" , 'translate(0px, 0px)');      
    }
   

});


 
$(document).ready(function(){
    $('body').mousemove(function(e){
        var amountMovedX = (e.pageX * -1 );
        var amountMovedY = (e.pageY * -1 );

        $('.section-skills-container-left-clouds-container').css("transform" , 'translate( ' + -(amountMovedX / 100) + 'px , 0px)');

        $('.section-skills-container-left-mountain-bg-top-container').css("transform" , 'translate(' + amountMovedX / 20 + 'px , 0px)');

        $('.section-skills-container-left-mountain-bg-middle-container').css("transform" ,'translate(' + amountMovedX / 30 + 'px , 0px)');

        $('.section-skills-container-left-mountain-bg-bottom-container').css("transform" , 'translate(' + amountMovedX / 80 + 'px , 0px)');
        
    });
});










