
let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
  image.removeAttribute('data-src');
  };
};

function imageLazyLoad() {

if('IntersectionObserver' in window) {
  //console.log('IntersectionObserver');
  let options = {
    rootMargin: '0px',
    threshold: 0.7
  }
  
  const observer = new IntersectionObserver( (items, observer) => {
    items.forEach( (item) => {
     // console.log("item.target", item)
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  } 
  // , options
  );

  imagesToLoad = document.querySelectorAll('img[data-src]');
  imagesToLoad.forEach( (img) => {
    observer.observe(img);
  });
} else {
 // console.log('No support IntersectionObserver'); 
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

}