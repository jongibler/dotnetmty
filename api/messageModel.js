
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text: String    
});

mongoose.connect('mongodb+srv://testuser:testuser@testcluster.9n8f6.mongodb.net/test-db?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
  
module.exports = mongoose.model('test-messages', messageSchema);