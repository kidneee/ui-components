const tabItems = document.querySelectorAll('.tab-item');
const tabPanels = document.querySelectorAll('.tab-panel');

tabItems.forEach(function (tabItem, index) {
  tabItem.addEventListener('click', () => {
    tabItems.forEach(item => {
      item.classList.remove('active');
    });
    tabItems[index].classList.add('active');

    tabPanels.forEach(tabPanel => {
      tabPanel.classList.remove('active');
    });
    tabPanels[index].classList.add('active');
  })
});
