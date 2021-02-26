var mongoose = require('mongoose');

var appointmentSchema = mongoose.Schema({
    chosenOffer: String,
    chosenPrice: Number,
    chosenEmployee: String,
    chosenPackage: String,
    startDate: Date,
    endDate: Date,
    chosenPayment: String,
    appointmentStatus: String,
});

var AppointmentModel = mongoose.model('appointments', appointmentSchema);

module.exports = AppointmentModel;