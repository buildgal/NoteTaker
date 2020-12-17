module.exports = function (app){
    app.post("/notes", function(req,res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    })
}