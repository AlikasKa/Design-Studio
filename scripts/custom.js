$(document).ready(function(){

// MENU navigation

  var menuicon = document.getElementById('menu-icon');
          var exit = document.getElementById('exit-icon');
          var main_menu = document.getElementById('main_menu');
          menuicon.addEventListener('click', function(){
            main_menu.classList.toggle('open');
          });

          exit.addEventListener('click', function(){
            main_menu.classList.toggle('open');
          });

// Smooth scrool to section

          // Select all links with hashes
          $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
              // On-page links
              if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
              ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                  // Only prevent default if animation is actually gonna happen
                  event.preventDefault();
                  $('html, body').animate({
                    scrollTop: target.offset().top
                  }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                      return false;
                    } else {
                      $target.focus(); // Set focus again
                    };
                  });
                }
              }
            });

// HEART MAKE FILL ON click

$(".favourite_icon").click(function(){
$(this).css({"color": "#ebb240"}).removeClass('fa-heart-o').addClass('fa-heart');
});

// READ MORE news starts

            // the 1st news

             var text = $('.text-overflow'),
                  btn = $('.btn-overflow'),
                    h = text[0].scrollHeight;

             if(h > 60) {
             	btn.addClass('less');
             	btn.css('display', 'block');
             }

             btn.click(function(e)
             {
               e.stopPropagation();

               if (btn.hasClass('less')) {
                   btn.removeClass('less');
                   btn.addClass('more');
                   btn.text('Read less');

                   text.animate({'height': h});
               } else {
                   btn.addClass('less');
                   btn.removeClass('more');
                   btn.text('Read more');
                   text.animate({'height': '60px'});
               }
             });

             //the 2nd news

             var text2 = $('.text-overflow2'),
                  btn2 = $('.btn-overflow2'),
                    h2 = text[0].scrollHeight;

                    if(h2 > 60) {
                     btn2.addClass('less');
                     btn2.css('display', 'block');
                    }

                    btn2.click(function(e)
                    {
                      e.stopPropagation();

                      if (btn2.hasClass('less')) {
                          btn2.removeClass('less');
                          btn2.addClass('more');
                          btn2.text('Read less');

                          text2.animate({'height': h2});
                      } else {
                          btn2.addClass('less');
                          btn2.removeClass('more');
                          btn2.text('Read more');
                          text2.animate({'height': '60px'});
                      }
                    });

});
