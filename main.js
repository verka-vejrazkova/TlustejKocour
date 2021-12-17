let obrazky = ['TK1.jpg', 'TK2.jpg', 'TK3.jpg', 'TK4.jpg', 'TK5.jpg', 'TK6.jpg'];
let kocour = document.querySelector('#kocour'); 
let foto = document.querySelector('#foto');
let pocitadlo = document.querySelector('#pocitadlo')
let index = 0;

zobrazFotku(index);


function predchoziObrazek() {
    if (index === 0) {
        return;
    }
    index--;
    zobrazFotku(index);
}

function dalsiObrazek() {
    if (index === obrazky.length - 1) {
        return;
    }
    index++;
    zobrazFotku(index);
}

function zobrazFotku(index) {
    foto.src = 'obrazky/' + obrazky[index];
}

zobrazKocoura(index);

function zobrazKocoura() {
    
}