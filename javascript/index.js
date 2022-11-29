

visibilitySun();
var clicks=0;
$(".navigation ul li#light").click(function(){

   if(clicks ==0){
      callSun() ;
      clicks++;
      
   }
   else if(clicks ===1){
      callMoon() ;
      clicks--;

   }
}
);


function callSun() {
   $(".navigation ul li a i.icon-color").animate({ left: "3.2vw" }, 300);
   setTimeout(visibilityMoon, 300);
   $("body").toggleClass("dark-mode");
   setTimeout(SunBright, 300);
}
function callMoon() {
   $(".navigation ul li a i.icon-color").css("translate","-3.2vw");
   $(".navigation ul li a i#sun").animate({ right:"3.2vw" }, 300);
   setTimeout(visibilitySun, 300);
   setTimeout(MoonBright, 300);
   $("body").toggleClass("dark-mode");
  
}


function SunBright() { 
   $(".navigation ul li a i#sun").css("visibility", "visible");
}
function MoonBright() {
   $(".navigation ul li a i.icon-color").css("visibility", "visible");
}
function visibilityMoon() {
   $(".navigation ul li a i.icon-color").css("visibility", "hidden");
}
function visibilitySun() {
   $(".navigation ul li a i#sun").css("visibility", "hidden");
}





// comment down
// function sunImage() {
//    $(".navigation ul li#light i").toggle();
// };
// $(".navigation ul li i#sun").hide();

// $(".navigation ul li#light").click(function () {

//   $(".navigation ul li a i.icon-color").animate({ left: "2.5vw" }, 500);
//   $("body").toggleClass("dark-mode");
//   setTimeout(sunImage, 300);
// });
