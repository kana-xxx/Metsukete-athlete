//要素を取得
const headModalBtn = document.querySelectorAll('.head-modalOpen');
const noticeModalClose = document.querySelector('.notice-modal-close');
const hamburgerBtn = document.querySelector('.head-modalOpen-sp');


headModalBtn.forEach(function (btn) {
    function modalOpen() {
        let headModal = btn.getAttribute('data-modal');
        document.getElementById(headModal).classList.toggle('active');
      };
      btn.addEventListener('click', modalOpen);
    
    });
    
    noticeModalClose.addEventListener('click', function() {
            let headModal = this.getAttribute('data-modal');
            document.getElementById(headModal).classList.toggle('active');
    })
      

    hamburgerBtn.addEventListener('click', function() {
        let headModal = this.getAttribute('data-modal');
            document.getElementById(headModal).classList.toggle('active');
    })

    // ボタンの開閉
    const hamburgerMenu = document.querySelector('.menu.on');
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
    });
    
    
    window.addEventListener('click', function (event) {
      console.log(event.target.className);
      if (event.target.classList.contains('modalBox') == true ) {
        event.target.classList.toggle('active');
      }
    });
    
    window.addEventListener('touchstart', function (event) {
      if (event.target.classList.contains('modalBox') == true ) {
        event.target.classList.toggle('active');
      }
    });
    


