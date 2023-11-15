// HTMLが読み込まれたら発動する
document.addEventListener('DOMContentLoaded', function () {

  // tab__nameをすべて取得しtagsに格納する
  const tabs = document.getElementsByClassName('tab__name');
  // 繰り返し構文、tags（配列を取得）が0以上の時1足す
  for (let i = 0; i < tabs.length; i++) {
    // クリックするたびに発動する
    tabs[i].addEventListener('click', tabSwitch, false);
  }

  // getElementsByClassName→指定したクラスを取得
  // for→繰り返し処理
  // length→配列を取得
  // addEventListener→イベント処理するメソッド（今回はクリック）

  // タブをクリックすると実行する関数
  function tabSwitch() {
    // 現在is-activeをもっているものから外す
    document.getElementsByClassName('is-active')[0].classList.remove('is-active');
    // クリックしところにis-activeをつける
    this.classList.add('is-active');
    //  現在is-showをもっているものから外す
    document.getElementsByClassName('is-show')[0].classList.remove('is-show');
    // tabsを配列としてarrayTabsに格納する
    const arrayTabs = Array.prototype.slice.call(tabs);
    // 配列からクリックした要素の順番を取得
    const index = arrayTabs.indexOf(this);
    // 取得した配列番号のものにis-showをつける
    document.getElementsByClassName('tab__content')[index].classList.add('is-show');

    // Array.prototype.slice.call→配列に変換する
    // indexOf→指定された要素の配列順番を取得

  };
}, false);