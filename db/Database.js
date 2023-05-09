const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
    })
    .then((data) => {
      console.log(`MongoDb connectd with server : ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
