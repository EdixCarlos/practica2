import { Router } from 'express'

const router = Router()

router.get('/', (req,res)=>{
    res.send('Bienvenido')
})

export default router
