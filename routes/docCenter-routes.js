require('dotenv').config()
const router = require('express').Router();
const Firebaseconfig = require('../Firebaseconfig')
const cloudStorage = process.env.STORAGE_BUCKET

const upLoadDocs = require('express-fileupload')

router.post('/:uid/doc-center/upload',(req,res,next)=>{
    let uploadFile = req.files.file
    let uid = req.params.uid
    const fileName = req.files.file.name
    uploadFile.mv(
        `gs://${cloudStorage}/${uid}/${fileName}`,
        function (err){
            if (err){
                res.status(500).send(err)
            }
            res.json({
                file:`${uid}/${req.files.file.name}`
            })
        }
    )
})
module.exports = router