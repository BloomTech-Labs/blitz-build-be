require('dotenv').config('./env')
const aws = require('aws-sdk')
const router = require('express').Router();
aws.config.update({
    region: 'us-west-2', // Put your aws region here
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.AWS_SECRET
  })
  const S3_BUCKET = process.env.BUCKET_NAME
const s3 = new aws.S3();  // Create a new instance of S3

router.post("/",(req,res)=>{
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

module.exports = router