const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.json());

mongoose.connect('mongodb+srv://chouikh:123@cluster0.neb2c.mongodb.net/support?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
} ,
(err) => {
  if (!err) console.log('db connected');
  else console.log('db erreur');
}
);

const clientAccessSchema = {
  Login: String,
  Mdp: String
}

const Client = mongoose.model('Client', clientAccessSchema);

app.get('/', (req, res) => {
  Client.find({}, function(err, client) {
    res.render('login', {
      clientList: client
    })
  })
})



app.listen(3000, function() {
  console.log('Server is running at port 3000');
})