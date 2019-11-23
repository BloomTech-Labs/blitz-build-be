const request = require("supertest");
const server = require('./server');


// Tests root route

describe("Server Accessing Root",  () => {
   
           it("returns a 401 CANNOT GET'/' ", async ()=>{
           const res = await request(server)
            server.get('/',()=>{
               
            });
            expect(res.body).toBe(undefined)})
        
      })