const request = require('supertest')
const server = require('./server')

// testing registration 

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
            expect(res.status).toBe(201)
        })

    })
})