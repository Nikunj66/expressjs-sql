var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"dbperson"
  });
  con.connect(function(err) {
    if (err) throw err;
  });
exports.getAll=(req,res)=>{
    
        con.query("SELECT * FROM tbl_person", function (err, result, fields) {
          if (err) throw err;
          res.json(result);
        });
};

exports.getOne=(req,res)=>{
    
        con.query("SELECT * FROM tbl_person where id="+req.params.id, function (err, result, fields) {
          if (err) throw err;
          res.json(result);
        });
};

exports.addPerson=(req,res)=>{
    con.query("insert into tbl_person(name,age) values('"+req.body.name+"','"+req.body.age+"')", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
      });
}

exports.deletePerson=(req,res)=>{
    con.query("delete from tbl_person where id="+req.params.id, function (err, result, fields) {
        if (err) throw err;
        res.json(result);
      });
}

exports.updatePerson=(req,res)=>{
    con.query("update tbl_person set name='"+req.query.name+"',age="+req.query.age+" where id="+req.params.id, function (err, result, fields) {
        if (err) throw err;
        res.json(result);
      });
}
