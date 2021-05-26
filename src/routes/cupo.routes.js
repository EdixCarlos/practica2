import {Router} from 'express'
const router = Router()

//db connect
import {connect} from '../database'
import {ObjectID} from 'mongodb'

router.get('/', async (req,res)=>{
    const db = await connect()
    const result = await db.collection('cuentacupo').find({}).toArray()
    console.log(result)
    res.json(result)
})

router.post('/',async (req,res)=>{
    const db = await connect()
    const entidad = {
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
    }
    const result = await db.collection('cuentacupo').insertOne(entidad)
    res.json(result.ops[0])
})

router.get('/:id',async (req, res)=>{
    const {id}= req.params
    const db = await connect()
    const result = await db.collection('cuentacupo').findOne({_id: ObjectID(id)})
    res.json(result)
})
router.delete('/:id', async (req,res)=>{
    const {id} = req.params
    const db = await connect()
    const result = await db.collection('cuentacupo').deleteOne({_id: ObjectID(id)})
    res.json({
        message: `Entidad ${id} eliminada`,
        result
    })
})

router.put('/:id', async (req, res)=>{
    const {id}=req.params
    const updateEntidad= {
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
    }
    const db = await connect()
    await db.collection('cuentacupo').updateOne({_id: ObjectID(id)},{$set:updateEntidad})
    res.json({
        message: `Entidad  ${id} Editada`
    })
})





export default router