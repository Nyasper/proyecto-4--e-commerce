import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import routes from './routes/route.js';


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', 'src/views');

//statcs files
app.use("/", express.static(`src/public`))


app.use('/', routes);
app.listen(port, () => console.log(`Server open on http://localhost:${port}`));