const router = require("express").Router()
const db = require('./delay_logs.model')
const moment = require("moment")

router.get('/:id',(req,res) =>{
const id = req.params.id
db.getLogs(id)
.then(logs =>{
    if(logs){
    res.status(200).json({delay_logs:logs})
    }else{
        res.status(400).json({message:"Sorry no logs found for that ID"})
    }
}).catch(error =>{res.status(500).json({message:error.message})})})

router.post("/add",(req,res) => {
    const newLog = req.body
    db.addLogs(newLog)
    .then(newLog =>{
        if(newLog){
            res.status(201).json({newLog:`New Delay Log Created at ${moment().format("LLL")}`})
        }else{
            res.status(409).json({message:"Sorry a log for that project already exists try updating that one!!!"})
        }
    })
    .catch(error => {res.status(500).json({error:error.message})})
})

router.put('/:id',(req,res)=>{
    const changes = req.body
    const id = req.params.id
    db.editLogs(id,changes)
    .then(updatedLog =>{
        res.status(200).json({updatedLog:updatedLog})
    })
    .catch(error => {message:error.message})
})

router.delete('/:id',(req,res) => {
    const id = req.params.id
    db.deleteLogs(id)
    .then(deletedLog =>{
        if(deletedLog){
            res.status(200).json({message:`Log # ${id} delated @ ${moment().format("LLL")}`})
        }else{
            res.status(409).json({message:"Sorry no log matching that id was found"})
        }
    })
    .catch(error => {res.status(500).json({error:error.message})})
})