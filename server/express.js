import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import path from 'path';

//template
import template from './../template.js';

//routes
import userRoutes from './../routes/user.routes.js';
import authRoutes from './../routes/auth.routes.js';
import productRoutes from './../routes/product.routes';
import contactRoutes from './../routes/contact.routes';

//modules for server side rendering
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MainRouter from '../client/MainRouter';
import { StaticRouter } from 'react-router-dom';

import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import theme from './../client/theme';

//comment out for production 
import devBundle from './devBundle.js';

const CURRENT_WORKING_DIR = process.cwd();
const app = express();

//comment out for production 
devBundle.compile(app)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(cookieParser());
app.use(compression());
app.use(helmet());
app.use(cors());

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.use('/', contactRoutes);
app.use('/products', productRoutes);
app.use('/api', userRoutes);
app.use('/auth', authRoutes);

app.get('*', (req, res) => {
  const sheets = new ServerStyleSheets()
  const context = {}
  const markup = ReactDOMServer.renderToString(
    sheets.collect(
          <StaticRouter location={req.url} context={context}>
            <ThemeProvider theme={theme}>
              <MainRouter />
            </ThemeProvider>
          </StaticRouter>
        )
    )
    if (context.url) {
      return res.redirect(303, context.url)
    }
    const css = sheets.toString()
    res.status(200).send(template({
      markup: markup,
      css: css
    }))
});

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message})
    console.log(err)
  }
});

export default app