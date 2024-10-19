
/*function encriptador() {
    document.getElementById('quitar_imagen').style.display='none';

}
function desencriptar() {
    document.getElementById('quitar_imagen').style.display='none';
}
function desencriptar() {
    var texto = document.getElementById('encriptacion');
    texto.innerHTML = 'soy el texto';
}*/
/*let miCadena = "tenfo hambre...";
let valorCodificado = btoa(miCadena);
console.log(valorCodificado);

let valordecodificado = atob(valorCodificado);
console.log(valordecodificado);*/

/**let refresh = document.getElementById('copiar');
    refresh.addEventListener('click', _ => {
            location.reload();
})



function copy() {
  textInputEncriptada.select();
  document.execCommand("copy");
  textInputEncriptada.setAttribute('disabled', true);
  textInputEncriptada.value = '';
  alert("El texto ha sido copiado")
}
 */

/** Base para la codificacion */
/*____________________________________________________________________________________________________________*/
const TextoUsuario = document.querySelector('.Texto_usuario');
const AreaDeEncriptado = document.querySelector('.zona_encriptacion');
const BaseEncriptacion = [
    ['e','ever'],['i','iris'],['a','beta'],['o','ofat'],['u','iu']
];
function MensajeAlerta() {
    alert('EL campo de texto esta vacio o no hay suficiente texto para encriptar.');
        TextoUsuario.value = '';
            location.reload();
}
function B_encriptar() {
    if (TextoUsuario.value.trim().length <= 15){
            MensajeAlerta();
    }else{
        document.getElementById("quitar_imagen").style.background = 'transparent';
        const textoEncriptado = encriptar(TextoUsuario.value);
        AreaDeEncriptado.value = textoEncriptado;
        TextoUsuario.value = '';
    }
}
function B_desencriptar() {
    if (TextoUsuario.value.trim().length <= 10){
            MensajeAlerta();
    }else{
        document.getElementById("quitar_imagen").style.background = 'transparent';
        const textoDesencriptado = desencriptar(TextoUsuario.value);
        AreaDeEncriptado.value = textoDesencriptado;
        TextoUsuario.value = '';
    }
    
}
function encriptar(texto) {
    texto = texto.toLowerCase();
    for (let i= 0; i < BaseEncriptacion.length; i++) {
        if (texto.includes(BaseEncriptacion[i][0])){
             texto = texto.replaceAll(BaseEncriptacion[i][0], BaseEncriptacion[i][1])
        }
    }
    return texto;
}
function desencriptar(palabrasEncriptadas) {
    palabrasEncriptadas = palabrasEncriptadas.toLowerCase();
    for (let i = 0; i < BaseEncriptacion.length; i++) {
        if(palabrasEncriptadas.includes(BaseEncriptacion[i][1])){
            palabrasEncriptadas = palabrasEncriptadas.replaceAll(BaseEncriptacion[i][1],BaseEncriptacion[i][0])
        }
    }
    return palabrasEncriptadas;
}
function B_copiar() {
        const copiarTexto = AreaDeEncriptado.value;
        navigator.clipboard.writeText(copiarTexto);
        AreaDeEncriptado.value = '';
        TextoUsuario.value = '';
            location.reload();
}
window.onload = function() {
    document.querySelector('.Texto_usuario').value = '';
    document.querySelector('.texto_encriptado').value = '';
};
