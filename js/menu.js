const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');
const flecha = document.querySelector('.flecha-abajo');

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer){
        menu.classList.toggle("spread")
    }
})

/*
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
       var nom = document.querySelector('.alerta');
       nom.classList.add('visible');
      } else {
        nom.classList.remove('visible');
      }
    var correo = document.getElementById('email').value;
    if(correo == null) {
      alert('No has escrito nada en el usuario');
      return;
    }
    var mensaje = document.getElementById('mensaje').value;
    if (mensaje == 0) {
      alert('No has colocado el mensaje');
      return;
    }
    this.submit();
  }*/
