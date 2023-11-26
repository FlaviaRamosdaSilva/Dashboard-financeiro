import  Express, {json } from 'express';
import { routes } from './routes';

const app = Express();

app.use(json());
app.use(routes);

const port = 3333;
app.listen(port, () =>{
    console.log (`🚀 App is running at port ${port}!`)
})