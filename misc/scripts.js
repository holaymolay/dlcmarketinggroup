function resizeCarousel(){
  var carouselEnclosure = document.getElementById('carouselEnclosure');
  var carouselInner = document.getElementById('carouselInner');
  carouselEnclosure.clientHeight = carouselInner.clientHeight * 1.1;
  // console.log('carousel enclosure height: ', carouselEnclosure.clientHeight);
  // console.log('carousel inner height: ', carouselInner.clientHeight);
}