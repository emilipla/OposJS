const AgBotones = document.querySelector('#agbotones');
const tbotones = document.querySelector("#botones");
const fondo = document.querySelector('#fondo');

//(()=>{
    AgBotones.addEventListener('click', agregarbotones);
    tbotones.addEventListener('click', delegar);
//})();

function delegar (ev){
    ev.preventDefault();
    console.log(ev.target) // devuelve el objeto (target, del evento ev)
    console.log(ev.target.classList[1]); // elementos de classList (son 2)
    const colorbtn=ev.target.classList[1];

    switch (colorbtn){
        case ('btn-primary'):
        console.log("1 "+colorbtn)
        fondo.className="bg-primary"
        break;
        case ('btn-secundary'):
        console.log("2 "+colorbtn)
        fondo.className='bg-secundary'
        break;
        case ('btn-danger'):
        console.log("3 "+colorbtn)
        fondo.className='bg-danger'
        break;
    }
}
function agregarbotones(ev){
    ev.preventDefault(); // cancela las funciones por asociadas por defecto
    botones.innerHTML=`<button class="btn btn-primary">Azul</button> 
    <button class="btn btn-secundary">Blanco</button>
    <button class="btn btn-danger">Rojo</button>`
}