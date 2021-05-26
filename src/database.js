import MongoClient from 'mongodb' 

export async function connect(){
    
    try{
        const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.nqkx7.mongodb.net?retryWrites=true&w=majority',{ useUnifiedTopology: true })
        const db = client.db('cliente')
        console.log('db is conected')
        return db;
    }catch{
        console.log('Error')
    }
}
