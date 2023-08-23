let btn_init = document.querySelector('.btn-init');
let btn_reset = document.querySelector('.btn-reset');
let grid = document.querySelector('.grid');
let qtd_images = 0;

btn_init.addEventListener('click', pushImages);
btn_reset.addEventListener('click', resetImages);


function pushImage() {

    grid.querySelector('.linha .square').innerHTML = `<img src="img/1.jpg" class="img" alt="">`

}

function pushImages() {

    grid.querySelectorAll('.square').forEach((item) => {
        

        let img = document.createElement('img')
        img.setAttribute('src', `img/1.jpg`)

        item.append(img)
        
    });


}

function resetImages() {

    grid.querySelector('.linha .square').innerHTML = ``;

}