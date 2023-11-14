/**
Для усіх посилань зі сторінки додайте атрибут target="\_blank", якщо
href починається на`https://
 */
$(document).ready(function () {
  const $links = $('a[href^="https://"]');
  $links.attr('target', '_blank');
});
