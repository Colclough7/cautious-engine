const img_box = document.querySelector('.img_box');
const model = document.querySelector('.model');
const img_model = document.querySelector('#img_model')
const close = document.querySelector('#close')
const imgArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

for (let i = 0; i < imgArr.length; i++) {
    let img = document.createElement('img');
    img_box.appendChild(img);
    img.style.backgroundImage = `url('./pics/${imgArr[i]}')`;
    img.setAttribute('id', 'img');

    img.addEventListener('click', () => {
        img_model.style.backgroundImage = `url('./pics/${imgArr[i]}')`;
        model.style.transform = 'scale(1)';
    });
}

close.addEventListener('click', () => {
    model.style.transform = 'scale(0)';
})