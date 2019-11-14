require('dotenv').config()
const router = require('express').Router();

const cloudStorage = process.env.STORAGE_BUCKET
const storage = storage(cloudStorage)
const upLoadDocs = require('express-fileupload')

router.post('/:uid/doc-center/upload',(req,res,next)=>{
    console.log(req.data)
    let uploadFile = upLoadDocs 
    let uid = req.params.uid
    const fileName = req.uid/'test'
 
    uploadFile.mv(
        `gs://${cloudStorage}/${uid}/${fileName}`,
        function (err){
            if (err){
                res.status(500).send(err)
            }
            res.json({
                file:`${uid}/${fileName}`
            })
        }
    )
})
module.exports = router