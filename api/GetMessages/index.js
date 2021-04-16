
module.exports = async function (context, req) {
  
    const mongoose = require('mongoose');
  
    const Message = require('../messageModel');
  
    const messages = await Message.find();
    
    context.res = {
        body: messages
    };
    
    
};