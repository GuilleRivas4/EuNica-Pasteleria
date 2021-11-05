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

/*const numero = Number(prompt("Que tabla querés saber"));

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

TODAVIA NO LO ARREGLE PERDON */



function porcionesBudin(){
    alert(`
        3 porciones $180
        6 porciones $360
        9 pociones $540
        12 porciones $720`)
    
}
function porcionesToffe(){
    alert(`
        3 porciones $180
        6 porciones $360
        9 pociones $540
        12 porciones $720`)
    
}
function porcionesCarrotCake(){
    alert(`
        3 porciones $180
        6 porciones $360
        9 pociones $540
        12 porciones $720`)
    
}

const pedido = Number(prompt(`Seleccione cual quiere consultar
1 - Budin
2 - Toffe
3 - Carrot Cake`));

switch (tortas) {
    case 1:
        const caso1 = porcionesBudin()
        break;
    case 2:
        const toffe = porcionesToffe()
        break;
    case 3:
        const carrot = porcionesCarrotCake()
        break;
}

