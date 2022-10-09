const changeLoc = () => {
    location = 'http://127.0.0.1:5500/alert.html';
}

const reload = () => {
    location.reload();
}


setInterval((reload) => {
    const reload = () => {
        location.reload();
    }
}, 5000);

const assign = () => {
    location.assign('https://web.programming-hero.com/web-5/video/web-5-39-3-location-url-parts-query-string-href-hash-assign-reload');
}

console.log(location.href);