const express=require('express');
const router=express.Router();
const dbInitializer=require('../db/db_initializer')

router.head('/sync',async function (req,res){
    try{
        await dbInitializer.initializeDatabase();
        console.log('Base de datos inicializacada...')
        res.sendStatus(200);
    }catch(err){
        console.log('Error al sincronizar la db',err)
        res.status(500),jason({error:'Error al sincronizar la db'});
    }
})

module.exports=router;