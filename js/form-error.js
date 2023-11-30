window.addEventListener('DOMContentLoaded', () => {
    const submit = document.querySelector('.submit');

    submit.addEventListener('click', (e) => {
        e.preventDefault();

        const email = document.querySelector('input[type="email"]');
        const errMsgEmail = document.querySelector('.err-msg-email');
        const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        const tel = document.querySelector('input[type="tel"]');
        const errMsgTel = document.querySelector('.err-msg-tel');

        const errMsgBirthday = document.querySelector('.err-msg-birthday');

        const passFields = document.querySelectorAll('input[type="password"]');
        const errMsgPasses = document.querySelectorAll('.err-msg-pass');
        const regexPass = /^[a-zA-Z0-9]{8,}$/;

        let hasError = false;

        // パスワードのエラーチェック
        passFields.forEach((pass, index) => {
            const errMsgPass = errMsgPasses[index];

            errMsgPass.textContent = '';

            if (!pass.value) {
                errMsgPass.textContent = '※パスワードが入力されていません';
                pass.style.backgroundColor = "#FFCFCF";
                hasError = true;
            } else if (!regexPass.test(pass.value)) {
                errMsgPass.textContent = '※半角英数字8文字以上で入力してください';
                pass.style.backgroundColor = "#FFCFCF";
                hasError = true;
            } else {
                errMsgPass.textContent = '';
                pass.style.backgroundColor = "#F5F6F7";
            }
        });

        // ページごとに条件分岐
        if (document.body.classList.contains('password-page')) {
            const confirmPassword = document.getElementById('confirm_password');
            const errMsgConfirmPass = document.querySelector('.err-msg-confirm-pass');

            // パスワードの整合性チェック
            if (!confirmPassword.value) {
                errMsgConfirmPass.textContent = '※パスワードが入力されていません';
                confirmPassword.style.backgroundColor = "#FFCFCF";
                hasError = true;
            } else if (passFields[0].value !== confirmPassword.value) {
                errMsgConfirmPass.textContent = '※パスワードが一致しません';
                confirmPassword.style.backgroundColor = "#FFCFCF";
                passFields[0].style.backgroundColor = "#FFCFCF";
                hasError = true;
            } else {
                errMsgConfirmPass.textContent = '';
                confirmPassword.style.backgroundColor = "#F5F6F7";
            }
        }

        errMsgEmail.textContent = '';

        if (!email.value) {
            errMsgEmail.textContent = '※メールアドレスが入力されていません';
            email.style.backgroundColor = "#FFCFCF";
            hasError = true;
        } else if (!regexp.test(email.value)) {
            errMsgEmail.textContent = '※メールアドレスの形式が正しくありません';
            email.style.backgroundColor = "#FFCFCF";
            hasError = true;
        }

        const year = document.querySelector('#year');
        const month = document.querySelector('#month');
        const day = document.querySelector('#day');

        errMsgBirthday.textContent = '';

        if (year.value === 'selected' || month.value === 'selected' || day.value === 'selected') {
            errMsgBirthday.textContent = '※生年月日が選択されていません';
            year.style.backgroundColor = "#FFCFCF";
            month.style.backgroundColor = "#FFCFCF";
            day.style.backgroundColor = "#FFCFCF";
            hasError = true;
        }

        errMsgTel.textContent = '';

        if (!tel.value) {
            errMsgTel.textContent = '※電話番号が入力されていません';
            tel.style.backgroundColor = "#FFCFCF";
            hasError = true;
        }

        if (hasError) {
            return;
        }

        resetBackgroundColors();

        // ここから後続の処理を実行
        // フォーム送信などの処理をここに追加
    }, false);

    // クリックされたら背景色をリセットする関数
    function resetBackgroundColors() {
        const year = document.querySelector('#year');
        const month = document.querySelector('#month');
        const day = document.querySelector('#day');
        const email = document.querySelector('input[type="email"]');
        const passFields = document.querySelectorAll('input[type="password"]');
        const tel = document.querySelector('input[type="tel"]');
        const confirmPassword = document.getElementById('confirm_password');

        year.style.backgroundColor = "#F5F6F7";
        month.style.backgroundColor = "#F5F6F7";
        day.style.backgroundColor = "#F5F6F7";
        email.style.backgroundColor = "#F5F6F7";

        passFields.forEach(pass => {
            pass.style.backgroundColor = "#F5F6F7";
        });

        tel.style.backgroundColor = "#F5F6F7";
        confirmPassword.style.backgroundColor = "#F5F6F7";
    }
}, false);
