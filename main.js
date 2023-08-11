window.onload = function () {
    var box = document.getElementsByClassName('post__card');
    var btn = document.getElementById('button');
    for (let i = 10; i < box.length; i++) {
        box[i].style.display = "none";
    }

    var countD = 5;
    btn.addEventListener("click", function() {
        var box = document.getElementsByClassName('post__card');
        countD += 5;
        if (countD <= box.length){
            for(let i=0;i<countD;i++){
                box[i].style.display = "block";
            }
        }

    })
}
/*mobile-menu*/
let menuBtn = document.querySelector('.header__hamburger');
let menu = document.querySelector('.header__nav');
let btn = document.querySelector('.header__btn');

menuBtn.addEventListener('click' , function(){
    menu.classList.toggle('active');
    btn.classList.toggle('active');
});
/*modal-win*/
let modalBtn = document.querySelectorAll(".btn__call-me#btn__call-me");
let closeBtn = document.querySelector('.close');
let modal = document.querySelector('.modal');
let darkening = document.querySelector('.darkening');
for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click' , function(){
        modal.classList.toggle('active');
        darkening.classList.toggle('active');
        darkening.addEventListener('click' , function(){
            darkening.classList.remove('active');
            modal.classList.remove('active');
        });
        closeBtn.addEventListener('click' , function(){
            darkening.classList.remove('active');
            modal.classList.remove('active');
        })
    });
}


