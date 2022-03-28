
const homeRouter = require('./home.router')


function routerViews (app) {
   //rutra maestra para generar versionado
  app.use('/' , homeRouter);
};

module.exports =  routerViews ;