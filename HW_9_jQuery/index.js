// --------------- working with jQuery ---------------

// --------------- Do something with element ---------------
$("ol.product-list li:nth-child(3)").addClass("selected");

// --------------- Using Variables ---------------
const $list = $("ol.product-list");

$list.children().eq(3).addClass("selected"); // eq(3) - index in array
$list.children().last().attr("title", "I'm the last item!");

// collection.each((index, element) { code })
$("ol.product-list li").each(function (ind, el) {

  if (ind % 3 === 0) {
    console.log(ind + ": " + $(el).text());
  }
});

// --------------- event handlers ---------------
$("ol.product-list li").on("click", function () {
  $(this).toggleClass("selected")   // Огортання в $() робиться тільки для методів jQuery
});