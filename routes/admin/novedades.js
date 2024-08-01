var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

router.get('/', function (req, res, next) {
    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
    });
});


// Listar Novedades
router.get('/', async function(req, res, next) {
    var novedades = await novedadesModel.getNovedades();
    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    });
});

// Mostrar formulario de alta
router.get('/agregar', function(req, res, next) {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

// Agregar Novedad
router.post('/agregar', async function(req, res, next) {
    try {
        var { titulo, subtitulo, cuerpo } = req.body;

        if (titulo && subtitulo && cuerpo) {
            await novedadesModel.addNovedad(titulo, subtitulo, cuerpo);
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'Error al agregar la novedad'
        });
    }
});

module.exports = router;
