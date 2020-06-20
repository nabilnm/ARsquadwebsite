var i = 0; //startpunt de eerste foto
var images =[];
var time=9000;

//Foto lijst Het is mogelijk om nog meer fotos toe te voegen. 
images[0] = '/images/slider04.jpg';
images[1] = '/images/slider05.jpg';

function changeImg() {
    document.Slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}
    window.onload = changeImg;

     //Burger de class names die uit de html file worden gehaald
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        
        burger.addEventListener('click', () => {
            //toggle navigatie
            nav.classList.toggle('nav-active');
    
            //Animatie Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            }else{
                link.style.animation = `navlinkFade 0.4s ease forwards ${index / 7 + 1}s`;
            }
        });
    
          //burger animation
        burger.classList.toggle('toggle');  
        })
        
    
        
    }
    
    navSlide();