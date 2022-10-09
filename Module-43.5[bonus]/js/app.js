
const images = [
    './images/m-blog-1.jpg',
    './images/m-blog-2.jpg',
    './images/m-blog-3.jpg',
    './images/m-blog-4.jpg',
    './images/m-blog-5.jpg'
];


let imgIndex = 0;
const sldierId = document.getElementById('slider')
setInterval(() => {
    if(imgIndex >= images.length){
       imgIndex = 0;
    }
    const slide = images[imgIndex];
    sldierId.setAttribute('src', slide);
    imgIndex++
    
}, 1000)