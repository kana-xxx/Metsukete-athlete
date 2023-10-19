// window.addEventListener('DOMContentLoaded', () => {

//     // 「送信」ボタンの要素を取得
//     const submit = document.querySelector('.submit');
    
//     // 「送信」ボタンの要素にクリックイベントを設定する
//     submit.addEventListener('click', (e) => {
//         // デフォルトアクションをキャンセル
//         e.preventDefault();

//         // 「お名前」入力欄の空欄チェック
//         // フォームの要素を取得
//         const email = document.querySelector('input[type="email"]');
//         // エラーメッセージを表示させる要素を取得
//         const errMsgEmail = document.querySelector('.err-msg-email');
//         if(!email.value){
//             // クラスを追加(エラーメッセージを表示する)
//             errMsgEmail.classList.add('form-invalid');
//             // エラーメッセージのテキスト
//             errMsgEmail.textContent = 'メールアドレスが入力されていません';
//             // クラスを追加(フォームの枠線を赤くする)
//             email.classList.add('input-invalid');
//             // 後続の処理を止める
//             return;
//         }else{
//             // エラーメッセージのテキストに空文字を代入
//             errMsgEmail.textContent ='';
//             // クラスを削除
//             email.classList.remove('input-invalid');
//         }

        

//         // 「パスワード」入力欄の形式チェック
//         const pass = document.querySelector('input[type="password"]');
//         const errMsgPass = document.querySelector('.err-msg-pass');
//         // パスワードが5文字以上の半角英数字であるかどうかのチェック
//         if(!pass.value.match(/^([a-zA-Z0-9]{5,})$/)){
//             errMsgPass.classList.add('form-invalid');
//             errMsgPass.textContent = '半角英数字5文字以上で入力してください';
//             pass.classList.add('input-invalid');
//             return;
//         }else{
//             errMsgPass.textContent ='';
//             pass.classList.remove('input-invalid');
//         }

//         // 「パスワード」と「パスワード再入力」が一致しているかどうかのチェック
//         const passRe = document.querySelector('#pass-re');
//         const errMsgPassRe = document.querySelector('.err-msg-passre');
//         if(pass.value !== passRe.value){
//             errMsgPassRe.classList.add('form-invalid');
//             errMsgPassRe.textContent = 'パスワードとパスワード再入力が一致していません';
//             passRe.classList.add('input-invalid');
//             return;
//         }else{
//             errMsgPassRe.textContent ='';
//             passRe.classList.remove('input-invalid');
//         }
//     }, false);
// }, false);

window.addEventListener('DOMContentLoaded', () => {

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('.submit');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「メールアドレス」入力欄の空欄チェック
        const email = document.querySelector('input[type="email"]');
        const errMsgEmail = document.querySelector('.err-msg-email');

        // 「電話番号」入力欄の空欄チェック
        const tel = document.querySelector('input[type="phone-num"]');
        const errMsgTel = document.querySelector('.err-msg-tel');


        // 「電話番号」入力欄の空欄チェック
        const birthday = document.querySelector('select-birthDay');
        const errMsgBirthday = document.querySelector('.err-msg-birthday');

        // その他の入力フィームのエラーメッセージの初期化
        errMsgEmail.textContent = '';
        errMsgTel.textContent = '';
        errMsgBirthday.textContent = '';
    

        // エラーがあるかどうかのフラグ
        let hasError = false;

        if (!email.value) {
            errMsgEmail.textContent = 'メールアドレスが入力されていません';
            hasError = true;
        }

        if (!tel.value) {
            errMsgTel.textContent = '電話番号が入力されていません';
            hasError = true;
        }
        if (!birthday.value) {
            errMsgBirthday.textContent = '誕生日が入力されていません';
            hasError = true;
        }

        if (hasError) {
            return;
        }

        // ここから後続の処理を実行
        // フォーム送信などの処理をここに追加
    }, false);
}, false);




window.addEventListener('DOMContentLoaded', () => {

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('.submit');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();


  // パスワードの入力欄とエラーメッセージを取得
  const passFields = document.querySelectorAll('input[type="password"]');
  const errMsgPasses = document.querySelectorAll('.err-msg-pass');

  // 各パスワード入力欄に対してループ処理を行う
  passFields.forEach((pass, index) => {
      const errMsgPass = errMsgPasses[index];

      // パスワードのエラーメッセージの初期化
      errMsgPass.textContent = '';

      if (!pass.value) {
          errMsgPass.textContent = 'パスワードが入力されていません';
          hasError = true;
      }
  });


  if (hasError) {
    return;
}

// ここから後続の処理を実行
// フォーム送信などの処理をここに追加
}, false);
}, false);