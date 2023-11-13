
window.addEventListener('DOMContentLoaded', () => {

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('.submit');
    
    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 「メールアドレス」入力欄とエラーメッセージを取得
        const email = document.querySelector('input[type="email"]');
        const errMsgEmail = document.querySelector('.err-msg-email');
        const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        // 「電話番号」入力欄とエラーメッセージを取得
        const tel = document.querySelector('input[type="tel"]');
        const errMsgTel = document.querySelector('.err-msg-tel');

        // 「誕生日」入力欄とエラーメッセージを取得
        // const birthdayContainer = document.querySelector('.birthDay');
        const errMsgBirthday = document.querySelector('.err-msg-birthday');

        // パスワードの入力欄とエラーメッセージを取得
        const passFields = document.querySelectorAll('input[type="password"]');
        const password = document.getElementById('password');
        const passConfilm = document.getElementById('confirm_password');
        const errMsgPasses = document.querySelectorAll('.err-msg-pass');
                    // 半角英数字（4文字以上）
                    var regexPass = /^[a-zA-Z0-9]{4,}$/;



        // その他の入力フィールドのエラーメッセージの初期化
       
        // エラーがあるかどうかのフラグ
        let hasError = false;

        // 各フィールドに対するエラーチェックを行う
        if (passFields === "undefined") {
            console.log("undefinedです");
        }
        
     
        // パスワードのエラーチェック
        passFields.forEach((pass, index) => {
            const errMsgPass = errMsgPasses[index];
            const password =  passFields[index];

            // パスワードのエラーメッセージの初期化
            errMsgPass.textContent = '';

            if (!pass.value) {
                errMsgPass.textContent = '※パスワードが入力されていません';
                password.style.backgroundColor = "#FFCFCF";
                hasError = true;
            }

        else if (regexPass.test(pass) != true) {
            errMsgPass.textContent = '※半角英数字8文字以上で入力してください';
            password.style.backgroundColor = "#FFCFCF";
        }     else if (regexPass.test(pass) = true) {
            errMsgPass.textContent = '';
            password.style.backgroundColor = "#F5F6F7";
        }

        });



        if (email === "undefined") {
            console.log("undefinedです");
        }

        errMsgEmail.textContent = '';

        if (!email.value) {
            errMsgEmail.textContent = '※メールアドレスが入力されていません';
            email.style.backgroundColor = "#FFCFCF";
            hasError = true;
        }
       
        else if(regexp.test(email) != true){
            errMsgEmail.textContent = '※メールアドレスの形式が正しくありません';
            email.style.backgroundColor = "#FFCFCF";

         }



        // 生年月日の選択フォームのエラーチェック
        const year = document.querySelector('#year');
        const month = document.querySelector('#month');
        const day = document.querySelector('#day');

        if (year === "undefined" || month === "undefined" || day === "undefined" ) {
            console.log("undefinedです");
        }

        errMsgBirthday.textContent = '';

        if (year.value === 'selected' || month.value === 'selected' || day.value === 'selected') {
            errMsgBirthday.textContent = '※生年月日が選択されていません';
            year.style.backgroundColor = "#FFCFCF";
            month.style.backgroundColor = "#FFCFCF";
            day.style.backgroundColor = "#FFCFCF";
            hasError = true;
        }
        year.addEventListener('change', function () {
            resetBackgroundColors();
        });
        
        month.addEventListener('change', function () {
            resetBackgroundColors();
        });
        
        day.addEventListener('change', function () {
            resetBackgroundColors();
        });
        
        // クリックされたら背景色をリセットする関数
        function resetBackgroundColors() {
            year.style.backgroundColor = "#F5F6F7";
            month.style.backgroundColor = "#F5F6F7";
            day.style.backgroundColor = "#F5F6F7";
        }

                           
        if (tel === "undefined") {
            console.log("undefinedです");
        }

        errMsgTel.textContent = ''
        if (tel.value) {
            errMsgTel.textContent.style.display = "none";
        }

        if (!tel.value) {

            errMsgTel.textContent = '※電話番号が入力されていません';
            tel.style.backgroundColor = "#FFCFCF";
            hasError = true;
        }


        if (hasError) {
            return;
        }

        // ここから後続の処理を実行
        // フォーム送信などの処理をここに追加
    }, false);
}, false);



