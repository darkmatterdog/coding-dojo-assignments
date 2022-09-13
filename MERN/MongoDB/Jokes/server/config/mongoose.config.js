const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
    .then(() => console.log("Connected to database!"))
    .catch(err => console.log(`Encountered an error: ${err}`))