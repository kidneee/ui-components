const faqItemButtons = document.querySelectorAll('.faq__item-header');
const faqItemContents = document.querySelectorAll('.faq__item-content');

faqItemButtons.forEach(function (faqItemButton, index) {
  faqItemButton.addEventListener('click', () => {
    let isOpen = faqItemContents[index].classList.contains('is-active');

    faqItemContents.forEach(faqItemContent => {
      faqItemButton.classList.remove('is-active');
      faqItemContent.classList.remove('is-active');
    });

    if (!isOpen) {
      faqItemButtons[index].classList.add('is-active');
      faqItemContents[index].classList.add('is-active');
    }
  })
});
