import { Router } from "express";
import packageJson from "../../package.json"


export const baseRoutes = Router();

baseRoutes.get('/', (_, res) => { // quando não vai usar a req, não importa o que vai chegar, você usa o _
 const {name, version, description, author} = packageJson;

 res.status(200).json({name, version, description, author});
})
// essa baseroutes foi criada para verificar dentro do Insominia se a nossa aplicação está funcionando.