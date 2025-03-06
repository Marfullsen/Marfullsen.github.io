document.addEventListener('DOMContentLoaded', function() {
    let options = null;
    // Tooltip for badges in about me modal.
    elems = document.querySelectorAll('.tooltipped');
    var instancesTooltip = M.Tooltip.init(elems, options);

    // Modal about me.
    options = null;
    elems = document.querySelectorAll('.modal');
    var instancesModal = M.Modal.init(elems, options);

    // manually coded elements.
    const items = document.querySelectorAll('.carousel-item-js');
    const carousel = document.querySelector('.carousel-js');
    let activeIndex = 2;
    let autoPlayInterval = null;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('active');
            item.style.zIndex = 1;
            let offset = index - activeIndex;
            if (offset < -2) offset += items.length;
            if (offset > 2) offset -= items.length;
            let scale = 1 - Math.abs(offset) * 0.1;
            let opacity = 1 - Math.abs(offset) * 0.3;
            let translateX = offset * 125;

            item.style.transform = `translateX(${translateX}px) scale(${scale})`;
            item.style.opacity = opacity;
            if (index === activeIndex) {
                item.classList.add('active');
                item.style.zIndex = 10;
            }
        });
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            activeIndex = (activeIndex + 1) % items.length;
            updateCarousel();
        }, 3000);
    }

    // Initial setup
    updateCarousel();
    startAutoPlay();

    // Click handlers
    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            activeIndex = index;
            updateCarousel();
        });
    });

    // Hover control
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
  });