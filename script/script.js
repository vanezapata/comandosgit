

let nombre, correo, mensaje;
let formulario = document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    LeerData()
})


function LeerData() {
    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    mensaje = document.querySelector('#textarea')
 console.log(nombre)
}

function validarData(nombre,correo,mensaje) {
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){

        Swal.fire({
            title: 'error!',
            text: 'do you want to continue',
            icon:'error',
            confirmbuttontext: 'cool',
            iconcolor: 'purple'
        })
    }
}

function guardarlocalstorage(nombre,correo,mensaje){
    localStorage.setItem('nombre',nombre)
    localStorage.setItem('correo',correo)
    localStorage.setItem('mensaje',mensaje)
    listardata()
}

function listardata(){
    let nombreUsu =  localStorage.getItem('nombre')
    let correoUsu = localStorage.getItem('correo')
    let mensajeUsu = localStorage.getItem('mensaje')

}