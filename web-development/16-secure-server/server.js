import express from 'express';
import bcrypt from 'bcryptjs';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

const database = {
  users: [
    {
      id: '1',
      name: 'John',
      email: 'john@gmail.com',
      password: 'cookies',
      entries: 0,
      joined: new Date()
    },
    {
      id: '1',
      name: 'Peyman',
      email: 'pey@gmail.com',
      password: 'banana',
      entries: 0,
      joined: new Date()
    }
  ],
  login: [
    {
      id: '908',
      hash: '',
      email: 'john@gmail.com'
    }
  ]
}

app.get('/', (req, res) => {
  res.send(database.users);
})

app.post('/signin', (req, res) => {
  let is_found = false;
  for (let i = 0; i < database.users.length; i++) {
    if (req.body.email === database.users[i].email &&
      req.body.password === database.users[i].password) {
        is_found = true;
        return (res.json(database.users[i]));
      }
  }
  if (!is_found) {
    res.status(400).json('error logging in');
  }
})

app.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  const new_id = database.users.length + 1
  database.users.push({
    id: new_id,
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date()
  })
  res.json(database.users[database.users.length-1]);
})

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  })
  if (!found) {
    res.status(404).json('user not found');
  }
})

app.put('/image', (req, res) => {
  const { id } = req.body;
  let found = false;
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      user.entries++
      return res.json(user.entries);
    }
  })
  if (!found) {
    res.status(404).json('user not found');
  }
})

app.listen(3001, () => {
  console.log('app is running on port 3001');
})