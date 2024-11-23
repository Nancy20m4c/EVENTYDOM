const imagen = document.getElementById('imagen');
let mostrarImagen = false;
document.addEventListener('keydown', function(event){
    if (event.ctrlKey && event.key === 'b') {
        if (mostrarImagen) {
            // ocultar
            mostrarImagen = false;
            document.getElementById('imagen').style.backgroundImage = "none";
        } else {
            // mostrar
            mostrarImagen = true;
            document.getElementById('imagen').style.backgroundImage = "url('https://picsum.photos/1920/1080')";
        }
        
    } 
});