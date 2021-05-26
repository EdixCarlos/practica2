import express, {json} from 'express'

const app = express()

//routes
import IndexRoutes from './routes/index.routes'
import EntitiesRoutes from './routes/entidades.routes'
import CupoRoutes from './routes/cupo.routes'
//settings
app.set('port', process.env.PORT || 3001)

//middlewares
app.use(json())

//routes
app.use(IndexRoutes)
app.use('/entidades', EntitiesRoutes)
app.use('/cuentascupo', CupoRoutes)
export default app;