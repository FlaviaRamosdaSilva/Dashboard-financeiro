import  Express, {json } from 'express';

const app = Express();

app.use(json());

const port = 3333;

app.listen(port, () =>{
    console.log (`🚀 App is running at port ${port}!`)
})