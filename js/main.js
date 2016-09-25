---
---

function loadSuccess() {
  document.getElementById("blockedInfo").innerHTML = "<span class=\"tag tag-info\">"
  + "YouTube Access Check Succeeded.</span>";
  var image_x = document.getElementById("blockedImage");
  image_x.parentNode.removeChild(image_x);
  ga("send", "event", "YouTube Success", "YouTube Load Success");
}
function loadError() {
  var site = "YouTube";
  document.getElementById("blockedInfo").innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">"
  + "<strong>" + site + " Blocked: </strong>You seem to be accessing this website from a location where "
  + site + " is blocked. As part of this website uses items from " + site + ", "
  + "please contact your network administrator in order to view this website as intended.</div>";
  var image_x = document.getElementById("blockedImage");
  image_x.parentNode.removeChild(image_x);
  ga("send", "event", "YouTube Error", "YouTube Load Error");
}
$(window).on("load", function() {
  //Fix for header scroll http://stackoverflow.com/a/25887125/6820516
  var elements = document.querySelectorAll('input,select,textarea');

  for (var i = elements.length; i--;) {
      elements[i].addEventListener('invalid', function () {
          this.scrollIntoView(false);
      });
  }

  $("time.timeago").timeago();
  $.timeago.settings.allowFuture = true;

  $("[data-toggle=\"tooltip\"]").tooltip();
  $(".marquee").css("animation-duration", ($(window).width() + $(".marquee").width()) / 30 + "s")
});

// Code below is modified from http://codepen.io/ashblue/pen/mCtuA/

var $TABLE = $('#table');

$('.table-add').click(function () {
  var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
  $TABLE.find('table').append($clone);
});

$('.table-remove').click(function () {
  $(this).parents('tr').detach();
});

// A few jQuery helpers for exporting only
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;

function dataexport() {
  var $rows = $TABLE.find('tr:not(:hidden)');
  var headers = [];
  var data = "score:\n";

  // Get the headers (add special header logic here)
  $($rows.shift()).find('th:not(:empty)').each(function () {
    headers.push($(this).text().toLowerCase());
  });

  // Turn all existing rows into a loopable array
  $rows.each(function () {
    var $td = $(this).find('td');

    // Use the headers from earlier to name our hash keys
    headers.forEach(function (header, i) {
      if (header == "team") {
        data += "  - team: " + $td.eq(i).text();;
      } else if (header == "points") {
        data += "    points: " + $td.eq(i).text();;
      }
    });
  });

  // Output the result
  return data;
});


// End code modified from http://codepen.io/ashblue/pen/mCtuA/

function submit(type, values) {
  var filename = encodeURIComponent("_announcements/"
    + moment(document.getElementById("date").value).format("YYYY-MM-DD")
    + "-" + getSlug(document.getElementById("title").value) + ".md");

  var content = "---\nenabled: true\n";
  $.each(values, function( index, value ) {
    if (document.getElementById(value).value) {
      if (value == "date") {
        content += value + ": " + moment(document.getElementById("date").value)
          .format("YYYY-MM-DD hh:MM A") + "\n";
      } else if (value == "score") {
        content += dataexport();
      } else {
        content += value + ": " + document.getElementById(value).value + "\n";
      }
    }
  });
  content += "---\n"

  content = encodeURIComponent(content);

  message = encodeURIComponent("[New Announcement] "
    + moment(document.getElementById("date").value).format("YYYY-MM-DD")
    + "-" + document.getElementById("title").value);
  description = encodeURIComponent("Submitted via {{page.url}}");
  window.location.href = "{{ site.github.repository_url }}/new/master?filename=" + filename
    + "&value=" + content + "&message=" + message
    + "&description=" + description;
}
