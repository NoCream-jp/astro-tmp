document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const overlayNav = document.getElementById('overlay-nav');
    const navIcon = navToggle.querySelector('i');

    navToggle.addEventListener('click', () => {
        // nav-toggle と overlay-nav に active クラスをトグル
        navToggle.classList.toggle('active');
        overlayNav.classList.toggle('active');

        // アイコンのクラスを切り替える
        if (overlayNav.classList.contains('active')) {
            // メニューが開いたとき
            navIcon.classList.remove('fa-bars');
            navIcon.classList.add('fa-arrow-right');
        } else {
            // メニューが閉じたとき
            navIcon.classList.remove('fa-arrow-right');
            navIcon.classList.add('fa-bars');
        }
    });

    // メニュー内のリンクをクリックしたときにもメニューを閉じる
    overlayNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            overlayNav.classList.remove('active');

            // アイコンを元の状態に戻す
            navIcon.classList.remove('fa-arrow-right');
            navIcon.classList.add('fa-bars');
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
        fadeInElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 120 > 0) {
                el.classList.add("visible");
            }
        });
    };

    // 初期チェックとスクロールイベントの登録
    handleScroll();
    window.addEventListener("scroll", handleScroll);
});

// 手書き風テキストアニメーション
document.addEventListener("DOMContentLoaded", () => {
    const text = "by NoCream";
    const container = document.getElementById("handwriting-text");
    let index = 0;

    const type = () => {
        if (index < text.length) {
            container.textContent += text[index];
            index++;
            setTimeout(type, 80); // 1文字ごとに200msの遅延
        }
    };

    type();
});

// 
// ファイル: /scripts/indexScript.js

// 監視対象のトリガーとなる要素（.targetを持つ要素）を取得
const triggerElement = document.querySelector('.target');

// 表示させたいヘッダーのタイトル（.appearを持つ要素）を取得
const elementToShow = document.querySelector('.appear');

// 両方の要素がページに存在する場合のみ、処理を実行
if (triggerElement && elementToShow) {

    const checkTriggerPosition = () => {
        // トリガー要素の上辺の位置を取得
        const triggerPosition = triggerElement.getBoundingClientRect().top;
        
        // ウィンドウの高さを取得
        const windowHeight = window.innerHeight;

        // 条件分岐：トリガー要素が画面内に入ったか、外に出たか
        if (triggerPosition < windowHeight) {
            // 画面内に入ったら 'visible' クラスを追加して表示
            elementToShow.classList.add('visible');
        } else {
            // 画面外（上側）に出たら 'visible' クラスを削除して非表示
            elementToShow.classList.remove('visible');
        }
    };

    // スクロールするたびに位置をチェックするイベントを設定
    // ※常に監視するため、イベントの削除処理は行いません
    window.addEventListener('scroll', checkTriggerPosition);

    // ページ読み込み時に、すでにトリガーが画面内にあるか一度チェック
    document.addEventListener('DOMContentLoaded', checkTriggerPosition);
}