import {Router} from 'express'
const router = Router()

//db connect
import {connect} from '../database'
import {ObjectID} from 'mongodb'

router.get('/', async (req,res)=>{
    const db = await connect()
    const result = await db.collection('entidades').find({}).toArray()
    console.log(result)
    res.json(result)
})

router.post('/',async (req,res)=>{
    const db = await connect()
    const entidad = {
        nombre: req.body.nombre,
        ruc: req.body.ruc,
        cuentas: req.body.cuentas
    }
    const result = await db.collection('entidades').insert(entidad)
    res.json(result.ops[0])
})

router.get('/:id',async (req, res)=>{
    const {id}= req.params
    const db = await connect()
    const result = await db.collection('entidades').findOne({_id: ObjectID(id)})
    res.json(result)
})
router.delete('/:id', async (req,res)=>{
    const {id} = req.params
    const db = await connect()
    const result = await db.collection('entidades').deleteOne({_id: ObjectID(id)})
    res.json({
        message: `Entidad ${id} eliminada`,
        result
    })
})

router.put('/:id', async (req, res)=>{
    const {id}=req.params
    const updateEntidad= {
        nombre: req.body.nombre,
        ruc: req.body.ruc,
        cuentas: req.body.cuentas
    }
    const db = await connect()
    await db.collection('entidades').updateOne({_id: ObjectID(id)},{$set:updateEntidad})
    res.json({
        message: `Entidad  ${id} Editada`
    })
})





export default router