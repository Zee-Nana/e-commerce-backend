const express = require("express")
const myapp = express();
const user = require('./user.json')

myapp.get("/api/users", (req, res) => {
    res.send(user)
});

myapp.listen(8000, () => {
    console.log('server listening on port 8000')
})



