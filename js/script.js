document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        pagination: false,
        // autoplay: 'playing',
        // rewind: true,
        padding: {
            left : 0,
            right: '6rem',
        }, 
        gap: '20px',
        width: '916px' 
    }).mount();
} );