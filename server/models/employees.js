const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [
        true, "can't be blank"
        ]
    },
    lastName: {
        type: String,
        required: [
        true, "can't be blank"
        ]
    },
    email: {
        type: String,
        lowercase: true,
        required: [
        true, "can't be blank"
        ],
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    phone: String,
}, {timestamps: true});

EmployeeSchema.methods.setFullName = function() {
    // Set the current user's `fullName` to their `firstName` and their `lastName` together
    this.fullName = this.firstName + " " + this.lastName;
    // Return the new `fullName`
    return this.fullName;
  };

module.exports = mongoose.model('Employee', EmployeeSchema);