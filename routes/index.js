
const homeRouter = require('./home.router')


function routerViews (app) {
  app.use('/' , homeRouter);
};

module.exports =  routerViews ;