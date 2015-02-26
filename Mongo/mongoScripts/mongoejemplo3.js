// Usar Operadores logicos en MongoDB

use sw201501;

var existeEj3 = db.random.count();
 if(!existeEj3){
 for (var i=0; i<10000; i++){
   var doc = {"alumnoId" : i+1,
   "cuentaInterna": Math.random()*10000,
   "notas":[
     Math.random()*100,
     Math.random()*100,
     Math.random()*100
   ],
   "promedio": 0,
   "aprobado": false
  };
   db.historicos.insert(doc);
 }
}

db.historicos.count();

// obtener cuentas internar menor a 500
var query = {"cuentaInterna":{$lt :500}};
db.historicos.find(query).count();

//obtener cuentas internas menor a 500
// o mayor a 5000

query = { $or: [
    {"cuentaInterna":{$lt:500}},
    {"cuentaInterna":{$gt:5000}},
    ]};

db.historicos.find(query).count();


// obtener cuentas internas entre 500
// y 5000 y que almenos un elemento de
// notas sea mayor a 95

query= {
  $and:[
    {"cuentaInterna":{$gt:500}},
    {"cuentaInterna":{$lt:5000}},
    {"notas":{$gt:95}}
  ]
};

//db.historicos.find(query).count();
db.historicos.find(query).limit(10).pretty();


//Mostrar los primeros 10 elementos ordenados
// por cuentaInterna descendiente

db.historicos.find(query,{"cuentaInterna":-1,"notas":-1}).sort({"cuentaInterna":-1}),skip(10).limit(10).pretty;
