
  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
        animate: 200
    });
  } );


$("video").each(function () {
  var player = videojs(this.id, {
  });

  $("button#rewind").click(function () {
      player.currentTime(-10);
  });

  let geklikt = false;

  $("button#toggle").click(function () {
      if (!geklikt) {
          player.pause();
          geklikt = true;
      } else {
          player.play();
          geklikt = false;
      }
  });
});

$( ".video-js" ).each(function() {
  var player = videojs(this);

  player.on('ended', function() {
    $("#modal").toggleClass("active");
  });
});


$( "#modal" ).click(function() {
  $(this).toggleClass("active");
});



function buttonClick(buttonId) {
  var buttonHandle = "#" + buttonId
  switch ($(buttonHandle).attr('class')) {
      case 'player-button':
          var player = videojs($(buttonHandle).siblings(".video-js")[0])
          videojs.log(player);
          videojs.log(player.paused)
          if (!player.paused()) {
              player.pause();
              $(buttonHandle).html("<p>&#9658;</p>");
          } else {
              player.play();
              $(buttonHandle).html("<p>&#9612;&#9612;</p>");
          };
          break;
      case 'rewind-button':
        var player = videojs($(buttonHandle).siblings(".video-js")[0])
        var time = player.currentTime();
        player.currentTime(time - 10);
        break;
      case 'forward-button':
        var player = videojs($(buttonHandle).siblings(".video-js")[0])
        var time = player.currentTime();
        player.currentTime(time + 10);
        break;
  }
}
  
    
    
// // naam functie 
 function switchTheme(event) {
        if (event.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            $("#logo").attr('src','img/logo@2x.png');
            $("#leer").attr('src','img/blok1-wit.png');
            $("#codeer").attr('src','img/blok2-wit.png');
            $("#speel").attr('src','img/blok3-wit.png');
           
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            $("#logo").attr('src','img/logo-roze-mmt@2x.png');
            $("#leer").attr('src','img/blok1-leer.png');
            $("#codeer").attr('src','img/blok2-codeer.png');
            $("#speel").attr('src','img/blok3-speel.png'); 
        }
       toggleSwitch.addEventListener('change', switchTheme, false); 
    }
 
//    var modal = document.getElementById("myModal");

//    // Get the button that opens the modal
//    var btn = document.getElementById("myBtn");
   
//    // Get the <span> element that closes the modal
//    var span = document.getElementsByClassName("close")[0];

//       // Wrap every letter in a span
//       var textWrapper = document.querySelector('.ml1 .letters');
//       textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      
//       anime.timeline({loop: true})
//         .add({
//           targets: '.ml1 .letter',
//           scale: [0.3,1],
//           opacity: [0,1],
//           translateZ: 0,
//           easing: "easeOutExpo",
//           duration: 600,
//           delay: (el, i) => 70 * (i+1)
//         }).add({
//           targets: '.ml1 .line',
//           scaleX: [0,1],
//           opacity: [0.5,1],
//           easing: "easeOutExpo",
//           duration: 700,
//           offset: '-=875',
//           delay: (el, i, l) => 80 * (l - i)
//         }).add({
//           targets: '.ml1',
//           opacity: 0,
//           duration: 1000,
//           easing: "easeOutExpo",
//           delay: 1000
//         });

        
       
            
//         // player.on('ended', function() {
//         //     modal.style.display = "block";

//         //     span.onclick = function() {
//         //         modal.style.display = "none";
//         //     }
//         //     window.onclick = function(event) {
//         //         if (event.target == modal) {
//         //           modal.style.display = "none";
//         //         }
//         //       }

             
        
//         //     });
//         });

