const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/productmanager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to database successfully!"))
.catch(err => console.log("Something went wrong:", err));