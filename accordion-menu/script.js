const faqItemButtons = document.querySelectorAll('.faq__item-header');
const faqItemContents = document.querySelectorAll('.faq__item-content');

faqItemButtons.forEach(function (faqItemButton, index) {
  faqItemButton.addEventListener('click', () => {
    faqItemContents.forEach(faqItemContent => {
      faqItemContent.classList.remove('is-active');
    });
    faqItemContents[index].classList.add('is-active');
  })
});
