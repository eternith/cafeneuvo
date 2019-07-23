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

var myMap = L.map('map').setView([49.2655, -123.106], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoicGV0ZXJidWs4IiwiYSI6ImNqeWdnOHgzZDAwcXgzY3Q0Z2oxcDY4NjAifQ.mAZ119eFPABKncLt5MdxsQ'
}).addTo(myMap);

var marker = L.marker([49.265, -123.101]).addTo(myMap)
  .bindPopup('<b>Cafe Neuvo</b><br>1251 Main Street')
  .openPopup();

