import express from "express";

const app = express()

app.use((req, res, next) => {
  console.log("<h1>Hello</h1>");
  next();
})

app.get('/', (req, res) => {
  res.send("<h1>we are in root</h1>")
})

app.get('/profile', (req, res) => {
  const user = {
    name: "Sally",
    age: 5
  }
  res.send(user)
})
app.listen(3000)