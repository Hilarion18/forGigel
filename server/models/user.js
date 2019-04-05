const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const generatePassword = require("../helpers/generatePassword");
const bcrypt = require("bcryptjs");


var userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is requires"]
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      validate: {
        validator(val) {
          var emailRegex = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
          if(!emailRegex.test(val)){
            throw new Error('your email is not valid');
          }
        }
      },
      required: [true, "email is required"]
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: [true, "phone number must be filled"],
      minlength: [10, "phone number min 8 number"],
    },
    password: {
      type: String,
      required: [true, "password is requires"],
      minlength: [8, "password min 8 character"]
    },
  },
  {
    timestamps: true
  }
);

userSchema.post("validate", doc => {
  doc.password = bcrypt.hashSync(
    doc.password,
    Number(process.env.SALT_PASSWORD)
  );
});

userSchema.path('email').validate(async (value) => {
  const emailCount = await mongoose.models.User.countDocuments({email: value });
  return !emailCount;
}, 'Email already existed, use another email');

userSchema.path('phoneNumber').validate(async (value) => {
  const phoneNoCount = await mongoose.models.User.countDocuments({phoneNumber: value });
  return !phoneNoCount;
}, 'Phone number already existed, use another phone number');

userSchema.post("save", function(user) {
  generatePassword(this.email, this.password).then(function(newPassword) {
    User.update({ _id: user._id }, { password: newPassword })
      .then(function() {})
      .catch(function() {});
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;
