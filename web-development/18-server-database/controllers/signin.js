const handleSignin = (req, res, db, bcrypt) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json('none of the fields should be blank')
  }
  db.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
      const is_valid = bcrypt.compareSync(password, data[0].hash);
      if (is_valid) {
        return db.select('*').from('users')
          .where('email', '=', email)
          .then(user => {
            res.json(user[0])
          })
          .catch(err => res.status(400).json('unable to get user'))
      } else {
        res.status(400).json('wrong credentials')
      }
    })
    .catch(err => res.status(400).json('wrong credentials'))
}

export default handleSignin;