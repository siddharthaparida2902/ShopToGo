var express = require("express");
var router = express.Router();

router.get('/', (req, res) => {
  var empDetails ={
    name: "Siddhu",
    age: 22
  };
  res.send(JSON.stringify(empDetails))
});

module.exports = router;