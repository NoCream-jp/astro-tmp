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