const iconModal = document.querySelector('.nameBox');
const profilePop = document.querySelector('.modal-profile');
const profilePopSp = document.querySelector('.modal-outer.profile');
const profileWrapSp = document.querySelector('.modal-profile.sp');
const modalCloseSp = document.querySelector('.modal-close.profile');



function profileOpen () {
  if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){
    // スマホ・タブレット（iOS・Android）の場合の処理を記述
    profilePopSp.classList.add('is-active');
    profileWrapSp.classList.add('is-active');
    
  }else{
    // PCの場合の処理を記述
    profilePop.classList.add('is-active');
  }
     
};
          iconModal.addEventListener('click', profileOpen);
        //   icon.addEventListener('touchstart', profileOpen);
       
        
// スマホのみ閉じるボタンを使用
        function modalClose() {
          profileWrapSp.classList.remove('is-active');
          profilePopSp.classList.remove('is-active');
      }
      modalCloseSp.addEventListener('click', modalClose);





          function modalOut(e) {
            if (e.target == profilePop) {
                profilePop.classList.remove('is-active');
              e.stopPropagation(); // イベントの伝播停止
              e.preventDefault();  // デフォルトのアクション停止
            }
          }


          addEventListener('click', modalOut);
          addEventListener('touchstart', modalOut);