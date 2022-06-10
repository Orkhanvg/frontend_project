

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






    // add basket
  //  check box dropdown\

  var options = [];

$( '.dropdown-menu a' ).on( 'click', function( event ) {

   var $target = $( event.currentTarget ),
       val = $target.attr( 'data-value' ),
       $inp = $target.find( 'input' ),
       idx;

   if ( ( idx = options.indexOf( val ) ) > -1 ) {
      options.splice( idx, 1 );
      setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
   } else {
      options.push( val );
      setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
   }

   $( event.target ).blur();
      
   console.log( options );
   return false;
});






// -+

function wcqib_refresh_quantity_increments() {
  jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
      var c = jQuery(b);
      c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
  })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
  var a = this,
      b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
  wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
  wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
  var a = jQuery(this).closest(".quantity").find(".qty"),
      b = parseFloat(a.val()),
      c = parseFloat(a.attr("max")),
      d = parseFloat(a.attr("min")),
      e = a.attr("step");
  b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});