$(window).scroll(function(){
    
    var wScroll_Left = $(this).scrollLeft();
    var wScroll_Left_Percentage = wScroll_Left * 100/3800;
    var wScroll_Top = $(this).scrollTop();
    var wScroll_Top_Percentage = wScroll_Top * 100/($(window).height());

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

    console.log(wScroll_Top_Percentage);
    if(wScroll_Top_Percentage >= 20){
        $('.left-container-intro').css("transform" , 'translate(-2000px, 0px)');
        $('.right-container-intro').css("transform" , 'translate(2000px, 0px)');

    }
    else if(wScroll_Top_Percentage <= 20){
        $('.left-container-intro').css("transform" , 'translate(0px, 0px)');
        $('.right-container-intro').css("transform" , 'translate(0px, 0px)');  
    }



    
    if(wScroll_Top_Percentage >= 110)  {
        $('.section-key-interests-container-left').css("transform" , 'translate(-2000px, 0px)');
        $('.section-key-interests-container-right').css("transform" ,'translate(2000px, 0px)');  
    } else if(wScroll_Top_Percentage <= 110 )  {
        $('.section-key-interests-container-left').css("transform" , 'translate(0px, 0px)');
        $('.section-key-interests-container-right').css("transform" , 'translate(0px, 0px)');  
    } 

    
    if(wScroll_Top_Percentage >= 200 ){
        $('.section-skills-container-left').css("transform" , 'translate(-'+ wScroll_Top_Percentage*10 +'px, 0px)');
        $('.section-skills-container-left').css("overflow" , 'hidden');
        $('.section-skills-container-right ').css("transform" , 'translate('+ wScroll_Top_Percentage*10 +'px, 0px)');      
    }
    else if(wScroll_Top_Percentage <= 200){

        $('.section-skills-container-left').css("transform" , 'translate(0px, 0px)');
        $('.section-skills-container-right ').css("transform" , 'translate(0px, 0px)');
    }

})

				
jQuery(document).ready(function() {
    $('body').mousemove(function(e){
        var amountMovedX = (e.pageX * -1 );
        var amountMovedY = (e.pageY * -1 );
        $('.section-skills-container-left-clouds-container').css("transform" , 'translate( ' + -(amountMovedX / 100) + 'px , 0px)');
        
        $('.section-skills-container-left-mountain-bg-top-container').css("transform" , 'translate(' + amountMovedX / 20 + 'px , 0px)');
        
        $('.section-skills-container-left-mountain-bg-middle-container').css("transform" ,'translate(' + amountMovedX / 30 + 'px , 0px)');
     
        $('.section-skills-container-left-mountain-bg-bottom-container').css("transform" , 'translate(' + amountMovedX / 80 + 'px , 0px)');
    });
});












