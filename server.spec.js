const request = require("supertest");
const server = require('./server');


// Tests root route

describe("Server Accessing Root",  () => {
   
           it("returns a 401 CANNOT GET'/' ", async ()=>{
            request(server)
            server.get('/',(req,res)=>{
               return req,res
            })
            expect(status).toBe(401).body().toInclude('cannotGet')})
        
      })