document.addEventListener('DOMContentLoaded', () => {
    // ========== ハンバーガーメニュー機能 ==========
    const navToggle = document.getElementById('nav-toggle');
    const overlayNav = document.getElementById('overlay-nav');

    if (navToggle && overlayNav) {
        const navIcon = navToggle.querySelector('i');

        navToggle.addEventListener('click', () => {
            overlayNav.classList.toggle('active');

            if (overlayNav.classList.contains('active')) {
                navIcon.classList.remove('fa-bars');
                navIcon.classList.add('fa-times'); // 閉じるアイコンとして 'x' (fa-times) を使用
            } else {
                navIcon.classList.remove('fa-times');
                navIcon.classList.add('fa-bars');
            }
        });

        overlayNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                overlayNav.classList.remove('active');
                navIcon.classList.remove('fa-times');
                navIcon.classList.add('fa-bars');
            });
        });
    }

    // ========== フェードイン機能 ==========
    const fadeInElements = document.querySelectorAll(".fade-in");
    if (fadeInElements.length > 0) {
        const handleScroll = () => {
            fadeInElements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 120) { // 条件式を修正
                    el.classList.add("visible");
                }
            });
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
    }

    // ========== 手書き風テキストアニメーション ==========
    const handwritingContainer = document.getElementById("handwriting-text");
    if (handwritingContainer) {
        const text = "by Minato Hayashi";
        let index = 0;

        const type = () => {
            if (index < text.length) {
                handwritingContainer.textContent += text[index];
                index++;
                setTimeout(type, 80);
            }
        };
        type();
    }

    // ========== URLコピー機能 ==========
    const shareLinks = document.querySelectorAll('.share');
    if (shareLinks.length > 0) {
        shareLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                // URLの # 以降（フラグメント）を除いた部分を取得
                const url = window.location.origin + window.location.pathname;

                navigator.clipboard.writeText(url).then(() => {
                    const originalIconHTML = this.innerHTML;
                    const iconElement = this.querySelector('i');
                    
                    if (iconElement) {
                        iconElement.className = 'fa-solid fa-check'; // アイコンをチェックマークに変更
                    }
                    this.style.pointerEvents = 'none';

                    setTimeout(() => {
                        this.innerHTML = originalIconHTML;
                        this.style.pointerEvents = 'auto';
                    }, 2000);
                }).catch(err => {
                    console.error('URLのコピーに失敗しました: ', err);
                });
            });
        });
    }

    // ========== ページトップへ戻るボタンの処理 ==========
    const pageTopBtn = document.getElementById('page-top-btn');

    if (pageTopBtn) {
        window.addEventListener('scroll', () => {
            // 300px以上スクロールしたら .show クラスを追加して表示
            if (window.scrollY > 150) {
                pageTopBtn.classList.add('show');
            } else {
                pageTopBtn.classList.remove('show');
            }
        });

        pageTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // ページ最上部へスムーズにスクロール
        });
    }
});


/* ========= Tab ============== */
function setupTabs() {
    const triggers = document.querySelectorAll('.profile-tab-trigger');
    const contents = document.querySelectorAll('.profile-tab-content');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        // 1. データ属性からターゲットIDを取得
        const targetId = trigger.getAttribute('data-tab');

        // 2. すべてのタブと中身から active クラスを削除
        triggers.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // 3. クリックされたタブと、対応する中身に active クラスを追加
        trigger.classList.add('active');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  }

  // ページ読み込み時、またはAstroのView Transitions遷移時に実行
  setupTabs();
  document.addEventListener('astro:page-load', setupTabs);

  /* ============================= */