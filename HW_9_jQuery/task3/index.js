/**
Знайдіть теги `<div>`, які стоять безпосередньо після `<h3>` 
і перемістіть ці `<div>`-елемент так, щоб кожен з них став
безпосередньо над відповідним елементом `<h3>`.
 */

$(document).ready(function () {
  const $headings = $("h3");

  $headings.each(function() {
    const $nextDiv = $(this).next("div");
    if ($nextDiv.length) {
      $nextDiv.insertBefore($(this));
    }
  });
});
