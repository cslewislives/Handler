const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: {
    type: String,
    lowercase: true,
    required: [
      true, "can't be blank"
    ],
    unique: true,
    match: [/^[a-zA-Z0-9]+$/, 'is invalid']
  },
  password: {
    type: String,
    required: [true, "can't be blank"]
  }
}, {timestamps: true});

UserSchema.methods.comparePassword = function (password, callback) {
  console.log('got to compare');
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) 
      return callback(err);
    callback(null, isMatch);
  });
};

/**
 * The pre-save hook method.
 */
UserSchema.pre('save', function (next) {
  const user = this;
  console.log('got to user save');
  // proceed further only if the password is modified or the user is new
  
  if (!user.isModified('password')) {
    console.log('got to isModified');
    return next();
  } else {
    let salt = bcrypt.genSaltSync(12);
    console.log('got to bcrypt');

    let hash = bcrypt.hashSync(user.password, salt);
    console.log(hash)
    // replace a password string with hash value
    user.password = hash;
    console.log(user.password);

    return next();
  }
});

/**
 * The pre-save hook method.
 */
// UserSchema.pre('save', function saveHook(next) {
//   const user = this;

//   // proceed further only if the password is modified or the user is new
//   if (!user.isModified('password')) return next();


//   return bcrypt.genSalt((saltError, salt) => {
//     if (saltError) { return next(saltError); }

//     return bcrypt.hash(user.password, salt, (hashError, hash) => {
//       if (hashError) { return next(hashError); }

//       // replace a password string with hash value
//       user.password = hash;

//       return next();
//     });
//   });
// });

module.exports = mongoose.model('User', UserSchema);
