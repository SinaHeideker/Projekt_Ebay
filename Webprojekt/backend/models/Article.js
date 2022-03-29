const mongoose = require('mongoose');


//Schema erstellen - damit wird festgelegt, wie ein Artikel aussieht


const ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: true 
    },
   price: {
       type: Number,
       required: true
   },

   productImage: {
       type: String,        //da es sich um eine URL handelt
       required: true
   },

    date: {
        type: Date,
        default: Date.now 
    },

    available: {
        type: Number,
        default: -1
    }
});

module.exports = mongoose.model('Article', ArticleSchema);         //dies sieht man dann in der Datenbank als "Article"