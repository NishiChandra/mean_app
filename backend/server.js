var express = require('express')
var mongo=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/assignment';
var router=express.Router();
var app=express();
var cors=require('cors');

const JsonStreamStringify = require('json-stream-stringify');
app.use(cors({ origin: 'http://localhost:3000/api/retail' }));

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.get('/',function(req,res,next){
    res.json('running');
});

app.get('/api/stores',function(req,res,next){
    var resultArray = [];
    mongo.connect(url,function(err,client){
        if(err) console.log(err);
        var db=client.db('assignment');
        var cursor=db.collection('stores').find();
        cursor.forEach(function(doc,err){
        resultArray.push(doc);
        },function(){
            client.close();
            res.json(resultArray);
        });
    });
});
app.get('/api/sales',function(req,res,next){
    var resultArray = [];
    mongo.connect(url,function(err,client){
        if(err) console.log(err);
        var db=client.db('assignment');
        var cursor=db.collection('Sales').find();
        cursor.forEach(function(doc,err){
        resultArray.push(doc);
        },function(){
            client.close();
            res.json(resultArray);
        });
    });
});
app.get('/api/desc',function(req,res,next){
    var resultArray = [];
    mongo.connect(url,function(err,client){
        if(err) console.log(err);
        var db=client.db('assignment');
        var cursor=db.collection('desc').find();
        cursor.forEach(function(doc,err){
        resultArray.push(doc);
        },function(){
            client.close();
            res.json(resultArray);
        });
    });
});

    mongo.connect(url,function(err,client){
        if(err) console.log(err);
        var db=client.db('assignment');
        app.get('/api/retail',function(req,res,next){
        var stream=db.collection('retail').find().limit(1000).batchSize(100).stream();
        new JsonStreamStringify(stream).pipe(res);
    });
});


module.exports = router;
app.listen(3000);
console.log('running on port 3000')