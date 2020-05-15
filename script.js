// ----------------------------------------------------------------------

// Draggable Files Starts

$(document).ready(function () {
  var a = 3;
  var lowOpacity = "80%";
  var highOpacity = "100%";

  $('.pdf,.txt,.folder,.jpg,.mp3').draggable({
    containment: '.dragZone',

    start: function (event, ui) {
      $(this).css("z-index", a++);
      $(this).css("opacity", lowOpacity);
    },

    stop: function (event, ui) {
      $(this).css("opacity", highOpacity);
    }
  });

  $('.dragZone div').click(function () {
    $(this).addClass('top').removeClass('bottom');
    $(this).siblings().removeClass('top').addClass('bottom');
    $(this).css("z-index", a++);
  });
});

// Draggable Files Section Ends

// ----------------------------------------------------------------------

// Click/Drag Starts

// Click on Desktop Icons - Distinguish betweem drag and click

// PDF ------------------------------------------------------------------

// CV
$('#cv').on('mousedown', function () {
  $(this).data('p0', { x: event.pageX, y: event.pageY });
}).on('mouseup', function (event) {
  var p0 = $(this).data('p0'),
    p1 = { x: event.pageX, y: event.pageY },
    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

  if (d < 4) { // distinguish between drag and click
    window.open("files/AlpArgun_CV.pdf", '_blank');
  }
});

// TXT ------------------------------------------------------------------

// About Me

$('#about-me').on('mousedown', function () {
  $(this).data('p0', { x: event.pageX, y: event.pageY });
}).on('mouseup', function (event) {
  var p0 = $(this).data('p0'),
    p1 = { x: event.pageX, y: event.pageY },
    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

  if (d < 4) {
    $('#modal-about-me').modal('show');
  }
});

// Projects 

$('#projects').on('mousedown', function () {
  $(this).data('p0', { x: event.pageX, y: event.pageY });
}).on('mouseup', function (event) {
  var p0 = $(this).data('p0'),
    p1 = { x: event.pageX, y: event.pageY },
    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

  if (d < 4) {
    $('#modal-projects').modal('show');
  }
});

// README

$('#read-me').on('mousedown', function () {
  $(this).data('p0', { x: event.pageX, y: event.pageY });
}).on('mouseup', function (event) {
  var p0 = $(this).data('p0'),
    p1 = { x: event.pageX, y: event.pageY },
    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

  if (d < 4) {
    $('#modal-read-me').modal('show');
  }
});

// MP3 ------------------------------------------------------------------

song1 = $("#modal-song1 audio");
song2 = $("#modal-song2 audio");

// Song 1
$('#song1').on('mousedown', function () {
  $(this).data('p0', { x: event.pageX, y: event.pageY });
}).on('mouseup', function (event) {
  var p0 = $(this).data('p0'),
    p1 = { x: event.pageX, y: event.pageY },
    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

  if (d < 4) {
    $('#modal-song1').modal('show');
  }
});

var song1 = new Audio('dark.mp3');

// Play the song automatically when the modal is opened
$('#modal-song1').on('show.bs.modal', function () {
  $("#modal-song1 audio").each(function () {
    //this.currentTime = 0; // Reset time
    this.play(); // Stop playing
  });
})

// Stop audio when modal is closed
// $('#modal-song1').on('hide.bs.modal', function () {
//   $("#modal-song1 audio").each(function () {
//     this.pause(); // Stop playing
//     this.currentTime = 0; // Reset time
//   });
// })

// Song 2
$('#song2').on('mousedown', function () {
  $(this).data('p0', { x: event.pageX, y: event.pageY });
}).on('mouseup', function (event) {
  var p0 = $(this).data('p0'),
    p1 = { x: event.pageX, y: event.pageY },
    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

  if (d < 4) {
    $('#modal-song2').modal('show');
  }
});

// Play the song automatically when the modal is opened
$('#modal-song2').on('show.bs.modal', function () {
  $('#modal-song2 audio').each(function () {
    //this.currentTime = 0; // Reset time
    this.play(); // Stop playing
  });
})

// Stop audio when modal is closed
// $('#modal-song2').on('hide.bs.modal', function () {
//   $('#modal-song2 audio').each(function () {
//     this.pause(); // Stop playing
//     this.currentTime = 0; // Reset time
//   });
// })

// Automatically stop other audio when an audio is played
document.addEventListener('play', function (e) {
  var audios = document.getElementsByTagName('audio');
  for (var i = 0, len = audios.length; i < len; i++) {
    if (audios[i] != e.target) {
      audios[i].pause();
      audios[i].currentTime = 0;
    }
  }
}, true);


// JPG ------------------------------------------------------------------

// Image 1
$('#jpg-alp1').on('mousedown', function () {
  $(this).data('p0', { x: event.pageX, y: event.pageY });
}).on('mouseup', function (event) {
  var p0 = $(this).data('p0'),
    p1 = { x: event.pageX, y: event.pageY },
    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

  if (d < 4) {
    $('#modal-jpg-alp1').modal('show');
  }
});

// Image 2
$('#jpg-alp2').on('mousedown', function () {
  $(this).data('p0', { x: event.pageX, y: event.pageY });
}).on('mouseup', function (event) {
  var p0 = $(this).data('p0'),
    p1 = { x: event.pageX, y: event.pageY },
    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

  if (d < 4) {
    $('#modal-jpg-alp2').modal('show');
  }
});

//  Click/Drag Ends

// ----------------------------------------------------------------------

// Time and Day Starts

// Show time and day dynamically on the navbar
function startTime() {
  var today = new Date();

  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  var d = weekday[today.getDay()];
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
    d + " " + h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

// Time and Day Ends

// ----------------------------------------------------------------------

// Dock Effects Starts

// Instagram
$("#instagram").hover(
  function () { // hover on
    $("#instagram").css("transition", "all .2s ease-in-out");
    $("#instagram img").css("transform", "scale(3)");
    $("#instagram img").css("transform-origin", "bottom");

    $("#facebook").css("transition", "all .2s ease-in-out");
    $("#facebook img").css("transform", "scale(1.75)");
    $("#facebook img").css("transform-origin", "bottom");
    $("#facebook").css("margin-left", "25px");
  },
  function () { // hover off
    $("#instagram").css("transition", "all .2s ease-in-out");
    $("#instagram img").css("transform", "scale(1)");
    $("#instagram img").css("transform-origin", "bottom");

    $("#facebook").css("transition", "all .2s ease-in-out");
    $("#facebook img").css("transform", "scale(1)");
    $("#facebook img").css("transform-origin", "bottom");
    $("#facebook").css("margin-left", "0px");
  }
);

// Facebook
$("#facebook").hover(
  function () { // hover on
    $("#facebook").css("transition", "all .2s ease-in-out");
    $("#facebook img").css("transform", "scale(3)");
    $("#facebook img").css("transform-origin", "bottom");

    $("#twitter").css("transition", "all .2s ease-in-out");
    $("#twitter img").css("transform", "scale(1.75)");
    $("#twitter img").css("transform-origin", "bottom");
    $("#twitter").css("margin-left", "25px");

    $("#instagram").css("transition", "all .2s ease-in-out");
    $("#instagram img").css("transform", "scale(1.75)");
    $("#instagram img").css("transform-origin", "bottom");
    $("#instagram").css("margin-right", "25px");
  },
  function () { // hover off
    $("#facebook").css("transition", "all .2s ease-in-out");
    $("#facebook img").css("transform", "scale(1)");
    $("#facebook img").css("transform-origin", "bottom");

    $("#twitter").css("transition", "all .2s ease-in-out");
    $("#twitter img").css("transform", "scale(1)");
    $("#twitter img").css("transform-origin", "bottom");
    $("#twitter").css("margin-left", "0px");

    $("#instagram").css("transition", "all .2s ease-in-out");
    $("#instagram img").css("transform", "scale(1)");
    $("#instagram img").css("transform-origin", "bottom");
    $("#instagram").css("margin-right", "0px");
  }
);


// Twitter
$("#twitter").hover(
  function () { // hover on
    $("#twitter").css("transition", "all .2s ease-in-out");
    $("#twitter img").css("transform", "scale(3)");
    $("#twitter img").css("transform-origin", "bottom");

    $("#linkedin").css("transition", "all .2s ease-in-out");
    $("#linkedin img").css("transform", "scale(1.75)");
    $("#linkedin img").css("transform-origin", "bottom");
    $("#linkedin").css("margin-left", "25px");

    $("#facebook").css("transition", "all .2s ease-in-out");
    $("#facebook img").css("transform", "scale(1.75)");
    $("#facebook img").css("transform-origin", "bottom");
    $("#facebook").css("margin-right", "25px");
  },
  function () { // hover off
    $("#twitter").css("transition", "all .2s ease-in-out");
    $("#twitter img").css("transform", "scale(1)");
    $("#twitter img").css("transform-origin", "bottom");

    $("#linkedin").css("transition", "all .2s ease-in-out");
    $("#linkedin img").css("transform", "scale(1)");
    $("#linkedin img").css("transform-origin", "bottom");
    $("#linkedin").css("margin-left", "0px");

    $("#facebook").css("transition", "all .2s ease-in-out");
    $("#facebook img").css("transform", "scale(1)");
    $("#facebook img").css("transform-origin", "bottom");
    $("#facebook").css("margin-right", "0px");
  }
);

// Linkedin
$("#linkedin").hover(
  function () { // hover on
    $("#linkedin").css("transition", "all .2s ease-in-out");
    $("#linkedin img").css("transform", "scale(3)");
    $("#linkedin img").css("transform-origin", "bottom");

    $("#github").css("transition", "all .2s ease-in-out");
    $("#github img").css("transform", "scale(1.75)");
    $("#github img").css("transform-origin", "bottom");
    $("#github").css("margin-left", "25px");

    $("#twitter").css("transition", "all .2s ease-in-out");
    $("#twitter img").css("transform", "scale(1.75)");
    $("#twitter img").css("transform-origin", "bottom");
    $("#twitter").css("margin-right", "25px");
  },
  function () { // hover off
    $("#linkedin").css("transition", "all .2s ease-in-out");
    $("#linkedin img").css("transform", "scale(1)");
    $("#linkedin img").css("transform-origin", "bottom");

    $("#github").css("transition", "all .2s ease-in-out");
    $("#github img").css("transform", "scale(1)");
    $("#github img").css("transform-origin", "bottom");
    $("#github").css("margin-left", "0px");

    $("#twitter").css("transition", "all .2s ease-in-out");
    $("#twitter img").css("transform", "scale(1)");
    $("#twitter img").css("transform-origin", "bottom");
    $("#twitter").css("margin-right", "0px");
  }
);

// GitHub
$("#github").hover(
  function () { // hover on
    $("#github").css("transition", "all .2s ease-in-out");
    $("#github img").css("transform", "scale(3)");
    $("#github img").css("transform-origin", "bottom");

    $("#mail").css("transition", "all .2s ease-in-out");
    $("#mail img").css("transform", "scale(1.75)");
    $("#mail img").css("transform-origin", "bottom");
    $("#mail").css("margin-left", "25px");

    $("#linkedin").css("transition", "all .2s ease-in-out");
    $("#linkedin img").css("transform", "scale(1.75)");
    $("#linkedin img").css("transform-origin", "bottom");
    $("#linkedin").css("margin-right", "25px");
  },
  function () { // hover off
    $("#github").css("transition", "all .2s ease-in-out");
    $("#github img").css("transform", "scale(1)");
    $("#github img").css("transform-origin", "bottom");

    $("#mail").css("transition", "all .2s ease-in-out");
    $("#mail img").css("transform", "scale(1)");
    $("#mail img").css("transform-origin", "bottom");
    $("#mail").css("margin-left", "0px");

    $("#linkedin").css("transition", "all .2s ease-in-out");
    $("#linkedin img").css("transform", "scale(1)");
    $("#linkedin img").css("transform-origin", "bottom");
    $("#linkedin").css("margin-right", "0px");
  }
);

// Mail
$("#mail").hover(
  function () { // hover on
    $("#mail").css("transition", "all .2s ease-in-out");
    $("#mail img").css("transform", "scale(3)");
    $("#mail img").css("transform-origin", "bottom");

    $("#github").css("transition", "all .2s ease-in-out");
    $("#github img").css("transform", "scale(1.75)");
    $("#github img").css("transform-origin", "bottom");
    $("#github").css("margin-right", "25px");
  },
  function () { // hover off
    $("#mail").css("transition", "all .2s ease-in-out");
    $("#mail img").css("transform", "scale(1)");
    $("#mail img").css("transform-origin", "bottom");

    $("#github").css("transition", "all .2s ease-in-out");
    $("#github img").css("transform", "scale(1)");
    $("#github img").css("transform-origin", "bottom");
    $("#github").css("margin-right", "0px");
  }
);

// Dock Effects Ends

// ----------------------------------------------------------------------
 
// Animation Starts

// adapted from: https://codepen.io/franksLaboratory/pen/aborBPJ
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); // CTX MEANS CONTEXT
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;
let particleColor = 'rgba(217, 217, 217, 0.5)'; //'#d9d9d9'

// get mouse mouse position ///////////////////////////////
let mouse = {
	x: null,
	y: null,
  radius: ((canvas.height/90) * (canvas.width/90))
}
window.addEventListener('mousemove', 
	function(event){
		mouse.x = event.x;
		mouse.y = event.y;
});

// create Particle
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.speedX = this.directionX;
        this.speedY = this.directionY;
    }
    // create method to draw individual particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI * 2, false);

        ctx.fillStyle = particleColor;
	    ctx.fill();
    }

    // check particle position, check mouse position, move the paticle, draw the particle
    update() {
        // check if particle is still within canvas
        if (this.x > canvas.width || this.x < 0){
			this.directionX = -this.directionX;
            this.speedX = this.directionX;
	    } if (this.y + this.size > canvas.height || this.y - this.size < 0){
		    this.directionY = -this.directionY;
            this.speedY = this.directionY;
	    }
        // check mouse position/particle position - collision detection
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < mouse.radius + this.size){
            if(mouse.x < this.x && this.x < canvas.width - this.size*10){
               this.x+=10;
            }
            if (mouse.x > this.x && this.x > this.size*10){
                this.x-=10;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size*10){
                this.y+=10;
            }
            if (mouse.y > this.y && this.y > this.size*10){
                this.y-=10;
            }
        }
        // move particle
        this.x += this.directionX;
        this.y += this.directionY;
        // call draw method
        this.draw();
    }
}

// create particle array 
function init(){
    particleArray = [];
    let numberOfParticles = (canvas.height*canvas.width)/7000;
    for (let i=0; i<numberOfParticles; i++){
        let size = (Math.random()*2)+1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 2) - 1;
        let directionY = (Math.random() * 2) - 1;
        
        let color = particleColor;
        particleArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// create animation loop
function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,innerWidth,innerHeight);
	
	for (let i = 0; i < particleArray.length; i++){
		particleArray[i].update();
	}
}
init();
animate();


// RESIZE SETTING - empty and refill particle array every time window changes size + change canvas size
window.addEventListener('resize',
	function(){
		canvas.width = innerWidth;
		canvas.height = innerHeight;
        mouse.radius = ((canvas.height/80) * (canvas.width/80));
		init();
	}
)
// 2) SET MOUSE POSITION AS UNDEFINED when it leaves canvas//////
window.addEventListener('mouseout',
	function(){
		mouse.x = undefined;
	    mouse.y = undefined;
        console.log('mouseout');
	}
)

// Animation Ends