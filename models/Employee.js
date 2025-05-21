const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true,
  },
   email: {
    type: String,
    required: true,
    unique: true
  },
   contact: {
    type: String,
    required: true,
    unique: true
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee

