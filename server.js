//setting up the server in express 
const express = require("express");
const path = require("path");

let app= express();
let PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());