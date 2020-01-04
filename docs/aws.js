/**
 * Config file for aws bucket used to store user files
 */

var aws = require('aws-sdk');  
require('dotenv').config('./env'); /** Configure dotenv to load in the .env file */
/**Configure aws with your accessKeyId and your secretAccessKey */
module.exports= (req,res) =>{
aws.config.update({
  region: 'us-west-2',
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET
})

const S3_BUCKET = process.env.BUCKET_NAME
/**We Are Just Declaring and Validating Here
 *  We will call the function elseware */ 
exports.sign_s3 = (req,res) => {
  const s3 = new aws.S3();  // Create a new instance of S3
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  const uid = req.headers.user_id
  console.log(uid,req.headers)
// Set up the payload of what we are sending to the S3 api
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 500,
    ContentType: fileType,
    ACL: 'public-read'
  };
// Make a request to the S3 API to get a signed URL which we can use to upload our file
s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      res.json({success: false, error: err})
    }
    // Data payload of what we are sending back, the url of the signedRequest and a URL where we can access the content after its saved. 
const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${uid}/${fileName}`
    };
    // Send it all back
    res.json({success:true, data:{returnData}});
  });
}

}


