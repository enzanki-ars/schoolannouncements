$(window).load(function() {
  jQuery("time.timeago").timeago();
  jQuery.timeago.settings.allowFuture = true;
  $('[data-toggle="tooltip"]').tooltip();
});
function loadSuccess() {
  document.getElementById("blockedInfo").innerHTML = "<span class=\"label label-info\">" 
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
$(document).ready(function() {
  $(".marquee").css("animation-duration", ($(window).width() + $(".marquee").width()) / 30 + "s")
  if (window.location.protocol != "https:") {
	document.getElementById('sitealerts').innerHTML +=
	  "<div class=\"alert alert-danger\" role=\"alert\"><strong>DANGER:</strong> You are accessing this site over an "
	  + "unsecured connection. Please use "
	  + "<a href=\"{{ site.github.url | replace_first:'http://','https://' }}\" class=\"alert-link\">this link</a> "
	  + "to go to the secured website.</div>";
	ga('send', 'event', "HTTPS Error", "Page loaded on unsecure connection");
  }
});