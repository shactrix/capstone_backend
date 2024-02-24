const mongoose = require('mongoose');
const {MONGODB_URI} = process.env

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
mongoose.connection
  .on('open', () => console.log('Your are connected to mongoose'))
  .on('close', () => console.log('Your are disconnected from mongoose'))
  .on('error', (error) => console.log(error));

  module.exports = {
    Post: require('./Post'),
    User: require('./User')
}