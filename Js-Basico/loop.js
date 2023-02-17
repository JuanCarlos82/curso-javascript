var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++ ){
    saludarEstudiante(estudiantes[i]);
}
 //----------------------------

 var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

 function saludarEstudiante(estudiante){
     console.log(`Hola, ${estudiante}`);
 }
 
 for(var estudiante of estudiantes){
     saludarEstudiante(estudiante);
 }

 //-----------------------------

 var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

 function saludarEstudiantes(estudiante){
     console.log(`Hola, ${estudiante}`);
 }

 while (estudiantes.length > 0){
     var estudiante = estudiantes.shift();
     saludarEstudiantes(estudiante);
 }

 //---------------------------

 var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

 function saludarEstudiantes(estudiante){
     console.log(`Hola, ${estudiante}`);
 }

 while (estudiantes.length > 0){
     console.log(estudiantes)
     var estudiante = estudiantes.shift();
     saludarEstudiantes(estudiante);
 }