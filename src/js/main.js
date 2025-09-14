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
    if (currentScroll > 50) {
        header.classList.remove('onTop');
        navLinks.forEach(link => {
            link.classList.remove('onTop');
        });
    }
    else {
        header.classList.add('onTop');
        navLinks.forEach(link => {
            link.classList.add('onTop');
        });
    }
});

const prevButton = document.querySelector('.carousel_button_left');
const nextButton = document.querySelector('.carousel_button_right');
const slider_img = document.querySelector('.slider_wrapper img');
const sliderData = [{ url: './assets/carousel_pics/pic1.jpeg', alt: 'pic1' },
{ url: './assets/carousel_pics/pic2.jpeg', alt: 'pic2' },
{ url: './assets/carousel_pics/pic3.jpeg', alt: 'pic3' }];
let currentIndex = 0;
slider_img.src = sliderData[currentIndex].url;
slider_img.alt = sliderData[currentIndex].alt;

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderData.length) % sliderData.length;
    slider_img.src = sliderData[currentIndex].url;
    slider_img.alt = sliderData[currentIndex].alt;
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderData.length;
    slider_img.src = sliderData[currentIndex].url;
    slider_img.alt = sliderData[currentIndex].alt;
});


const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeButton = document.querySelector('.modal_close_button');
const modalImages = document.querySelectorAll('#modal .modal_grid img');

modalImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.classList.add('active');
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modalImage.style.display = 'block';
        document.body.style.overflow = 'hidden';
    })
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});
