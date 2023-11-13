// 入力欄に文字が入力された場合に、背景色をつける 

const target = document.querySelectorAll('.emailBox, .passwordBox, .telBox, .passwordBoxRe, #year, #month, #day');
console.log(target);
for(let i in target){
	if (target.hasOwnProperty(i)) {
		target[i].addEventListener('focus', focus_on_ivent);
		target[i].addEventListener('blur', focus_out_ivent);
	}
}

//フォーカスされた時
function focus_on_ivent(e) {
	e.target.style.background = '#EFF6FB';
}

//フォーカスが解除された時
function focus_out_ivent(e) {
	e.target.style.background = '';
}
