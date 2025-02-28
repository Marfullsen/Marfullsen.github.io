document.addEventListener('DOMContentLoaded', function() {
    let options = null;
    var elems = document.querySelectorAll('.carousel');
    var instancesCarousel = M.Carousel.init(elems, options);
    var elems = document.querySelectorAll('.tooltipped');
    var instancesTooltip = M.Tooltip.init(elems, options);
  });