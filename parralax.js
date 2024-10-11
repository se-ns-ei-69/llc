window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    document.querySelector('.parallax-image').style.transform = `translateY(${scrolled * 0.5}px)`;
});
