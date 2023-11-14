/*
Скрипт, який після того, як користувач позначив будь-які 3 чекбокси,
всі чекбокси робить неактивними.
*/

$(document).ready(function() {
  $(".checkbox").change( function () {
    if ($(".checkbox:checked").length >= 3) {
      $(".checkbox").prop("disabled", true);
    } else {
      $(".checkbox").prop("disabled", false);
    }
  });
});