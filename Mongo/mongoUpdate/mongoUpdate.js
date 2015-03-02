use nw201501;
var hwDataExists = db.hwdata.count();
if(!hwDataExists){
  var doc = {"player":"player1",
             "type":"gamer",
             "avatar":"default",
             "species":"sorcerer",
             "systemroles":["player","moderator","admin"],
             "vitals":{
               "life":100,
               "strength":100,
               "agility":100,
               "endurance":100,
               "magic":100,
               "wisdom":100,
               "adrenaline":100,
               "painawareness":0
             },
             "gadgets":[
                {"gadget":"sword",
                 "attackpower":10,
                 "defensepower":3,
                 "magic":0,
                 "speed":5,
                 "mixeditems":[]
                },
                {"gadget":"shield",
                 "attackpower":3,
                 "defensepower":25,
                 "magic":10,
                 "speed":-2,
                 "mixeditems":["steel recover"]
                }
              ],
              "items":[
                {"item":"steel recover",
                 "attackpower":0,
                 "defensepower":10,
                 "magic":0,
                 "speed":0,
                 "used":["shield"]
                }
              ],
              "history":[
                {"date":new Date(),
                 "type":"item added",
                 "description":"Steel Recover Added y Boss 3 Dungeon"}
              ],
              "guilds":["Fairy Tail","Shadow Fists"],
              "allies":["Player 2","Player 5"],
              "redplayer":false,
              "banned":false,
              "lastlogon":new Date(),
              "currentLocation":"Central City",
              "locations":["Central City","Boss Dungeon 1","Boss Dungeon 2","Elder Store"]
            };
    db.hwdata.insert(doc);
}
/*
Tarea:
 Usando la función $inc aumentar vitals.strength 20 puntos mas
var inc = {"player":1,"species":1,"gadgets":1,"vitals":1};
db.hwdata.find({"player":"player1"}, inc).pretty();

db.hwdata.update(
  { player: "player1" },
  {$inc :{ "vitals.strength": 20 }}
)


Usando la función $push agregar a guilds el valor "Konoha Sannins"

var push = {"player":1,"guilds":1};
db.hwdata.find({"player":"player1"}, push).pretty();

db.hwdata.update(
  { player: "player1" },
  {$push :{ "guilds":"Konoha Sannins" }}
)

// Usando la funcion $set agregue el atributo revival con valor 200
var set = {"player":1,"species":1,"gadgets":1,"vitals":1, "revival":1};
db.hwdata.find({"player":"player1"}, set).pretty();

db.hwdata.update(
  { player: "player1" },
  {$set :{ "revival":"200" }}
)


// Usando la funcion $currentDate actualizar lastlogon

var set = {"player":1,"lastlogon":1};
db.hwdata.find({"player":"player1"}, set).pretty();

db.users.update(
   { "_id" : ObjectId("54f4ed8d6500a35be7e71ce7") },
   //{ player : "player1") },

   {
     $currentDate: {
        lastlogon: true, { $type: "timestamp" }
   }
)


// Actualice steel recover en items.magic  a 20 y aumente los 20 al defense del
//  gadget shield

var a = {"player":1, "items":1, "gadgets":1};
db.hwdata.find({"player":"player1"}, a).pretty();

db.hwdata.update(
   {player:"player1"},
   { $inc: { "items.0.magic": 20 },"gadgets.1.defensepower":20 }}
);
*/
