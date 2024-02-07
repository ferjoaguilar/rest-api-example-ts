import express from 'express';
import accomodationRoutes from './accomodations.routes';


function routerApi(app: express.Application) {
    const router = express.Router()

    app.use('/api/v1', router)

    router.use('/accomodations', accomodationRoutes)
}

export default routerApi