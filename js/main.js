/* let nombreUsuario = prompt("Ingrese su nombre");
let mensajeBienvenida = "¡Bienvenido/a " + nombreUsuario + "!";
alert(mensajeBienvenida) */

const usuario = prompt("Ingrese su nombre de usuario");
const contraseña = prompt("ingrese su contraseña");

const usuarioAdmin = (usuario == "marcoMeAprobas" && contraseña == "PorFavor")
const usuarioRegular = (usuario == "originalidad" && contraseña == "0" ) || (usuario == "pido" && contraseña == "disculpas" )

if (usuarioAdmin ) {
    alert ("Bienvenido Admin")
} 
else if (usuarioRegular) {
    alert("Bienvenido " + usuario)
}
else {
    alert("Datos Incorrectos")
}

