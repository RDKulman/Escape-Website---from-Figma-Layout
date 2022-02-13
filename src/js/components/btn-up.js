const btnUpWrapper = document.querySelector('.btn-up-wrapper');

if (btnUpWrapper) {
    const btnUp = document.querySelector('.btn-up');
    let scrollTimer;
    let scrolledHeight;

    window.addEventListener('scroll', showBtnUp);

    btnUp.addEventListener('click', () => {
        scrolledHeight = window.scrollY;
        moveUp();
    });

    function showBtnUp() {
        if (window.scrollY > 200) {
            btnUp.classList.add('btn-up--active');
        }
        else {
            btnUp.classList.remove('btn-up--active');
        }
    }

    function moveUp () {
        if (scrolledHeight > 0) {
            scrolledHeight -= 40;
            window.scrollTo(0, scrolledHeight);
            scrollTimer = setTimeout(moveUp, 10);
        }
        else {
            window.scrollTo(0, 0);
            clearTimeout(scrollTimer);
        }
    }
}