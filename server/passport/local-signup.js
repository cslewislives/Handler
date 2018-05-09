const { User } = require('../models');
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
  const userData = {
    firstName: req.body.firstName.trim(),
    lastName: req.body.lastName.trim(),
    username: username.trim(),
    password: password.trim()
  };
 console.log('got to local')
  let newUser = new User(userData);
  console.log(newUser);
  // User.create(userData).then(data => {
  //   console.log(data);
  //   console.log('got to save');
  //   return done();
  // }).catch(err => {
  //   console.log(err);
  //   if (err) { return done(err); }
  // });
  newUser.save((err) => {
    if (err) { return done(err); }
    console.log('saved');
    return done(null);
  });

});
