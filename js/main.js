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

TODAVIA NO LO ARREGLE PERDON



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
        const budin = porcionesBudin()
        break;
    case 2:
        const toffe = porcionesToffe()
        break;
    case 3:
        const carrot = porcionesCarrotCake()
        break;
}
*/

class  Producto { 
    constructor(nombre, categoria, stock, cantidadComprada){
        this.nombre = nombre;
        this.categoria = categoria;
        this.stock = stock;
        this.cantidad = cantidadComprada;
    }

    controlStock(){
        if(this.cantidad > this.stock){
            alert("No tenemos suficiente stock de este producto para realizar su compra")
        }
        else if(this.cantidad < this.stock && this.cantidad > 0){
            this.stock = this.stock - this.cantidad
            alert("La cantidad ingresada es: " + this.cantidad + " el stock actualizado es de: " + this.stock);
        }
        else {
            alert("Usted ingreso una cantidad negativa, eso es incorrecto")
        }
    }
}

let productoComprado = prompt("Ingrese que producto quiere comprar...Toffee/Budin/Carrot")
let compraUsuario = Number(prompt("Ingrese la cantidad que quiere comprar del producto"));
const objeto1 = new Producto (productoComprado, "tartas", 200, compraUsuario);
const objeto2 = new Producto (productoComprado, "tortas", 200, compraUsuario);
const objeto3 = new Producto (productoComprado, "tartas", 200, compraUsuario);

objeto1.controlStock()
objeto2.controlStock()
objeto3.controlStock()
