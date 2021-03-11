const AgBotones = document.querySelector('#agbotones');
const tbotones = document.querySelector("#botones");
const fondo = document.querySelector('#fondo');

(()=>{
    AgBotones.addEventListener('click', agregarbotones);
    tbotones.addEventListener('click', delegar);
})();

function delegar (ev){
    ev.preventDefault();
    //console.log(ev.target.classList[0]);
    const colorbtn=ev.target.classList[1];

    switch (colorbtn){
        case ('btn-primary'):
        //console.log(colorbtn)
        fondo.className="bg-primary"
        break;
        case ('btn-secundary'):
        fondo.className='bg-secundary'
        break;
        case ('btn-danger'):
        fondo.className='bg-danger'
        break;
    }
}
function agregarbotones(ev){
    ev.preventDefault();
    botones.innerHTML=`<button class="btn btn-primary">Azul</button> 
    <button class="btn btn-secundary">Blanco</button>
    <button class="btn btn-danger">Rojo</button>`
}