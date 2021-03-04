let path = require("path");
module.exports = function (app){
    app.post("/notes", function(req,res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    })

    //if none of the other routes match give the home page
    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
}