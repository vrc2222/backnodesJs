let app= require('./server');

const dotenv=require('dotenv');

dotenv.config()

const port= process.env.NODE_ENV==='dev'? process.env.PORT_APP || 80:5000

app.listen(port,()=> console.log('Servidor escuchando en el puerto'+ port)) 
// funcion imprimir => 

