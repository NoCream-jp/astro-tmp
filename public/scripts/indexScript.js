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

// スクロール時にヘッダーのスタイルを変更する
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
  
    // ヘッダー要素が存在する場合のみ処理を実行
    if (header) {
      window.addEventListener('scroll', () => {
        // 50px以上スクロールされたら 'scrolled' クラスを追加
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          // スクロールが50px未満の場合は 'scrolled' クラスを削除
          header.classList.remove('scrolled');
        }
      });
    }
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
    const text = "by Minato Hayashi";
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
