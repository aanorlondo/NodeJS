//this node shows how URLs are processed in Node.js
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr,true);

//parsing a URL with the parse method returns a URL object (q here)
//with each part of the address (adr) as properties and values

console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'


//adr = 'http://   localhost:8080     /default.htm    ?year=2017&month=february';
//q =                  host             pathname                 search
//    q.search = "text"        /     q.query = search as object
//?year=2017&month=february    /  { year: 2017, month: 'february' }
     