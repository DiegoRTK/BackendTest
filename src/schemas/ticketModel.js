const mongoose = require('mongoose');
const StatusEnum = require('../enum/statusEnum')

const ticketSchema = new mongoose.Schema({
  user: {
    type : String,
    required : true  
  },
  status: {
   type: String,
   enum : Object.values(StatusEnum),
   required: true
  }
},{ timestamps: true });

const TicketModel = mongoose.model('Ticket', ticketSchema);

module.exports = TicketModel;