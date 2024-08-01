var pool = require("./bd");

async function getNovedades() {
  var query = "SELECT * FROM novedades ORDER BY id ASC";
  var rows = await pool.query(query);
  return rows;
}

module.exports = { getNovedades };
