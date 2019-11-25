const request = require("supertest");
const server = require('./server');
const moment = require('moment')
// testing projects endpoint 

describe("Requests made to /projects endpoints",()=>{
    describe("Get Request Made to /projects w/o user id in header",()=>{
        it("Throws an error status 500",async ()=>{
            const res = await request(server)
            .get('/projects')
            
            expect(res.status).toBe(500)
        })
    })
    describe("Get Request Made To /projects with user id in headers",()=>{
        it("Returns status 200 w/ Array of Projects for that user",async ()=>{
        
            const res = await request(server)
            
            .get('/projects')
            .set({id:3})
            .expect(function(res){
                res.status = 200
                res.body =
                [
                    {
                        "id": 1,
                        "project_name": "Auburn",
                        "baths": 3,
                        "beds": 4,
                        "city": "Auburn",
                        "imageURL": "",
                        "square_ft": 3200,
                        "state": "WA",
                        "status": "on time",
                        "street_address": "212 Auburn Wa",
                        "zip_code": 98001,
                        "latitude": null,
                        "longitude": null,
                        "due_date": "2020-02-21T08:00:00.000Z",
                        "user_id": 3
                    },
                    {
                        "id": 4,
                        "project_name":"Server_Spec_Test 1",
                        "baths": 2.5,
                        "beds": 4,
                        "square_ft":4200,
                        "street_address": "1234 Lambda Way",
                        "image_url":null,
                        "city":"Lambda Labs",
                        "state":"CA",
                        "status":"on time",
                        "zip_code": 94102,
                        "due_date":"01-01-2020",
                        "latitude": null,
                        "longitude": null,
                        "user_id":3,

                    }
             
                ]
           
           
            })
            
            
           
        })
    })

/* ******************* THIS TEST WILL RUN AND PASS TO RUN 
                      UNCOMMENT AND CHANGE THE PROJECT_NAME 
                      THERE IS A UNIQUE NAME CONSTRAINT ON THE DB
************************************************************************** */
    describe("Post request to /projects ",()=>{
        // it("Returns status 201 w/  message project added @ + current time  ",async ()=>{
        //     const res = await request(server)
        //     .post('/projects')
        //     .set({id:3})
        //     .send({
        //         "project_name":"Server_Spec_Test 1",
        //         "baths": 2.5,
        //         "beds": 4,
        //         "square_ft":4200,
        //         "street_address": "1234 Lambda Way",
        //         "city":"Lambda Labs",
        //         "state":"CA",
        //         "zip_code": 94102,
        //         "due_date":"01-01-2020"
        //     })
        //     .expect(function(res){
        //         res.status = 201
        //         res.body={message:`Project added @ ${moment().format("LLL")}`}
        //     })
        // })
        it("Returns status 409, message:a project with that name already exists",async ()=>{
            const res = await request(server)
            .post('/projects')
            .set({id:3})
            .send({
                "project_name":"Server_Spec_Test 1",
                "baths": 2.5,
                "beds": 4,
                "square_ft":4200,
                "street_address": "1234 Lambda Way",
                "city":"Lambda Labs",
                "state":"CA",
                "zip_code": 94102,
                "due_date":"01-01-2020"
            })
            .expect(function(res){
                res.status = 409
                res.body={message:'a project with that name already exists'}
            })
        })
    })
})

    describe("Get request with incorrect  user id in headers to /projects/:id",()=>{
        it("Returns a 401 , message: project # 1 doesn't belong to user # 4", async ()=>{
            const res = await request(server)
            .get('/projects/1')
            .set({id:4})
            .expect(function(res){
                res.status = 401
                res.body ={message:"Project # 1 doesn't belong to user # 4"}
            })
        })
    })
    describe("Get request with correct user id in headers to /projects/:id",()=>{
        it("Returns a project and status 200", async ()=>{
            const res = await request(server)
            .get('/projects/1')
            .set({id:3})
            .expect(function(res){
                res.status = 200
                res.body = [
                    {
                        "id": 1,
                        "project_name": "Auburn",
                        "baths": 3,
                        "beds": 4,
                        "city": "Auburn",
                        "imageURL": "",
                        "square_ft": 3200,
                        "state": "WA",
                        "status": "on time",
                        "street_address": "212 Auburn Wa",
                        "zip_code": 98001,
                        "latitude": null,
                        "longitude": null,
                        "due_date": "2020-02-22T08:00:00.000Z",
                        "user_id": 3
                    }
                ]
            })
        })
    })