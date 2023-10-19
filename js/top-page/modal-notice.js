//要素を取得
const noticeModal = document.querySelector('.notice-modal'),
      noticeOpen = document.querySelector('.notice-modal-open'),
      noticeClose = document.querySelector('.notice-modal-close'),
      normalBell = document.querySelector('.bellUsually'),
      openBell = document.querySelector('.bellOpen');
//「開くボタン」をクリックしてモーダルを開く
function modalOpen() {
    noticeModal.classList.toggle('is-active'); 
    normalBell.classList.toggle('is-active');
    openBell.classList.toggle('is-active');
}
noticeOpen.addEventListener('click', modalOpen);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose() {
    noticeModal.classList.remove('is-active');
}
noticeClose.addEventListener('click', modalClose);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut(e) {
  if (e.target == noticeModal) {
    noticeModal.classList.remove('is-active');
    normalBell.classList.remove('is-active');
    openBell.classList.remove('is-active');
    
  }
}
addEventListener('click', modalOut);