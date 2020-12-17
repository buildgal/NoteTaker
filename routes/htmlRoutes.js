module.exports = function (app){
    app.post("/notes", function(req,res){
        res.sendFile(path.join(__dirname, "../public/db.json"));
    })

    app.get("/notes", function(req,res){
        res.readFile(path.join(__dirname, "../public/db.json"));
    })
}