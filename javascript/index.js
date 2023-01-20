
(function () {
   var options = {
      telegram: "Durgeshmehar", // Telegram bot username
      whatsapp: "+91 9359230721", // WhatsApp number
      call_to_action: "Chat with Durgesh", // Call to action
      button_color: "#129BF4", // Color of button
      position: "right", // Position may be 'right' or 'left'
      order: "telegram,whatsapp", // Order of buttons
   };
   var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
   var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
   s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
   var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();


visibilitySun();
var clicks = 0;
$(document).ready(function(){
$(".navigation ul li#light").click(function () {

   if (clicks == 0) {
      callSun();
      clicks++;

   }
   else if (clicks === 1) {
      callMoon();
      clicks--;

   }
}
);
});


function callSun() {
   $(".navigation ul li a i.icon-moon").animate({ left: "3.2vw" }, 300);  
   setTimeout(visibilityMoon, 300);
   $("body").toggleClass("dark-mode");
   setTimeout(SunBright, 300);
}
function callMoon() {
   $(".navigation ul li a i.icon-moon").css("translate", "-3.2vw");
   $(".navigation ul li a i#sun").animate({ right: "3.2vw" }, 300);
   setTimeout(visibilitySun, 300);
   setTimeout(MoonBright, 300);
   $("body").toggleClass("dark-mode");

}


function SunBright() {
   $(".navigation ul li a i#sun").css("visibility", "visible");
}
function MoonBright() {
   $(".navigation ul li a i.icon-moon").css("visibility", "visible");
}
function visibilityMoon() {
   $(".navigation ul li a i.icon-moon").css("visibility", "hidden");
}
function visibilitySun() {
   $(".navigation ul li a i#sun").css("visibility", "hidden");
}



$(".contact .detail span").hide();

$(".contact .detail i").hover(function () {
   var a = this.getAttribute('class').split(" ");

   $(".contact .detail span#" + a[1] + "-id").slideUp().show();

}, function () {
   var a = this.getAttribute('class').split(" ");
   $(".contact .detail span#" +a[1] + "-id").hide();

});


// Creating navigation for mobile


 if (window.matchMedia("(max-width: 600px)").matches) {
              nav_width =280;
 }
 if(window.matchMedia("(max-width: 480px)").matches) {
   nav_width =190;
}

function callCross(){
   $('#bar').css("display","none");
   $('#cross').css("display","block");
   $('#cross').css("visibility","visible");
};

var check =0;
$(document).ready(function(){

   $("#bar").click(function(e){
  
      $('.navigation').css("width","0px");
      $('.navigation').css("visibility","visible").animate({ width:nav_width},300);
      setTimeout( callCross, 100);
   
     e.stopPropagation();
        $("body").on('click', function(e) {
           $('.navigation').css("display","block").animate({ width:-50 },300);
           $('#cross').css("display","none");
           $('#bar').css("display","block");

         });
      
   });
});






