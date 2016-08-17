function loadSuccess() {
  document.getElementById("blockedInfo").innerHTML = "<span class=\"tag tag-info\">" 
	+ "YouTube Access Check Succeeded.</span>";
  var image_x = document.getElementById('blockedImage');
  image_x.parentNode.removeChild(image_x);
  ga('send', 'event', "YouTube Success", "YouTube Load Success");
}
function loadError() {
  var site = "YouTube";
  document.getElementById("blockedInfo").innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">"
	+ "<strong>" + site + " Blocked: </strong>You seem to be accessing this website from a location where "
	+ site + " is blocked. As part of this website uses items from " + site + ", "
	+ "please contact your network administrator in order to view this website as intended.</div>";
  var image_x = document.getElementById('blockedImage');
  image_x.parentNode.removeChild(image_x);
  ga('send', 'event', "YouTube Error", "YouTube Load Error");
}
$(window).on("load", function() {
  jQuery("time.timeago").timeago();
  jQuery.timeago.settings.allowFuture = true;
  $('[data-toggle="tooltip"]').tooltip();
  $('.dropdown-toggle').dropdown()
  $(".marquee").css("animation-duration", ($(window).width() + $(".marquee").width()) / 30 + "s")
});
