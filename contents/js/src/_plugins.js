// Simple slideshow toggle
$(".slideshow").click(function() {
  $(".frame-outer").toggleClass("hide");
  $(".slideshow-toggle").toggleClass("show");
});
// Insert image caption; adapted from http://davemcmillan.net/447/snippets/use-jquery-to-display-an-image-alt-tag-as-a-caption-overlay/
$(".content img").each(function() {
  var imgCaption = $(this).attr("alt");
  if ( (imgCaption != '') && (typeof imgCaption != 'undefined') && ($(this).css('float') != 'left') && ($(this).css('float') != 'right') ) {
    $("<small>"+imgCaption+"</small>").insertAfter(this);
  }
});