const request = require("supertest");
const server = require('./server');


// Tests root route

describe("Server Accessing Root",  () => {
   
           it("returns a 200 Working .... ", async ()=>{
           const res = await request(server)
            .get('/')
          
            expect(res.status).toBe(200)
            expect({message:'Working.....'})
           })
          
      })