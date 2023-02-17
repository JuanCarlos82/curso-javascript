var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
};

miAuto.marca

//---------------------------

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

miAuto.detalleDelAuto();

//-------------------------------------

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
  }

  var autoNuevo = new auto("Tesla", "Model 3", 2020);
  var autoNuevo2 = new auto("Tesla","Model X",2021);
  var autoNuevo3 = new auto("Toyota","Yaris",2021);


  var autos = [];
  for(let i = 0 ; i < 10 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }
  