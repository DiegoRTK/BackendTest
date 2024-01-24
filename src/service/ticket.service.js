const mongoose = require('mongoose');
const TicketModel = require('../schemas/ticketModel');

const createTicket = async (body) => {
    return (await TicketModel.create(body)).save()
};

const updateTicket = async (body, id) => {
    const objectId = new mongoose.Types.ObjectId(id);
    const updatedTicket = await TicketModel.findOneAndUpdate({ _id: objectId }, body, { new: true }).exec()
    if (!updatedTicket) {
        throw Error('No se encontró el documento con el ID proporcionado.')
    }
    return updatedTicket;
}

const deleteTicket = async (id) => {
    await TicketModel.deleteOne({ _id: id }).exec()
    return { message: 'Ticket eliminado exitosamente' };
}

const getTickets = async (filters) => {
    const { page = 1, pageSize = 10 } = filters;
    const skip = (page - 1) * pageSize;
    const keys = Object.keys(filters)
    if(keys.length === 0) { 
        return await TicketModel.find()
        .skip(skip)
        .limit(parseInt(pageSize))
        .exec()
    }
    else { 
        return await TicketModel.aggregate([
            {
                $match: filters
            }
        ])
        .skip(skip)
        .limit(parseInt(pageSize))
        .exec()
    }
}

module.exports = { createTicket, updateTicket, deleteTicket, getTickets }