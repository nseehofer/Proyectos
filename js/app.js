const nodoBtnProyecto = document.querySelector('h1');
const nodoModal = document.querySelector('dialog');
const nodoSpanCerrar =document.querySelector('span');
console.log(nodoModal);

nodoBtnProyecto.addEventListener('click', (e) => {
nodoModal.showModal();
});

nodoSpanCerrar.addEventListener('click',(e)=>{
    nodoModal.close();
})