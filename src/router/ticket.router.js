const express = require('express')
const router = express.Router()
const { createTicket, updateTicket, deleteTicket, getTickets } = require('../service/ticket.service')
require('../db/connection')

router.post('', async (req, res) => {
    const { body } = req
    try {
        return res.status(200).send(await createTicket(body))
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

router.patch('/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
        return res.status(200).send(await updateTicket(body, id))
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        return res.status(200).send(await deleteTicket(id))
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})


router.get('/tickets', async (req, res) => {
    const { query } = req
    try {
        return res.status(200).send(await getTickets(query))
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

module.exports = router
