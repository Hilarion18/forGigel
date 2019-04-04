const bcrypt = require('bcryptjs')

function checkPassword (salt, password, email) {
  console.log(`ini salt `, salt);
  console.log(`ini password `, password);
  console.log(`ini email `, email);
  return new Promise((resolve, reject) => {
      const emailPassword = email + password
      bcrypt.compare(emailPassword, salt, function (err, data) {
          if (data) {
              console.log(`masuk akses password bener `+data);
              
              resolve(data)
          } else {
              console.log(`gagal akses user `+err);
              
              reject(err)
          }
      });
  })
}

module.exports = checkPassword