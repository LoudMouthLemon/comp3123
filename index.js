var express = require('express')

const SERVER_PORT = 3000
var app = express()

//Static middleware
app.use("/test", express.static("./public"))
app.use(express.json())
//app.use(express.text())
//https://expressjs.com/en/4x/api.html#express.urlencoded
app.use(express.urlencoded({extended:true}))

// GET /hello
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=&lastname=
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Jerry-Lee";
  const lastname = req.query.lastname || "Somera";
  res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.send(`User: ${firstname} ${lastname}`);
});

// POST /users  (expects an array of { firstname, lastname })
app.post("/users", (req, res) => { 
  const users = Array.isArray(req.body) ? req.body : [];
  res.json(users);
});

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})