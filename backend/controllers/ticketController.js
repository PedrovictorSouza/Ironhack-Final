const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

// @desc Get user tickets
// @desc GET /api/tickets
// @desc Private
const getTickets = asyncHandler(async (req,res) => {
    const user = await User.findById(req.user.id);

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const tickets = await Ticket.find({user: req.user.id})

    res.status(200).json(tickets)
})

// @desc Get user tickets
// @desc GET /api/tickets/:id
// @desc Private
const getTicket = asyncHandler(async (req,res) => {
    // Get user using id in the JWT.
    const user = await User.findById(req.user.id);

    if(!user) {
        res.status(401)
        throw new Error('User not found');
    }

    const ticket = await Ticket.findById(req.params.id);

    if(!ticket) {
        res.status(404)
        throw new Error('Ticket not found');
    }

    if (ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized');
    }

    res.status(200).json(ticket);
})


// @desc Create new ticket
// @desc POST /api/tickets
// @desc Private
const createTicket = asyncHandler(async (req,res) => {
    
    const {description, title, answer1, answer2, answer3} = req.body;
    

    if(!description || !title ) {
        res.status(400)
        throw new Error('Please add description and check');
    }

    const user = await User.findById(req.user.id);
    console.log(user);

    if(!user) {
        res.status(401)
        throw new Error('User not found');
    }
    
   
    Ticket.create({
        title,
        description,
        answer1,
        answer2,
        answer3,
        user: req.user.id,
        status: 'new',
    }).then(response => {console.log(response)});
    console.log(ticket);

    res.status(201).json({ticket});
    console.log('nunca é chamado');
})

// @desc Delete user ticket
// @desc DELETE /api/tickets/:id
// @desc Private
const deleteTicket = asyncHandler(async (req,res) => {
    // Get user using id in the JWT.
    const user = await User.findById(req.user.id);

    if(!user) {
        res.status(401)
        throw new Error('User not found');
    }

    const ticket = await Ticket.findById(req.params.id);

    if(!ticket) {
        res.status(404)
        throw new Error('Ticket not found');
    }

    if (ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized');
    }

    await ticket.remove()

    res.status(200).json({success: true});
})

// @desc Update ticket
// @desc PUT /api/tickets/:id
// @desc Private
const updateTicket = asyncHandler(async (req,res) => {
    // Get user using id in the JWT.
    const user = await User.findById(req.user.id);

    if(!user) {
        console.log('not authorized in loop');
        res.status(401)
        throw new Error('User not found');
    }

    const ticket = await Ticket.findById(req.params.id);

    if(!ticket) {
        res.status(404)
        throw new Error('Ticket not found');
    }

    if (ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized');
    }


    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true})

    res.status(200).json(updatedTicket);
})



module.exports = {
    getTickets,
    getTicket,
    createTicket,
    deleteTicket,
    updateTicket
}
