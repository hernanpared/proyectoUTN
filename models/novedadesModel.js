var pool = require('./bd');

async function getNovedades() {
    var query = "SELECT * FROM novedades ORDER BY id DESC";
    var rows = await pool.query(query);
    return rows;
}

async function addNovedad(titulo, subtitulo, cuerpo) {
    var query = "INSERT INTO novedades (titulo, subtitulo, cuerpo) VALUES (?, ?, ?)";
    var rows = await pool.query(query, [titulo, subtitulo, cuerpo]);
    return rows;
}

module.exports = { getNovedades, addNovedad };
