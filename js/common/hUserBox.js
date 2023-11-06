//要素を取得
const noticeModal = document.querySelector('.modal-outer'),
      hUserBoxOuter = document.querySelector('.hUserBoxOuter'),
      modalBtn = document.querySelector('.modal-open'),
      modalBtnSp = document.querySelector('.modal-openSp'),
      noticeBack = document.querySelector('.modal-close'),
      noticeClose = document.querySelector('.notice-modal-close'),
      hUserBox = document.querySelector('.hUserBox'),
      hUserBoxList = document.querySelector('.subList'),
      normalBell = document.querySelector('.bellUsually'),
      normalBellSp = document.querySelector('.bellUsuallySP'),
      openBell = document.querySelector('.bellOpen'),
      openBellSp = document.querySelector('.bellOpenSp'),
      Footer = document.getElementById('Footer');
      // hUserBoxList = document.querySelector('.hUserBox-list'); 
//「開くボタン」をクリックしてモーダルを開く

function modalOpen() {
    noticeModal.classList.toggle('is-active'); 
    normalBell.classList.toggle('is-active');
    openBell.classList.toggle('is-active');
    Footer.classList.toggle('is-active');
}
    modalBtn.addEventListener('click', modalOpen);

    
    function modalOpenSp() {
        noticeModal.classList.toggle('is-active'); 
        normalBellSp.classList.toggle('is-active');
        openBellSp.classList.toggle('is-active');
        Footer.classList.toggle('is-active');
    }
        modalBtnSp.addEventListener('click', modalOpenSp);
    


function modalOpenUser() {
    hUserBoxOuter.classList.toggle('is-active'); 
    hUserBoxList.classList.toggle('is-active');
}
    hUserBox.addEventListener('click', modalOpenUser);



//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose() {
    noticeModal.classList.remove('is-active');
    normalBell.classList.remove('is-active');
    openBell.classList.remove('is-active');
    hUserBoxList.classList.remove('is-active');
    hUserBoxOuter.classList.remove('is-active'); 
    Footer.classList.remove('is-active');
}
noticeClose.addEventListener('click', modalClose);

// モーダルの外側をクリックしてモーダルを閉じる
function modalOut(e) {
    if (e.target == noticeModal) {
        modalClose(); // モーダルを閉じる処理を呼び出す
    }
}

noticeModal.addEventListener('click', modalOut);

function modalOutUser(e) {
    if (e.target == hUserBoxOuter) {
        modalClose(); // モーダルを閉じる処理を呼び出す
    }
}

hUserBoxOuter.addEventListener('click', modalOutUser);
