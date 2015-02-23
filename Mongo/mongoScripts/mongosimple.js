// mongo < scriptName.js

use sw201501;
show collections;
//var doc = {"otherAttri":"Some other value"};
//db.testSimple.insert(doc);
//db.testSimple.findOne();

//Revisando Esquema de Base de Datos
checkSchema = function(){
  var collUsuariosExists = db.usuarios.count();
  var collAulasExists = db.aulas.count();
  if(!collUsuariosExists){
    var firstUser = {"username":"administrator",
                     "pswd":"whenthecatsgooutthemicepartyallnight",
                     "name":"Administrador del Sitio",
                     "fchIng": new Date(),
                     "roles":["admin","all"]
                   },
        secondUser = {"username":"guest",
                         "pswd":"bibidibabidiboo",
                         "name":"Guest User",
                         "fchIng": new Date(),
                         "roles":["all"]
                       };
        db.usuarios.insert(firstUser);
        db.usuarios.insert(secondUser);
  }
  if(!collAulasExists){
    // implementar con 10 aulas.
    // del Edificio F
    var aula1 = {"edificio":"F",
                     "numero":"2001"
                   },
        aula2 = {"edificio":"F",
                  "numero":"2001"
                   },
        aula3 = {"edificio":"F",
                 "numero" :"2002"
                   },
        aula4 = {"edificio":"F",
                 "numero":"2004"
                 },
        aula5 = {"edificio":"F",
                  "numero":"2005"
                },
        aula6 = {"edificio":"F",
                 "numero":"2006"
                  },
        aula7 = {"edificio":"F",
                "numero":"2007"
                },
        aula8 = {"edificio":"F",
                "numero":"2008"
                  },
        aula9 = {"edificio":"F",
                 "numero":"2009"
                  },
        aula10 = {"edificio":"F",
                "numero":"2010"
              };
        db.aulas.insert(aula1);
        db.aulas.insert(aula2);
        db.aulas.insert(aula3);
        db.aulas.insert(aula4);
        db.aulas.insert(aula5);
        db.aulas.insert(aula6);
        db.aulas.insert(aula7);
        db.aulas.insert(aula8);
        db.aulas.insert(aula9);
        db.aulas.insert(aula10);                            


  }
}


checkSchema();
db.usuarios.find().pretty();
db.aulas.find().pretty();
