// var carouselHeight = 143;

// setInterval(function(){
//   var carouselEnclosure = document.getElementById('carouselInner');
//   if(carouselEnclosure){
//     console.log(carouselEnclosure.clientHeight);
//     if(carouselHeight > carouselEnclosure.clientHeight){
//       carouselEnclosure.clientHeight = carouselHeight
//     } else {
//       carouselHeight = carouselEnclosure.clientHeight 
//     }
//   }
// }, [1000])

// window.addEventListener('load', (event) => {
//   carouselEnclosure = document.getElementById('carouselEnclosure');

//   if(carouselHeight){
//     carouselEnclosure.clientHeight = carouselHeight
//   }

//   setCarouselHeight()
  
//   setInterval(function(){
//     setCarouselHeight();
//   }, [9000])
// });


// function setCarouselHeight() {
//   var carouselAzhar = document.getElementById('carouselAzhar');
//   var carouselAldos = document.getElementById('carouselAldos');
//   var carouselLesSchwab = document.getElementById('carouselLesSchwab');

//   if((carouselAzhar && carouselAzhar.clientHeight > carouselHeight) || (carouselAldos && carouselAldos.clientHeight > carouselHeight) || (carouselLesSchwab && carouselLesSchwab.clientHeight > carouselHeight)){
//     carouselHeight = (carouselAzhar.clientHeight > carouselHeight) ? carouselAzhar.clientHeight : carouselHeight;
//     carouselHeight = (carouselAldos.clientHeight > carouselHeight) ? carouselAldos.clientHeight : carouselHeight;
//     carouselHeight = (carouselLesSchwab.clientHeight > carouselHeight) ? carouselLesSchwab.clientHeight : carouselHeight;
//   }
//   console.log(carouselHeight);
//   carouselEnclosure.clientHeight = carouselHeight;
// }

// function resizeCarousel(){
//   setCarouselHeight();
// }

// function enclosureChange(){
//   console.log(carouselEnclosure.clientHeight)
// }