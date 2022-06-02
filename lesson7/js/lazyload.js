// get all images with data-src attr
let imagesToLoad = document.querySelectorAll('img[data-src]');

// parameters for the IntersectionObserver
const imgOptions = {
    treshold: 0,
    rootMargin: "0px 0px 50px 0px",
};

// function to replace src with the data-src
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });

  // loop through all images to check status and load if necessary
//   observe the images with the observer
  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
    // just load all images normally if not supported by the browser
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
