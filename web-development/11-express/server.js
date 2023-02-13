import express from "express";

const app = express()

app.get('/', (req, res) => {
  res.send("we are in root")
})

app.get('/profile', (req, res) => {
  const user = {
    name: "Sally",
    age: 5
  }
  res.send(user)
})
app.listen(3000)