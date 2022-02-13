const progressbar = document.querySelector('.progressbar');

if (progressbar) {
    watchScrollProgress();
    window.addEventListener('scroll', watchScrollProgress);
    window.addEventListener('resize', watchScrollProgress);
}

function watchScrollProgress() {
    let fullDocHeight = document.body.scrollHeight;
    let innerWindowHeight = window.innerHeight;
    let scrolledHeight = window.scrollY;

    progressbar.style.width = `${scrolledHeight / (fullDocHeight - innerWindowHeight) * 100}%`;
}