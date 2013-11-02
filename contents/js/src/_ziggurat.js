// === ZIGGURAT === //

// Simple slideshow toggle
$(".slideshow").click(function() {
  $(".frame-outer").toggleClass("hide");
  $(".slideshow-toggle").toggleClass("show");
});

// Insert image caption; adapted from http://davemcmillan.net/447/snippets/use-jquery-to-display-an-image-alt-tag-as-a-caption-overlay/
function captionator(callback) {
  $(".content img").each(function() {
    var imgCaption = $(this).attr("alt");
    if ( (imgCaption != '') && (typeof imgCaption != 'undefined') && ($(this).css('float') != 'left') && ($(this).css('float') != 'right') ) {
      $(this).unwrap().wrap("<figure></figure>");
      $("<figcaption>"+imgCaption+"</figcaption>").insertAfter(this);
    }
  });
  callback();
}

// Add margins to figure elements to maintain vertical rhythm
function baseliner() {
  $('.content figure').baseline(32);
}

// Bug: offsetHeight returns a wrongly rounded value; baseline is offset 1px per image unless DOM completely loads first
$(window).load(function() {
  // Adjust baseline after images have been captioned
  captionator(baseliner);
});
