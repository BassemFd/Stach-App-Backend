var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
}
mongoose.connect('mongodb+srv://juliette:LaCapsule@cluster0.9clin.mongodb.net/Stach?retryWrites=true&w=majority',
    options,
    function(err) {
    console.log(err);
});