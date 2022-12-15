$(document).ready(($) => {

     let containerImg = $('.slide');
     let imgWidth = $('img').width();
     let imgQuantity = $('.slides').length;
     let currentImg = 0

     containerImg.css('width', imgWidth * imgQuantity)
     console.log(imgWidth);

     setInterval(() => {
          $(containerImg).ready(() => {
               currentImg++;
               let pixelImg = -(currentImg - 1) * imgWidth
               containerImg.animate({
                    'left': pixelImg
               })
               if (currentImg === imgQuantity) {
                    currentImg = 0
               }
          })
     }, 5000)
});