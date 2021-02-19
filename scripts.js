const nombre = "malena";

let letraMayus = nombre.charAt(0).toUpperCase();


/*Opción Malena*/
console.log(nombre.replace(nombre[0], letraMayus));


/*Opcion 1*/
console.log(`${nombre.charAt(0).toUpperCase()}${nombre.slice(1)}`);
