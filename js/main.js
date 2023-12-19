
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    prevArrow: 
    `
    <button class="slider__arrow slider__arrow--left">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.58333 43.75L28.75 25L9.58333 5.83333L15.4167 0L40.4167 25L15.4167 50L9.58333 43.75Z" fill="#fff"/>
        </svg>
    </button>
    `,
    nextArrow: 
    `
    <button class="slider__arrow slider__arrow--right">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.58333 43.75L28.75 25L9.58333 5.83333L15.4167 0L40.4167 25L15.4167 50L9.58333 43.75Z" fill="#fff"/>
        </svg>
    </button>
    `,
});