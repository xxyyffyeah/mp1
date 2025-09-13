/* Your JS here. */
// console.log('Hello World!')
const navLinks = document.querySelectorAll('#header nav a');
const sections = document.querySelectorAll('main section');
const header = document.querySelector('#header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    let current = '';
    const currentScroll = window.pageYOffset;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        //console.log('Section Top:', sectionTop, 'Current Scroll:', currentScroll, 'Header Height:', headerHeight);
        if (currentScroll + headerHeight >= sectionTop && currentScroll + headerHeight < sectionTop + section.offsetHeight) {
            current = section.getAttribute('id');
        }
    })
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    })
    if(currentScroll > 50){
        header.classList.remove('onTop');
        navLinks.forEach(link => {
            link.classList.remove('onTop');
        });
    }
    else{
        header.classList.add('onTop');
        navLinks.forEach(link => {
            link.classList.add('onTop');
        }); 
    }
});