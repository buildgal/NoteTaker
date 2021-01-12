let path = require("path");
module.exports = function (app){
    app.post("/notes", function(req,res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    })

    app.get("/notes", function(req,res){
        res.readFile(path.join(__dirname, "../public/index.html"));
    })
}