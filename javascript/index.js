
        $(".navigation ul li i").click(function()

        {
           $(".navigation").after("<p class='firstHr'>");
           $(".footer").prepend("<p class='firstHr'>");
           $(".upper-cloud ,.bottom-cloud").css("opacity","0.2");
           $(".navigation ul li a").css("color","rgb(185, 147, 220)");
          
       
           $(".firstHr").css({"border":"1px solid rgba(100,100,100,0.2)" ,"border-top":"none"});
           $("*").css("background-color","rgb(40,39,50)");
           $("p ,span").css("color" ,"white");
       
         }) ;



