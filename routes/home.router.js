const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const path  = require('path');

router.use(fileUpload({
  limits: { fileSize: 5000000 },
  abortOnLimit: true,
  responseOnLimit: 'exede el tamaño permitido',
}));

router.get('/',(req,res) => {
  res.sendFile(path.join(process.cwd()+'/views/index.html'));
});

router.post('/', (req, res) => {
  const { foto } = req.files;
  const { name } = foto;
  if(foto.mimetype !== 'image/jpeg'){
    if(foto.mimetype !== 'image/png'){
      return res.status(406).send('<p>solo se admiten archivos jpg o png</p><a href="/">GO HOME</a>');
    };
  };
  foto.mv(`${process.cwd()}/archivos/${name}`,(error) => {
    if(error){
      return  res.status(500).send(error);
    };
    res.status(202).sendFile(path.join(process.cwd()+'/views/upLoadResponse.html'));
  });
});

module.exports = router ;