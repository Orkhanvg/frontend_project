

var $maxWidthElement = $('.navbar'),
  maxWidth = $maxWidthElement.width();

function positionDropdowns() {
  $('.dropdown-menu').each(function() {
    $(this).removeClass('dropdown-menu-right');
    var $navItem = $(this).closest('.dropdown'),
      dropdownWidth = $(this).outerWidth(),
      dropdownOffsetLeft = $navItem.offset().left,
      dropdownOffsetRight = maxWidth - (dropdownOffsetLeft + dropdownWidth),
      linkCenterOffsetLeft = dropdownOffsetLeft + $navItem.outerWidth() / 2,
      outputCss = {
        left: 0,
        right: '',
        width: ''
      };

    if ((linkCenterOffsetLeft - dropdownWidth / 2 > 0) & (linkCenterOffsetLeft + dropdownWidth / 2 < maxWidth)) {
      // center the dropdown menu if possible
      outputCss.left = -(dropdownWidth / 2 - $navItem.outerWidth() / 2);
    } else if ((dropdownOffsetRight < 0) & (dropdownWidth < dropdownOffsetLeft + $navItem.outerWidth())) {
      // set the dropdown menu to left if it exceeds the viewport on the right
      $(this).addClass('dropdown-menu-right');
      outputCss.left = '';
    } else if (dropdownOffsetLeft + dropdownWidth > maxWidth) {
      // full width if the dropdown is too large to fit on the right
      outputCss.left = 0;
      outputCss.right = 0;
      outputCss.width = maxWidth + 'px';
    }
    $(this).css({
      left: outputCss.left,
      right: outputCss.right,
      width: outputCss.width
    });
  });
}

$("#trigger-btn").on("click", function() {
  positionDropdowns();
  $(this)
    .text("Done!")
    .addClass("btn-success")
    .removeClass("btn-danger");
});

var resizeTimer;

$(window).on("resize", function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    maxWidth = $maxWidthElement.width();
    positionDropdowns();
  }, 250);
});

// countdowner


let days = document.getElementById("days")
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")
    let currentYear = new Date().getFullYear();

    let endTime = new Date (`June 16 ${currentYear} 00:00:00`)

    function updateCountdownTime(){
        let currentTime = new Date();
        let diff = endTime-currentTime
        let day = Math.floor(diff/1000/60/60/24)
        let hour = Math.floor(diff/1000/60/60)%24;
        let min = Math.floor(diff/1000/60)%60;
        let sec = Math.floor(diff/1000)%60;
        days.innerHTML=day<10 ? `0` + day:day
        hours.innerHTML=hour<10 ? `0` + hour:hour
        minutes.innerHTML=min<10 ? `0` + min:min
        seconds.innerHTML=sec<10 ? `0` + sec:sec
    }
    setInterval(updateCountdownTime,1000)

