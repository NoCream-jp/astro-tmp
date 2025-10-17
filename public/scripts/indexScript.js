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

// hero内の文字可視状態でヘッダーの表示/非表示を制御（b: 見えている間は非表示、フレームアウトで表示）
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.getElementById('handwriting-text');
    const headerSentence = document.querySelector('.header-center.appear');
    if (!heroText || !headerSentence) return;

    const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                // hero文字が見えている → ヘッダーは非表示
                headerSentence.classList.remove('visible');
            } else {
                // hero文字がフレームアウト → ヘッダーを表示
                headerSentence.classList.add('visible');
            }
        },
        {
            root: null,
            threshold: 0.1,
        }
    );

    observer.observe(heroText);
});