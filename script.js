// Add event listener to window load
window.addEventListener('load', () => {
    // Fade in hero section
    const hero = document.querySelector('.hero');
    hero.classList.add('fade-in');

    // Add smooth transition to header
    const header = document.querySelector('header');
    header.classList.add('smooth-transition');

    // Add event listener to video play
    const video = document.querySelector('video');
    video.addEventListener('play', () => {
        // Add fade-in animation to video container
        const videoContainer = document.querySelector('.video-container');
        videoContainer.classList.add('fade-in');
    });
});