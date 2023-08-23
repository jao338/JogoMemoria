let btn_init = document.querySelector('.btn-init');
let btn_reset = document.querySelector('.btn-reset');
let grid = document.querySelector('.grid');

btn_init.addEventListener('click', pushImages);
btn_reset.addEventListener('click', resetImages);


function pushImage() {

    grid.querySelector('.linha .square').innerHTML = `<img src="img/1.jpg" class="img" alt="">`

}

function pushImages() {

    if(document.querySelector('.square').innerHTML === ''){

        let i = 0;

        grid.querySelectorAll('.square').forEach((item) => {
            
            i++;

            let img = document.createElement('img')
            img.setAttribute('src', `img/${i}.jpg`)

            item.append(img)

            
        });

    }else{

    }
    
}

function resetImages() {

    grid.querySelectorAll('.square').forEach((item) => {
        
        item.innerHTML = ''
        
    });
}