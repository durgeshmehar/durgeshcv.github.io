   function sunImage() {
      $(".navigation ul li#light i").toggle();

   };
   $(".navigation ul li i#sun").hide();

$(".navigation ul li#light").click(function () {

     $(".navigation ul li a i.icon-color").animate({ left: "2.5vw" }, 400);
     $("body").toggleClass("dark-mode");
     setTimeout(sunImage, 300);
});
