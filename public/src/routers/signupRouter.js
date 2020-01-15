var express=require ('express');
var router =express.Router();
const MongoClient=require('mongodb').MongoClient
const assert =  require ( 'assert');
const url='mongodb://localhost:27017';
const dbName='myappdb'
console.log(" im in server");
router.post('/post',(req,res)=>{
    console.log(" im in server1");
    const client=new MongoClient(url);
    client.connect(function(err,client){
        assert.equal(null,err);
        console.log("connected to server");
        const db=client.db(dbName);
        var a=req.body;
        db.collection("newapp").insertOne({a:1},function(err,res){
            console.log("its working");
            assert.equal(null,err);
            client.close();
        })
    })

});
module.exports=router;
