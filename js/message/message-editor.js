const editBtns = document.querySelectorAll(".messageEdit");
const closeBtns = document.querySelectorAll(".modal-close.editor");

editBtns.forEach(function (btn) {
function modalOpen() {
    let editmodal = btn.getAttribute('data-modal');
    document.getElementById(editmodal).style.display = "block";
  };
  btn.addEventListener('click', modalOpen);
  btn.addEventListener('touchstart', modalOpen);

});

closeBtns.forEach(function (btnC) {


  function modalClose() {
    let editmodal = btnC.getAttribute('data-modal');
    document.getElementById(editmodal).style.display = "none";
  };
  btnC.addEventListener('click', modalClose);
  btnC.addEventListener('touchstart', modalClose);

  // btnC.onclick = function () {
  //   var modal = btnC.closest('.modal');
  //   modal.style.display = "none";
  // };
});

window.addEventListener('click', function (event) {
  if (event.target.className === "modal-editor") {
    event.target.style.display = "none";
  }
});

window.addEventListener('touchstart', function (event) {
  if (event.target.className === "modal-editor") {
    event.target.style.display = "none";
  }
});

