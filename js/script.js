// smooth scroll to anchor
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});


// carousel plugin
$('.carousel').flickity({
  // options
  cellAlign: 'center',
  resize: true,
  wrapAround: true,
  imagesLoaded: true,
  pageDots: false,
  autoPlay: 1500
});



// Map plugin
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

