var articulos = [
    {nombre: "Bici", costo: 3000 },
    {nombre: "TV", costo: 4000 },
    {nombre: "Libro", costo: 1000 },
    {nombre: "Celular", costo: 5000 },
    {nombre: "Laptop", costo: 6000 },
    {nombre: "Teclado", costo: 400 },
    {nombre: "Audifonos", costo: 200 },
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

//----------------------------------
