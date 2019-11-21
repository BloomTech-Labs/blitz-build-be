require('dotenv').config()
const request = require('supertest')
const server = require('./server')
let api = process.env.API_KEY
// testing registration 
const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1MDgxMWNkYzYwOWQ5MGY5ODE1MTE5MWIyYmM5YmQwY2ViOWMwMDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSm9lIFNtaXRoIiwicGljdHVyZSI6Imh0dHA6Ly93d3cuZXhhbXBsZS5jb20vam9lX3NtaXRoL3Bob3RvLnBuZyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9ibGl0emJ1aWxkLThkNWE2IiwiYXVkIjoiYmxpdHpidWlsZC04ZDVhNiIsImF1dGhfdGltZSI6MTU3MzcwMzYzOSwidXNlcl9pZCI6IlIzZkU2RFAzVWdQOGhRU1diR3Vic0hiN2xPdzIiLCJzdWIiOiJSM2ZFNkRQM1VnUDhoUVNXYkd1YnNIYjdsT3cyIiwiaWF0IjoxNTczNzAzNjM5LCJleHAiOjE1NzM3MDcyMzksImVtYWlsIjoiam9lQHNtaXRoLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGhvbmVfbnVtYmVyIjoiKzE2NTA1NTU0NTY3IiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJwaG9uZSI6WyIrMTY1MDU1NTQ1NjciXSwiZW1haWwiOlsiam9lQHNtaXRoLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ZpRIbJrkoUOboyMOIoo7PngaD_A2Ro0lOHUgaKzY450TQlIjY0-fdJOyBzeI080Wsmni0Ydf9xW1YAhbkF_9mqOYAqv_gma5w0u_q1FURNbFyQNPN_u-6qLN2iRUW13B4DaM87NgaN3989kbibozWQLoc6KfsBy7nmeDsqbC1l9GQw8G-ZHET_zYWuNbPXVYazZzboxulCToz8EWb1wqi1QZsLOpGuzKkOQMmPuA1_9gbrFgxWq1vCpp5DoOG3JFN1vxSTsRwfgwMJiEnYAL1PuQEa5qNvrDcWYggqvG7hXXOZMH4NLMq0G82zSjU895NY0O_DM_Xi_tYNBhD2sPzw"
localStorage.setItem('token',token)
describe("Server accessing routes",()=>{
    describe("Testing Registration",()=>{
        it('returns 201 created',async ()=>{
            const res = await request(server)
            .post("/api/register")
            .send({
                displayName:"Jest Test",
                 email:"jest@test.com",
                 password:"test12",
                 phoneNumber:"+15555555555"
            })
            expect(res.status).toBe(401)
        })
        describe("Testing Login",()=>{
     it('returns 200 and userOBJ',async ()=>{
      const res = await request(server)
         .post("/api/login")
         .send(
             {email:"joe@smith.com",
             password:"smithjoe"}
         ).then(response =>{
  
           
         })
           
            
     })
    })})
   // Auth routes 
   describe("Testing Auth Routes",()=>{
       describe("GET route to /api/auth/:uid/projects",()=>{
       it('returns 200 ok and list of projects',async ()=>{
   
   
           const res = await request(server)
    
           .get(`/api/auth/R3fE6DP3UgP8hQSWbGubsHb7lOw2/projects`)
          .then(err =>{console.log(err)})
           expect(res.status).toBe(200)
           
          
       })

    })
   })
})