// 1) whatsapp Telegram Feature
(function () {
   var options = {
      telegram: "Durgeshmehar", 
      whatsapp: "+91 9359230721", 
      call_to_action: "Chat with Me", 
      button_color: "#129BF4", 
      position: "right", 
      order: "telegram,whatsapp", 
   };
   var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
   var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
   s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
   var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();

// 2) Creating Dark Mode Feature

visibilitySun();
var clicks = 0;

$(document).ready(function(){
	$("#light").click(function () {
		if (clicks === 0) {
			callSun();
			clicks=1;
		}
		else if (clicks === 1) {
			callMoon();
			clicks=0;
		}
	}
	);
});

function callSun() {
   $(".icon-moon").animate({ left: "2.2vw" }, 300);  
   setTimeout(visibilityMoon, 300);
   $("body").toggleClass("dark-mode");
   setTimeout(SunBright, 300);
}
function callMoon() {
   $(".icon-moon").css("translate", "0vw");
   $("#sun").animate({ right: "5.2vw" }, 300);
   setTimeout(visibilitySun, 300);
   setTimeout(MoonBright, 300);
   $("body").toggleClass("dark-mode");
}

function SunBright() {
   $("#sun").css("visibility", "visible");
}
function MoonBright() {
   $(".icon-moon").css("visibility", "visible");
}
function visibilityMoon() {
   $(".icon-moon").css("visibility", "hidden");
}
function visibilitySun() {
   $("#sun").css("visibility", "hidden");
}

// 3) Creating Contact label Feature
$(".contact .detail .contact-item > span").hide();

$(".contact .detail .contact-item i").hover(function () {
   var a = this.getAttribute('class').split(" ");
   $(".contact .detail .contact-item span#" + a[1] + "-id").slideUp().show();

}, function () {
	var a = this.getAttribute('class').split(" ");
	$(".contact .detail .contact-item span#" + a[1] + "-id").hide();
});

// 4) Creating Mobile Navigation Feature

const primaryNav = document.querySelector('#primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const bodyToggle = document.querySelector('body');

navToggle.addEventListener('click', (event) => {
    event.stopPropagation(); 
	const visible = navToggle.getAttribute('aria-expanded');
	if (visible === "false") {
		primaryNav.setAttribute("data-visible", "true");
		navToggle.setAttribute("aria-expanded", "true");
	} else {
		primaryNav.setAttribute("data-visible", "false");
		navToggle.setAttribute("aria-expanded", "false");
	}
});


bodyToggle.addEventListener('click', (event) => {
    // Check if the navigation slider is open and the click did not occur inside it
    const isVisible = primaryNav.getAttribute('data-visible') === 'true';
    if (isVisible && !primaryNav.contains(event.target)) {
        primaryNav.setAttribute("data-visible", "false");
		navToggle.setAttribute("aria-expanded", "false");
    }
});


// 5) Creating autoType Feature

function throttle(func, delay) {
	var timer = null;
	return function() {
	  var context = this;
	  var args = arguments;
	  clearTimeout(timer);
	  timer = setTimeout(function() {
		func.apply(context, args);
	  }, delay);
	};
}

var typed = new Typed(".auto-type", {
	strings : ["MERN Stack Developer" ,"Programmer","Blogger" ,"Problem Solver"],
	typeSpeed : 60,
	backSpeed : 40,
	loop : true
});


//6) Moving Animation Feature

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
	  const target = entry.target;
	  if (entry.isIntersecting) {
		target.classList.add('show1', 'show2', 'show3');
	  } else {
		target.classList.remove('show1', 'show2', 'show3');
	  }
	});
  });
  
  const hiddenElements = document.querySelectorAll('.hidden1, .hidden2, .hidden3');
  hiddenElements.forEach((el) => observer.observe(el));