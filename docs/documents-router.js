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
router.delete('/url/:id',(req,res)=>{
    const id = req.params.id
    db.deleteUrl(id)
    
    .then(deletedTask =>{
        console.log(deletedTask)
     res.status(204).json(deletedTask)
    }).catch(error => console.log(error))
})
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