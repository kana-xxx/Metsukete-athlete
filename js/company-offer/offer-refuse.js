document.addEventListener('DOMContentLoaded', function () {
    const refuseBtn = document.querySelector(".refuse-btn"),
            modal = document.querySelector('.refuse-modal');
            // close = document.querySelector('.js-modal-close');

   

//「開くボタン」をクリックしてモーダルを開く
function modalOpen() {
    modal.classList.add('is-active');
  }
  refuseBtn.addEventListener('click', modalOpen);
  
  //「閉じるボタン」をクリックしてモーダルを閉じる
  // function modalClose() {
  //   modal.classList.remove('is-active');
  // }
  // close.addEventListener('click', modalClose);
  
  //「モーダルの外側」をクリックしてモーダルを閉じる
  function modalOut(e) {
    if (e.target == modal) {
      modal.classList.remove('is-active');
    }
  }
  addEventListener('click', modalOut);
  
}, false);