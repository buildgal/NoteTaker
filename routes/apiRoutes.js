const fs = require("fs");

module.exports = function(app){
  let notes = require("../db/db.json")

    app.get("/api/notes", function(req, res) {
     
        return res.json(notes)
      })

    app.get("/api/notes/:id", function(req, res) {
        const id= req.params.id;
        let found; 
        notes.forEach( n => {
          if (id == n.id){
            found = n;
            return res.json(n)
          }
        })
        return res.json(false)
      })

      app.post("/api/notes", function(req, res) {
        const newNote= req.body;
        if (notes.length === 0){
          newNote.id=1}
            else{
              newNote.id=(notes[notes.length-1].id +1);
              }
              notes.push(newNote);
              let jsonNotes = JSON.stringify(notes)
              fs.writeFile("./db/db.json", jsonNotes, function(err){
                if(err){
                  return console.log(err);
                }
                console.log("Success");
                })
                res.json(true)
              })
      
      app.delete("/api/notes/:id", function (req,res) {
        const id = req.params.id;
        notes.forEach((n, index) =>{
          if (id == n.id){
            notes.splice(index,1)
            const notesCopy = notes.splice();
            let jsonNotes = JSON.stringify(notesCopy)
            fs.writeFile("./db/db.json", jsonNotes, function (err){
              if (err){
                return console.log(err);
              }
              console.log("Success");
            })
            }
          })
          res.json(true);
        })
      }