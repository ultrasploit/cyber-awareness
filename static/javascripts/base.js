const header = document.querySelector('header');
const navigation = document.querySelector('header nav');
const mobile_menu_btn = document.getElementById('mobile_menu_btn');

// Handle navigation ( Header )
function handel_navigation() {

    if ( navigation.classList.contains('active') ) {}
    
    else if ( window.scrollY <= 80 ) {
        header.style.setProperty('--transition-duration', `0`);
        header.style.setProperty('--y-position', `-${window.scrollY}px`);
        header.style.setProperty('--navigation-background', `transparent`);

    }   else if ( window.scrollY <= window.innerHeight ) {
        header.style.setProperty('--transition-duration', `.3s`);
        header.style.setProperty('--navigation-background', `var(--background-color)`);
        header.style.setProperty('--y-position', `-70px`);
        
    }   else if ( window.scrollY > window.innerHeight ) {
        header.style.setProperty('--navigation-background', `var(--background-color)`);
        header.style.setProperty('--txt-primary-color', `#fff`);
        header.style.setProperty('--border-width', `1px`);
        header.style.setProperty('--y-position', `0`);

    }
}

// Handling the navigation on scroll
document.addEventListener('scroll', function (e) {
    handel_navigation();

});

window.addEventListener('DOMContentLoaded', function (e) {
    handel_navigation();
});

// Toggling the navigation on mobile
mobile_menu_btn.addEventListener('click', function(e) {
    e.preventDefault();
    
    mobile_menu_btn.classList.toggle('close');
    navigation.classList.toggle('active');
});