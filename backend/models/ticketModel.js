const mongoose = require('mongoose');


//define the common properties that a collection will have
const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'Please enter the title of the decision'],
    },
    description: { 
        type: String,
        required: [true, 'Please enter a description of the issue'],
    },
    check: {
        type: Boolean
    }, 
    status: {
        type: String,
        required: true,
        enum: ['new', 'open', 'closed'],
        default: 'new',
    }
}, 
{
    timestamps: true,
}
);

module.exports = mongoose.model('Ticket', ticketSchema);