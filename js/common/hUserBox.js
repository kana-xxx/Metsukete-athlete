//要素を取得
const noticeModal = document.querySelector('.modal-outer'),
      modalBtn = document.querySelector('.modal-open'),
      noticeClose = document.querySelector('.notice-modal-close'),
      hUserBox = document.querySelector('.hUserBox'),
      hUserBoxList = document.querySelector('.subList'),
      normalBell = document.querySelector('.bellUsually'),
      openBell = document.querySelector('.bellOpen');
      // hUserBoxList = document.querySelector('.hUserBox-list'); 
//「開くボタン」をクリックしてモーダルを開く

function modalOpen() {
    noticeModal.classList.toggle('is-active'); 
    normalBell.classList.toggle('is-active');
    openBell.classList.toggle('is-active');
}
modalBtn.addEventListener('click', modalOpen);

function hUserBoxOpen() {
   noticeModal.classList.toggle('is-active'); 
  hUserBoxList.classList.add('is-active'); 
}
hUserBox.addEventListener('click', hUserBoxOpen);



const btn = document.querySelectorAll(".modal-toggle");
btn.forEach(function (btn) {
btn.onclick = function () {
const modalAttribute = btn.getAttribute('data-modal');
const modalShow = document.getElementById(modalAttribute);
modalShow.classList.add('show');
};
});



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


