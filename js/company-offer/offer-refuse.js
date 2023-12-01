document.addEventListener('DOMContentLoaded', function () {
    const refuseBtn = document.querySelector(".refuse-btn"),
            modal = document.querySelector('.refuse-modal');
            // close = document.querySelector('.js-modal-close');

   

//「開くボタン」をクリックしてモーダルを開く
function modalOpen() {
    modal.classList.add('is-active');
  }
  refuseBtn.addEventListener('click', modalOpen);
  refuseBtn.addEventListener('touchstart', modalOpen);

  function modalOut(e) {
    if (e.target == modal) {
      modal.classList.remove('is-active');
      e.stopPropagation(); // イベントの伝播停止
      e.preventDefault();  // デフォルトのアクション停止
    }
  }
  addEventListener('click', modalOut);
  addEventListener('touchstart', modalOut);
  
}, false);

