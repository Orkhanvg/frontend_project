

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



$('.tesmath').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});