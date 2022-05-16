let menu = document.querySelector('#menu-bar');//get to value of menu
let navbar = document.querySelector('.navbar');//get to value of navbar
let header = document.querySelector('.header-2');//get to value of header 02


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

 //onscroll up or down after menu bar lock
window.onscroll = () =>{           
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

}

