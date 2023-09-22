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