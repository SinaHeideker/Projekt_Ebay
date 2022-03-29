const mongoose = require('mongoose');


//Schema erstellen - damit wird festgelegt, wie die Daten für einen User aussehen


const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);