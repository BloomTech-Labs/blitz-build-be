const Firebase = require('../Firebase')
const dbRef =  Firebase.database().ref()
const usersRef =  dbRef.child('users')

module.exports ={
    find,
}

function find(){
    return usersRef.on('value',snap =>{
   
        console.log(snap.val())
     
    })
}



//     if(usersRef){
//       usersRef.on('value',snap =>{
    
//        console.log(snap.val())
      
//     })}else{
//       res.status(500).json({message:"Server Broke"})
//     }
    
    
//     })
//     server.get('/user'),(req,res)=>{
//       console.log(req)
//       res.status(200).json(console.log(req))
//     console.log(req,res)
//     const id = req.params.id
//     }
    // const userRef = dbRef.child(`users/$id`)
    // userRef.on('value',snap =>{
    //   console.log(snap.val())
    
    // dbRef.once("value").then(snap =>{
    //     console.log(snap.val());
    
    // }).catch(error =>{
    //     console.log("error".error)
    // })
    
    // dbRef.on('child_added',snap =>{
    //     console.log(snap)
    // });
    // dbRef.on("child_changed" , snap =>{
    //     console.log(snap.val())  //will return updated user object 
    // })
    // dbRef.orderByChild("age").on("child_added", snap =>{
    //     console.log(snap.val());
    // })
    
    // dbRef.on("child_added",snap =>{
    //     console.log(snap.val())
    
    // })
    
    
    // dbRef.orderByValue().on("child_added",snap =>{
    //     console.log(snap.val())
        
    
    // dbRef.limitToFirst(1).on("child_added", (snap) =>{
    
    
    //   console.log(snap.val())
    // })})
    
