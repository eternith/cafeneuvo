// window.onscroll = () => {
//   const header = document.querySelector('header');
//   if (this.scrollY <= 550)
//     header.className = "";
//   else
//     header.className = "underFold";
// };


// window.onscroll = function () { myFunction() };

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

$('.carousel').flickity({
  // options
  cellAlign: 'center',
  resize: true,
  wrapAround: true,
  imagesLoaded: true,
  pageDots: false,
  autoPlay: 1500
});
