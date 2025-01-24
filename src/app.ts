import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
// eslint-disable-next-line import/no-extraneous-dependencies
import bodyParser from 'body-parser';
import path from 'path';

import * as middlewares from './middlewares';
import api from './api';


require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { contacts: [], query: '', error: null });
});
app.use('/yellowPage', api);
app.use('/api', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 8180;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

export default app;
