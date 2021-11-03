/* let nombreUsuario = prompt("Ingrese su nombre");
let mensajeBienvenida = "¡Bienvenido/a " + nombreUsuario + "!";
alert(mensajeBienvenida) */

/*const usuario = prompt("Ingrese su nombre de usuario");
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
} */

const numero = Number(prompt("Que tabla querés saber"));

for (let i = 0; i <= 10; i++) {
    console.log( `${numero}x${i} = ${numero * i}`);
}

let contraseña;
let intentos = 5;

do{
    contraseña = prompt("Ingrese su contraseña");
    if (contraseña !== JuanPerez || contraseña !== RobertoCarlos || contraseña !== EzequielGarcia){
        alert("Contraseña incorrecta");
        intentos--;
    }

}while (contraseña == EzequielGarcia || contraseña == RobertoCarlos || contraseña == JuanPerez);
alert("Contrasela Correcta")
