require('dotenv').config('./env')
const db = require('./docs-model')
const aws = require('aws-sdk')
const router = require('express').Router();
aws.config.update({
    region: 'us-west-2', // Put your aws region here
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET
  })
 const S3_BUCKET = process.env.BUCKET_NAME
const s3 = new aws.S3();  // Create a new instance of S3
/** A Post to /docs/documents will start the upload process
 *  If all requirements are met it will send a signed url
 *  back to the client
 * @swagger:
 * /:   post:
 *         description: Start the upload process
 *               responses:
 *                     success:true
 *                        description: A signed url 
 */
router.post("/documents",(req,res)=>{
    const fileName = req.body.fileName;
const fileType = req.body.fileType;
const uid = req.body.user_id


const s3Params = {
    Bucket: S3_BUCKET,
    Key: `${uid}/${fileName}`,
    Expires: 500,
    ContentType: fileType,
    ACL: 'public-read'
  };
  s3.getSignedUrl('putObject',s3Params,(err,data) =>{
      if(err){
          console.log(err)
          res.json({success:false,error:err})
      }
      const returnData = {
          signedRequest :data,
          url: `https://${S3_BUCKET}.s3.amazonaws.com/${uid}/${fileName}`
      };
      res.json({success:true,data:{returnData}});
  })
    

 
})

/** Delete /url/:id 
 * @swagger
 * /: 
 *     delete:
 *        description: Deletes the record from the table
 *                requires: @params = id 
 *                              @body = fileName 
 *              responses:
 *                  204:
 *                   description: Deletes The Record From The Database
 *  */
router.delete('/url/:id',(req,res)=>{
   
    const id = req.params.id
    const url = req.body.url
    const uid=req.headers.user_id
    const fileName=req.body.fileName
    const s3Params ={
        Bucket: S3_BUCKET,
    Key: `${uid}/${fileName}`,
    Expires: 500,
 
    }

  
    console.log(uid,fileName)
    s3.deleteObject(s3Params,(err,res)=>{
        if(err){
            console.log(err.message)
            res.json({sucess:false,error:err})
        }
        res.json({sucess:true})
    }).then(success =>{
    if(success === true ){
     db.deleteUrl(id)
    
    .then(deletedTask =>{
        console.log(deletedTask)
     res.status(204).json(deletedTask)
    }).catch(error => console.log(error))
}else(err =>{console.log(err.message)})
})
})





/** Add Doc url to the database
 *   This is automatically handled in the FE
 */
router.post('/url',(req,res)=>{
    const  url = req.body
    db.addURL(url)
    .then(data =>{
        res.status(200).json(data)
    })
    .catch(err => res.status(500).json({err:err,stack:err.stack}))
})
router.get('/url',(req,res)=>{
    let id = req.headers.user_id
    db.getURL(id)
    .then(data =>{
        res.status(200).json(data)
    })
    .catch(err => res.status(500).json({err:err.message}))
})

router.post('/get',  (req,res)=>{
    let uid = req.headers.user_id
    let fileName = req.body.fileName
 
    const params = {
        Bucket: S3_BUCKET,
        Key: `${uid}/${fileName}`
     }
     s3.getObject(params,(err,data)=>{
         if(err) console.log({err:err,stack:err.stack})
          else return res.status(200).json(data)
       
     })
    
    })

module.exports = router