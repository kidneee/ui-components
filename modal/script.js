//「モーダルを開く」ボタンを押したとき
document.getElementById('openModalBtn').addEventListener('click', () => {
  document.getElementById('modal').classList.add('is-active');
});

//「閉じる」ボタンを押したとき
document.getElementById('closeModalBtn').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('is-active');
});
