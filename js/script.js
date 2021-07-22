document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        pagination: false,
        // autoplay: 'playing',
        // rewind: true,
        padding: {
            left : '2rem',
            right: '2rem',
        }, 
        gap: '20px',
        // width: '1115px',
        // fixedWidth: '820px',
        autoWidth: true,
        breakpoints: {
            1024: {
                pagination: true,
                arrows: false,
                fixedWidth: '100%'  ,
                gap: '120px'
            }
        }      
    }).mount();    
});
