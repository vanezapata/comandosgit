let placa,tipo_de_vehiculo,modelo,propietario,fecha_de_entrada,hora,cantidad_de_horas;
let formulario = document.getElementById('form') ;

formulario.addEventListener ('submit',(e)=>{
    e.preventDefault();
    LeerDatos();
})

function LeerDatos(){
   placa = document.getElementById('placa').value;
   tipo_de_vehiculo= document.getElementById('tipo de vehiculo');
   modelo = document.getElementById('modelo').value;
   propietario = document.getElementById('propietario');
   fecha_de_entrada = document.getElementById('fecha de entrada').value;
   hora = document.getElementById('hora');
   cantidad_de_horas = document.getElementById('cantidad de horas').value;

    validarData( placa,tipo_de_vehiculo,modelo,propietario,fecha_de_entrada,hora,cantidad_de_horas);
    guardarlocalstorage(placa,tipo_de_vehiculo,modelo,propietario,fecha_de_entrada,hora,cantidad_de_horas);
    listardata();
}

function validarData( placa,tipo_de_vehiculo,modelo,propietario,fecha_de_entrada,hora,cantidad_de_horas) {
    if (placa.length==0 || tipo_de_vehiculo.length==0 || modelo.length==0 || propietario.length==0 || fecha_de_entrada.length==0 || hora.length==0 || cantidad_de_horas.length==0){
        swal.fire({
            title: 'error!',
            text: 'do you want to continue',
            icon:'error',
            confirmbuttontext: 'cool',
            iconcolor: 'purple'

        })
    }
}

function guardarlocalstorage(placa,tipo_de_vehiculo,modelo,propietario,fecha_de_entrada,hora,cantidad_de_horas){
    localStorage.setItem('placa',placa);
    localStorage.setItem('tipo',tipo_de_vehiculo
    );
    localStorage.setItem('modelo',modelo);
    localStorage.setItem('propietario',propietario);
    localStorage.setItem('fecha_de_entrada_',fecha_de_entrada);
    localStorage.setItem('hora',hora);
    localStorage.setItem('cantidad_de_horas',cantidad_de_horas);
    listardata();
}

function listardata(){
    let placaUsu =  localStorage.getItem('placa');
    let tipo_de_vehiculoUsu = localStorage.getItem('tipo');
    let modeloUsu = localStorage.getItem('modelo');
     let propietarioUsu =  localStorage.getItem('propietario');
     let fecha_de_entradaUsu = localStorage.getItem('fecha_de_entrada');
     let horaUsu = localStorage.getItem('hora');
     let cantidad_de_horasUsu= localStorage.getItem('cantidad_de_horas');
}
