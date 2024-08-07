var pool = require("./bd");

async function getNovedades() {
  var query = "SELECT * FROM novedades ORDER BY id ASC";
  var rows = await pool.query(query);
  return rows;
}

async function insertNovedad(obj) {
  try {
    var query = "insert into novedades set ?";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  } // cierra catch
} //cierra insert

async function deleteNovedadeByID(id) {
  var query= 'delete from novedades where id =?';
  var rows = await pool.query(query,[id]);
  return rows;
  
}


module.exports = { getNovedades, insertNovedad, deleteNovedadeByID };
