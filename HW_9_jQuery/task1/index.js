/**
знайдіть всі <h2> з класом head,
зробіть для них зелений колір фону,
потім серед знайдених елементів знайдіть елементи з класом inner
і поставте їм розмір шрифту 35px (не вносьте змін до html-файлу)
 */

$(document).ready(function () {
  // знайдіть всі <h2> з класом head
  const $headings = $("h2.head");

  // зробіть для них зелений колір фону
  $headings.css("background-color", "green");

  // серед знайдених елементів знайдіть елементи з класом inner
  const $innerElements = $headings.find(".inner");

  // розмір шрифту 35px
  $innerElements.css("font-size", "35px");
});