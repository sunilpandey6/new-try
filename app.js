const navSlide = () => {
    const burger = document.querySelector('.bur');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    
    burger.addEventListener('click', () => {
        // toggles navigation in small
        nav.classList.toggle('nav-active');        
        
        // animate line
        navLinks.forEach((link, index) => {
            console.log(index / 7 + 2);
            if(link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animtaion = `navFade 0.5s ease forwards ${index / 7 + 2}s`;
            }
        });
        // menu icon animation
        burger.classList.toggle('toggle');     
    });
    
}

navSlide();