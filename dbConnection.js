exports.dbconnection=()=>{
   
    const pool = new sql.ConnectionPool({ // `pool` - clear variable name
        user: 'root',
        password: '',
        database: 'dbperson',
        server: 'localhost', // Example
      });
    return pool;
}