import express from "express";

const app = express()

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("<h1>we are in root</h1>");
})

app.get('/profile', (req, res) => {
  res.send("getting profile");
})

app.post('/profile', (req, res) => {
  console.log(req.body);
  res.send('Success');
})
app.listen(3000);