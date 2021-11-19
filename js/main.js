/* class Producto{
    constructor(nombre, categoria, precio ) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = Number(precio);
    }
}

const productos = [];
const carrito = [];

productos.push(new Producto('Budin hamburgues', 'Budines', 240));
productos.push(new Producto('Cheseecake', 'Tartas', 260));
productos.push(new Producto('Cupcake de chocolate', 'Cupcakes', 140));
productos.push(new Producto('Selva negra', 'Budines', 380));


const verProductos = () => {
    let mensaje = '';
    for (const producto of productos) {
        mensaje += `Producto: ${producto.nombre}\nCaterogia: ${producto.categoria}\nPrecio: $${producto.precio}\n\n`
    }
    return mensaje;
}

productos.sort((a, b) => {
    return a.precio - b.precio
});

const comprar = () => {
    const productoSolicitado = prompt(`¿Qué producto desea comprar?\n\n ${verProductos(productos)}`);
    const productoUsuario  = productos.find(producto => producto.nombre.toLocaleLowerCase() === productoSolicitado.toLocaleLowerCase().trim());
    if (productoUsuario) {
        carrito.push(productoUsuario);
        alert(`Agregaste ${productoUsuario.nombre} al carrito`);
    } else {
        alert('Producto no encontrado')
    }
}

const mostrarCarrito = () => {
    const productosCarrito = verProductos(carrito);
    if (productosCarrito) {
        alert (productosCarrito);
    }
    else{
        alert('Su carrito esta vacío')
    }
}


let opcion;
do {
    opcion = Number(prompt(`Ingrese una opción:
        1 - Ver productos
        2 - Comprar
        3 - Mostrar carrito
        4 - Salir
    `));

    switch (opcion) {
        case 1:
            const infoPorductos = verProductos();
            alert(infoPorductos);
            break;
        case 2:
            comprar();
            break;
        case 3:
            mostrarCarrito();
            break
        case 4:
            alert('Gracias por su visita');
            break
        default:
            alert('Usted ingreso una opción incorrecta');
            break;
    }
} while(opcion !== 4); */

let productos = [{id: 1, nombre : "Budin hamburgues", precio: 240},
{id: 1, nombre : "Cheesecake", precio: 240},
{id: 1, nombre : "Cupcake de chocolate", precio: 240},
{id: 1, nombre : "Selva negra", precio: 240}];

let mostrarProductos = document.querySelector("#catalogo")

for (let i = 0; i < productos.length; i++){
    mostrarProductos.innerHTML += `
    <h3>${productos[i].nombre}</h3>
    <p>${productos[i].precio}</p>
    <button>Agregar al carrito</button>`
}