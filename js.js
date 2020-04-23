


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

var textWrapper = document.querySelector('.ml5 .letters1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter1'>$&</span>");
anime.timeline({})
  
  .add({
    targets: '.ml5 .letter1',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 70*i
  })
  .add({
    targets: '.ml6 .letter2',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 550,
    delay: (el, i) => 50 * i
  });


  function initMap() { 
    var test= {lat: 27.2038, lng: 77.5011}; 
    var map = new google.maps.Map(document.getElementById('map'), { 
    zoom: 6, 
    center: test 
    }); 
    var marker = new google.maps.Marker({ 
    position: test, 
    map: map 
    }); 
  } ;
