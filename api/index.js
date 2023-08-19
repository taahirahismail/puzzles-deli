const {express, routes} = require('./controllers');
const path = require('path');
const app = express();
const port = +process.env.PORT || 3000;

const cors = require('cors');

// static
app.use(express.static('./static'));
app.use(
    express.urlencoded({
        extended: false
    }),
    routes
);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    next();
});

routes.get('/puzzlesdeli-routes',
(req, res) => {
    res.sendFile(path.resolve(__dirname, './static/html/index.html'));
});

app.listen(port, () => {
    console.log(`Puzzles Deli server be running on port ${port}`);
});