
const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        if( entry.isIntersecting){
            entry.target.classList.add('show1');
            entry.target.classList.add('show2');
            entry.target.classList.add('show3');
        }
        else{
            entry.target.classList.remove('show1');
            entry.target.classList.remove('show2');
            entry.target.classList.remove('show3');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden1');
const hiddenElement = document.querySelectorAll('.hidden2');
const hiddenelement = document.querySelectorAll('.hidden3');

hiddenElements.forEach((el)=> observer.observe(el));
hiddenElement.forEach((el)=> observer.observe(el));
hiddenelement.forEach((el)=> observer.observe(el));