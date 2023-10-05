const mongoose = require("mongoose");

mongoose.connect(process.env.URL, {
  useNewUrlParser: "true",
});
mongoose.connection.on("error", (err) => {
  console.log("mongoose Connection Error", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
}); 


// const knex = require('knex')({
//     client: 'pg', // PostgreSQL client
//     connection: {
//       host: process.env.DB_HOST,
//       port: process.env.DB_PORT,
//       user: process.env.DB_USERNAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_DB_DATABASE,
//     },
//   });
  
//   module.exports = knex;
  