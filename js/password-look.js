
// クラス名が "passwordBox" のすべての要素を取得
const inputTypes = document.getElementsByClassName('passwordBox');
const passwordBtns = document.getElementsByClassName('passwordToggle');
const viewIcons = document.getElementsByClassName("password-icon");

// すべてのパスワードトグルボタンに対してイベントリスナーを追加
for (let i = 0; i < passwordBtns.length; i++) {
    passwordBtns[i].addEventListener('click', function() {
        // 対応するパスワード入力欄とアイコンを取得

        const inputType = inputTypes[i];
        const viewIcon = viewIcons[i]; // アイコンが入力欄の兄弟要素であると仮定しています

        // パスワードの表示/非表示を切り替える
        if (inputType.type === 'password') {
            inputType.type = 'text';
            viewIcon.src = "../image/common/icon-login-eyeClose.svg";
            viewIcon.style.width = '0.8rem';
            viewIcon.style.paddingTop = '0.5rem';
        } else {
            inputType.type = 'password';
            viewIcon.src = "../image/common/icon-login-eye.svg";
        }
    });
}
