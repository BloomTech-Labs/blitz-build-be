require('dotenv').config('./env')
const db = require('./docs-model')
const aws = require('aws-sdk')
const fs = require('fs')
const router = require('express').Router();
const moment = require('moment')

aws.config.update({
    region: 'us-west-2',
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

/** 
       Deletes The Record Of The Url From The DB
 *  */
router.delete('/url/:file_name', async (req,res)=>{
    
    const url = req.body.url
    const uid=req.headers.user_id
    const S3_BUCKET = process.env.BUCKET_NAME
    const file_name=req.params.file_name  
    let   success = false
    const s3Params = { Bucket: S3_BUCKET , Key: `${uid}/${file_name}`}
    // /** Calling deleteObject on the AWS Bucket Will Delete The Object That Is Passed In */
           await s3.deleteObject(s3Params, function(err,data){
                  console.log(s3Params)
                 if(err) console.log(err.message)
                else console.log(data)
            
             })
 
    // /** Calling deleteUrl to the DB  */
         
     db.deleteUrl(file_name)

    .then(resp =>{
        console.log(resp)
        res.status(204).json({response:resp})})
        .catch(error => console.log(error))
    
    res.status(409)
          }
    )


/** Add A Document's  url to the database
 *   This called in the FE after it receives success:true from the getSignedUrl()
 */
router.post('/url',(req,res)=>{
     
    const  url = {...req.body,createdAt:moment().format('l'),project_name:req.headers.project_name}
    db.addURL(url)
    .then(data =>{
        res.status(200).json(data)
    })
    .catch(err => res.status(500).json({err:err,stack:err.stack}))
})

/** Get All Document Url's For A User   */
router.get('/url',(req,res)=>{
    let id = req.headers.user_id
    
    db.getURL(id)
    .then(data =>{
        res.status(200).json(data)
    })
    .catch(err => res.status(500).json({err:err.message}))
})
router.get('/url/:file_name',(req,res)=>{
   
    let file_name= req.params.file_name
    db.getDocByFileName(file_name)
    .then(data =>{
        res.status(200).json(data)
    })
    .catch(err => res.status(500).json({err:err.message}))
})

/** Get A Specific Document Url For a User */
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

    router.get('/download/:file_name', (req,res) =>{
       const fileName = req.params.file_name
       const uid = req.headers.user_id
       s3.getObject(
         {  Bucket : S3_BUCKET,
            Key : `${uid}/${fileName}`
         },
         (error,data) =>{
             if(error != null){
                
                console.log("DOWNLOAD ERROR MESSAGE",error)
             }else {
              console.log(data)
                     const file = data;
                
                     console.log("HERE" + file);
                      
                    
                     res.status(200)
                     res.send(file)
                  
         
                     
                 
             }
         }
         
       )

  
    })
    
    




module.exports = router
