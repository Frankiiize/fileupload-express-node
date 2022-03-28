const express = require('express');
const routerViews = require('./routes');
const app = express();
const port = 3100;

app.use(express.static('public'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));

routerViews(app);

app.listen(port, () => {

  console.log(`server on at port ${port}`)
})