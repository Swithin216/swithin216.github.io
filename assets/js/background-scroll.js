$(window).scroll(function(){
    
    var wScroll_Left = $(this).scrollLeft();
    var wScroll_Left_Percentage = wScroll_Left * 100/3800;
    var wScroll_Top = $(this).scrollTop();
    var wScroll_Top_Percentage = wScroll_Top * 100/($(window).height());

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

    console.log(wScroll_Top_Percentage);
    if(wScroll_Top_Percentage >= 10){
        $('.left-container-intro').css({"transform" : 'translate(-2000px, 0px)'});
        $('.right-container-intro').css({"transform" : 'translate(2000px, 0px)'});
    }
    else if(wScroll_Top_Percentage <= 10){
        $('.left-container-intro').css({"transform" : 'translate(0px, 0px)'});
        $('.right-container-intro').css({"transform" : 'translate(0px, 0px)'});  
    }


    var matrix_section_intro = $('.right-container-intro').css('webkit-transform');
    var values_section_intro = matrix_section_intro.match(/-?[\d\.]+/g);
    var current_position_section_intro = values_section_intro[4]; 
    
    
    if(wScroll_Top_Percentage >= 200 && current_position_section_intro > 500)  {
        $('.section-key-interests-container-left').css({"transform" : 'translate(-2000px, 0px)'});
        $('.section-key-interests-container-right').css({"transform" : 'translate(2000px, 0px)'});  
    } else if(wScroll_Top_Percentage <= 200 )  {
        $('.section-key-interests-container-left').css({"transform" : 'translate(0px, 0px)'});
        $('.section-key-interests-container-right').css({"transform" : 'translate(0px, 0px)'});  
    } 
    
    var matrix_section_key_interests = $('.section-key-interests-container-right').css('webkit-transform');
    var values_section_key_interests = matrix_section_key_interests.match(/-?[\d\.]+/g);
    var current_position_section_key_interests = values_section_key_interests[4]; 
    
    
    if(wScroll_Top_Percentage >= 300 && current_position_section_key_interests > 500){
        $('.section-skills-container-left').css({"transform" : 'translate(-'+ wScroll_Top_Percentage*10 +'px, 0px)'});
        $('.section-skills-container-left').css({"overflow" : 'hidden'});
        $('.section-skills-container-right ').css({"transform" : 'translate('+ wScroll_Top_Percentage*10 +'px, 0px)'});      
    }
    else if(wScroll_Top_Percentage <= 300){

        $('.section-skills-container-left').css({"transform" : 'translate(0px, 0px)'});
        $('.section-skills-container-right ').css({"transform" : 'translate(0px, 0px)'});
    }

//    var matrix_section_skills = $('.section-skills-container-right').css('webkit-transform');
//    var values_section_skills = matrix_section_skills.match(/-?[\d\.]+/g);
//    var current_position_section_skills = values_section_skills[4]; 
//    
//    console.log(current_position_section_intro);
//    


})
//
//jQuery(document).ready(function() {
//    $(window).scroll(function(){
//
//        var wScroll_Left = $(this).scrollLeft();
//        var wScroll_Left_Percentage = wScroll_Left * 100/3800;
//        var wScroll_Top = $(this).scrollTop();
//        var wScroll_Top_Percentage = wScroll_Top * 100/($(window).height());
//    });
//                     
//    console.log(wScroll_Top);     
//});

//$.scrollify({
//		section : "body",
//		sectionName : "left-container-intro",
//		easing: "easeOutExpo",
//		scrollSpeed: 1100,
//		offset : 0,
//		scrollbars: true,
//		standardScrollElements: "",
//		setHeights: true,
//		before:function() {},
//		after:function() {},
//		afterResize:function() {},
//		afterRender:function() {}
//	});
				
jQuery(document).ready(function() {
    $('body').mousemove(function(e){
        var amountMovedX = (e.pageX * -1 );
        var amountMovedY = (e.pageY * -1 );
        $('.section-skills-container-left-clouds-container').css({"transform" : 'translate( ' + -(amountMovedX / 100) + 'px , 0px)'});
        
        $('.section-skills-container-left-mountain-bg-top-container').css({"transform" : 'translate(' + amountMovedX / 20 + 'px , 0px)'});
        
        $('.section-skills-container-left-mountain-bg-middle-container').css({"transform" : 'translate(' + amountMovedX / 30 + 'px , 0px)'});
     
        $('.section-skills-container-left-mountain-bg-bottom-container').css({"transform" : 'translate(' + amountMovedX / 80 + 'px , 0px)'});
    });
});












