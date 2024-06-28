document.addEventListener("DOMContentLoaded", () => {
    const timelineEvents = document.querySelectorAll('.timeline-event');

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        timelineEvents.forEach(event => {
            if (isElementInViewport(event)) {
                event.classList.add('show');
            } else {
                event.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});
