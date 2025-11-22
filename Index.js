const express = require('express');
const app = express();
__path = process.cwd();
const bodyParser = require('body-parser');

const PORT = 8000;
let codePair = require('./pair');


require('events').EventEmitter.defaultMaxListeners = 500;

app.use('/connect', code);
app.use('/pair', async (req, res, next) => { 
        res.sendFile(__path + 'connect.html')
});
app.use('/', async (req, res, next) => { 
        res.sendFile(__path + 'main.html')
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`
  BY CRAZY GIVE A STAR PLS 
  IF YOU RECEIVE THIS REPO :)

  serveur dn ligne sur: https://localhost:` + PORT)
});

module.export = app;

// end 
