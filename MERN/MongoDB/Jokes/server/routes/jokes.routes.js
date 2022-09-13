const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokesController.getAllJokes);
    app.get('/api/jokes/:id', JokesController.getJoke);
    app.post('/api/jokes', JokesController.createJoke);
    app.put('/api/jokes/:id', JokesController.updateJoke);
    app.delete('/api/jokes/:id', JokesController.deleteJoke);
}