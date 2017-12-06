document.addEventListener('DOMContentLoaded', function() {
  svg4everybody();

  var mainHeader = document.querySelector('.main-header');
  var mainHeaderHeight = mainHeader.offsetHeight;
  var welcomeInner = document.querySelector('.welcome__inner');
  welcomeInner.style.minHeight = 'calc(100vh - ' + mainHeaderHeight + 'px)';

  $('.js-tabs').tabslet();
});
