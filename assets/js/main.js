(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    const body = document.querySelector('body');

    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', function () {
        body.classList.toggle('mobile-nav-active');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
      });
    }

    document.querySelectorAll('#navmenu a').forEach(navItem => {
      navItem.addEventListener('click', () => {
        if (body.classList.contains('mobile-nav-active')) {
          body.classList.remove('mobile-nav-active');
          mobileNavToggleBtn.classList.add('bi-list');
          mobileNavToggleBtn.classList.remove('bi-x');
        }
      });
    });
  });


  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });



})();