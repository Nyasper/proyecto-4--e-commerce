import express from 'express';
import { engine } from 'express-handlebars';
import session from 'express-session';
import bodyParser from 'body-parser';
import routes from './routes/route.js';
import adminRoutes from './routes/adminRoutes.js';


const app = express();
const port = process.env.PORT || 3000;



app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', 'src/views');

// app.locals.localVariable = 'Aqui el Footer'; //local Variable

app.use(session({
  secret:'clave',
  resave:true,
  saveUninitialized:true
}))
  
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => { //Middleware para comprobar si el usuario esta logeado para mostrar/ocultar botones del navbar
  res.locals.auth = req.session.authorized || false;
  res.locals.user = req.session.authorized ? req.session.user  : null;
  next();
});

//statcs files
app.use("/admin", express.static(`src/public`))
app.use("/", express.static(`src/public`))

//routes
app.use('/admin', adminRoutes);
app.use('/', routes);

//port
app.listen(port, () => console.log(`Server open on http://localhost:${port}`));