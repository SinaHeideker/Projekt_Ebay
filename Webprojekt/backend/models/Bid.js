const mongoose = require('mongoose');

//Schema erstellen - damit wird festgelegt, wie ein Gebot aussieht


const BidSchema = mongoose.Schema({
    articleID: {
        type: String,
        required: true 
    },
    userID: {
        type: String,
        required: true 
    },
    price: {
       type: Number,
       required: true
   },
    date: {
        type: Date,
        default: Date.now 
    }
});

module.exports = mongoose.model('Bid', BidSchema);         //dies sieht man dann in der Datenbank als "Bid"