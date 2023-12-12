// Array de objetos 
const bebidasStock = [
    {
        codigo: 6,
        nombre: 'Agua S/Gas',
        tamaño: 500 + 'ml',
        precio: '$'+ 279,
        stock: 58
    },
    {
        codigo: 7,
        nombre: 'Agua C/Gas',
        tamaño: 500 + 'ml',
        precio: '$'+ 150,
        stock: 60
    },
    {
        codigo: 8,
        nombre: 'Energy Drink Red Bull',
        tamaño: 250 + 'ml',
        precio: '$'+ 810,
        stock: 85
    },
    {
        codigo: 9,
        nombre: 'Gaseosa Coca Cola',
        tamaño: 500 + 'ml',
        precio: '$'+ 600,
        stock: 150
    },
    {
        codigo: 10,
        nombre: 'Gaseosa Sprite',
        tamaño: 500 + 'ml',
        precio: '$'+ 600,
        stock: 120
    },
]
console.table(bebidasStock);


// Ingreso de Usuario - validación - Bienvenida (Aclaro que al sistema solo tienen permiso de entrar los administradores que son: Ana, Juan, Mary y Pedro)

let usuario = prompt('Hola, somos Panaderia Los Francos, ingresa tu usuario:');

// Validación de usuario
if ((usuario == 'Juan') || (usuario == 'juan') || (usuario == 'JUAN')) {
    alert('Acceso Permitido. \nBienvenido '+ usuario);
    ingresar();
} else if ((usuario == 'Pedro') || (usuario == 'pedro') || (usuario == 'PEDRO')) {
    alert('Acceso Permitido. \nBienvenido '+ usuario);
    ingresar();
} else if ((usuario == 'Ana') || (usuario == 'ana') || (usuario == 'ANA')) {
    alert('Acceso Permitido. \nBienvenido '+ usuario);
    ingresar();
} else if ((usuario == 'Mary') || (usuario == 'mary') || (usuario == 'MARY')) {
    alert('Acceso Permitido. \nBienvenido '+ usuario);
    ingresar();
} else {
    switch (usuario) {
        case '':
            alert('Acceso Denegado');
            usuario = prompt('Hola, somos Panaderia Los Francos, ingresa tu usuario:');
            break;
        case ' ':
            alert('Acceso Denegado');
            usuario = prompt('Hola, somos Panaderia Los Francos, ingresa tu usuario:');
            break;
        default:
            alert('Acceso Denegado');
            usuario = prompt('Hola, somos Panaderia Los Francos, ingresa tu usuario:');
            break;
    }
}
// Ingreso al sistema 
function ingresar() {
    alert('Ingresa y verifica el producto que necesites');
}

let codigo = 6;
// Objeto constructor
class addStock{
    constructor(nombre,tamaño,precio,stock){
        this.codigo = codigo ++;
        this.nombre = nombre;
        this.tamaño = tamaño + 'ml';
        this.precio = '$'+ precio;
        this.stock = parseInt(stock);
    }
}

// Modificar inventario
let producto = prompt('1 - Bebidas\n2 - Salir');
    // Validación
    if (producto === '' || producto === ' ' || producto !== 1) {
        producto = prompt('1 - Bebidas\n2 - Salir');
    } if (producto == 1) { 
        // Buscando si el producto que busca el cliente ya esta en el sistema 
        let buscar = prompt('Ingresa el nombre del producto que buscas');
            const existe = bebidasStock.some((bebida) => bebida.nombre.toUpperCase() == buscar.toUpperCase());
            console.log(existe);
            if(existe == true){
            alert(buscar +' ya se encuentra registrado');
            buscar = prompt('Ingresa el nombre del producto que buscas');
            }   
        
        let modificarStock = prompt('¿Deseas agregar producto al inventario? s-Si/ n-No');
        // Reuniendo datos para formar el nuevo objeto 
        while (modificarStock == 's') {
            let nombreProducto = prompt('Ingresa el nombre del producto');
            const listBebidas = bebidasStock.filter((bebida) => bebida.nombre.includes(nombreProducto));
            if(listBebidas){
                alert('Producto ya existente, intenta de nuevo!');
                nombreProducto = prompt('Ingresa el nombre del producto');
            } 
            let tamañoProducto = prompt('Ingresa el tamaño/capacidad del producto');
            let precioProducto = prompt('Ingresa el precio del producto');
            let stockProducto = prompt('Ingresa la cantidad del producto');

    // Creando objeto
    let newObject = new addStock(nombreProducto, tamañoProducto, precioProducto, stockProducto);
    creararr(bebidasStock,newObject); 
    
    modificarStock = prompt('¿Deseas agregar producto al inventario? s-Si/ n-No'); 
} 
     
    // Función que une objeto al array original 
    function creararr(array, obj) {
        array.push(obj); 
        console.table(array);
        alert('Producto agregado a la base de datos');
    }
}