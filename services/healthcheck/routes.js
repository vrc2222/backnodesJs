const express=require('express');
const router=express.Router();

// Ruta de acceso al test de conecxion

router.get('/',(req,res)=> {
    res.send('API funcionando correctamente')
})

module.exports=router;