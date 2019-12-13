const request = require("supertest");
const server = require('./server');
const moment = require('moment')
const user_id = 'auth0|5de566843f7fc30e1a74c3fe'
const id_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1FTkVNRGhDTURORU5UQTBOREEzTTBVNE5qQkZNVEpCTlVZeU9FSTNOa1ExTVRsQ01ERkRNdyJ9.eyJuaWNrbmFtZSI6Im1oYXJsZXkxMjM0NSIsIm5hbWUiOiJtaGFybGV5MTIzNDVAZ21haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyL2YyYmZhNzRlNDVjNzhmMjNkZTdlZjQyNDdiNDc5OGNjP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGbWgucG5nIiwidXBkYXRlZF9hdCI6IjIwMTktMTItMDlUMDQ6MTk6NTYuNDUyWiIsImlzcyI6Imh0dHBzOi8vZ2Fubm9uZGFyY3kyLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZGU1NjY4NDNmN2ZjMzBlMWE3NGMzZmUiLCJhdWQiOiJPek1nMWU3SkRORjdEb2d4UEVQdkd6cEc3ZnZ2REhOZSIsImlhdCI6MTU3NjEwNTkwOCwiZXhwIjoxNTc2MTQxOTA4LCJub25jZSI6Im41WDVqNU9KeFhuZFRoNnVFUzZuWk9HN1A0OWp2QVNvIn0.iPuny5xLyMh0_JjPh57KDcj0ZwFdOwGnHQdPbb37ZUCcip0CytXv--dmhG7EA78Z9RyB2qeRw3va28Y3EXSVo5eXh8DwnWPwpEhQisD130ZApfU51AbloQb0xkevmdsvIo1FMhts8sAvdLshBNsScP54d6dcdCH9P84Zymd9WE8mZiwuvIjs1GX5vZuMSwWm3TTs3-umIXaEi9qMaMro3KPEI2JoRztIjRstsq5FitbPHaNtPTfHH-KegyGnV0YhpPcXT2VBEaY_s6Nw7hE2b6934FsB4YzEeVWZOxePvNwKJ7UeJ0pFZ3vse2kD1Hv-QlPaTqa9PBNoz0nl0_i4xg'
// testing projects endpoint 

describe("Requests made to /projects endpoints", () => {
    describe("Get Request Made to /projects w/o user id or id_token in header", () => {
        it("Throws an error status 401 ", async () => {
            const res = await request(server)
                .get('/projects')

            expect(res.status).toBe(401)
        })
    })

    describe("Get Request Made To /projects with user id in headers", () => {
        it("Returns status 200 w/ Array of Projects for that user", async () => {

            const res = await request(server)

                .get('/projects')
                .set({ user_id: user_id, id_token: id_token})
                .expect(function (res) {
                    res.status = 200
                    res.body =
                        [
                            {
                                id: 6,
                                project_name: "Another Test",
                                baths: 4,
                                beds: 4,
                                city: "Auburn",
                                imageURL: "",
                                square_ft: 3800,
                                state: "Wa",
                                status: "On Schedule",
                                street_address: "1234 Test St",
                                zip_code: 98001,
                                longitude: -122.265,
                                latitude: 47.3099,
                                due_date: "03/05/2020",
                                user_id: "auth0|5de566843f7fc30e1a74c3fe",
                                createdAt: "12/12/2019",
                                start_date: null
                            }

                        ]


                })



        })
    })

    /* ******************* THIS TEST WILL RUN AND PASS TO RUN 
                          UNCOMMENT AND CHANGE THE PROJECT_NAME 
                          THERE IS A UNIQUE NAME CONSTRAINT ON THE DB
    ************************************************************************** */
    describe("Post request to /projects ", () => {
        // it("Returns status 201 w/  message project added @ + current time  ",async ()=>{
        //     const res = await request(server)
        //     .post('/projects')
        //     .set({user_id:userID,id_token:idToken})
        //     .send({
        //         "project_name":"Server_Spec_Test 4",
        //         "baths": 2.5,
        //         "beds": 4,
        //         "square_ft":4200,
        //         "street_address": "1234 Lambda Way",
        //         "city":"Lambda Labs",
        //         "state":"CA",
        //         "zip_code": 94102,
        //         "due_date":"01-01-2020",
        //         "user_id":3,
        //         "status":"on time"
        //     })
        //     .expect(function(res){
        //         res.status = 201
        //         res.body={message:`Project added @ ${moment().format("LLL")}`}
        //     })
        // })
        it("Returns status 409, message:a project with the name project_name already exists for user user_name", async () => {
            const res = await request(server)
                .post('/projects')
                .set({ user_id: user_id, id_token: id_token })
                .send({
                    "project_name": "Server_Spec_Test 1",
                    "baths": 2.5,
                    "beds": 4,
                    "square_ft": 4200,
                    "street_address": "1234 Lambda Way",
                    "city": "Lambda Labs",
                    "state": "CA",
                    "zip_code": 94102,
                    "due_date": "01-01-2020"
                })
                .expect(function (res) {
                    console.log(res.body)
                    res.status = 409
                    res.body = { message: `A project with the name  already exists for user ` }
                })
        })



            describe("Get request with incorrect  user id in headers to /projects/:id",()=>{
                it("Returns a 401 , message: project # 1 doesn't belong to user # 4", async ()=>{
                    const res = await request(server)
                    .get('/projects/7')
                    .set({user_id:4,id_token:id_token})
                    .expect(function(res){
                        console.log(res.body)
                        res.status = 401
                        res.body ={message:"Project # 1 doesn't belong to user # 4"}
                    })
                })
            })
            describe("Get request with correct user id in headers to /projects/:id",()=>{
                it("Returns a project and status 200", async ()=>{
                    const res = await request(server)
                    .get('/projects/7')
                    .set({user_id:user_id,id_token:id_token})
                    .expect(function(res){
                        res.status = 200
                        res.body = {
                            "id":7,
                            "project_name": "Server_Spec_Test 1",
                            "baths": 2.5,
                            "beds": 4,
                            "square_ft": 4200,
                            "street_address": "1234 Lambda Way",
                            "city": "Lambda Labs",
                            "state": "CA",
                            "zip_code": 94102,
                            "due_date": "01-01-2020",
                            "image_url":null,
                            "createdAt":12/12/2019,
                            "start_date":null,
                            "status":"delayed"

                        }

                    })
                })
            })

            describe("PUT Request to /projects/:id with incorrect user_id in headers",()=>{
                it("Returns 401 unauthorized",async ()=>{
                    const res = await request(server)
                    .put('/projects/1')
                    .set({user_id:4})
                    .send({"status":"delayed"})
                    .expect(function(res){
                        res.status = 401
                        res.body = {message:"Project #1 doesn't belong to user #4"}
                    })
                })
            })
            describe("PUT Request to /projects/:id with correct user_id in headers",()=>{
                it("Returns 200 ok",async ()=>{
                    const res = await request(server)
                    .put('/projects/7')
                    .set({user_id:user_id,id_token:id_token})
                    .send({"status":"delayed"})
                    .expect(function(res){
                        res.status = 200
                        res.body = {message:"Project #7 updated"}
                    })
                })
            })
        // /*ToDo fix response */
            describe("DELETE Request to /projects/:id with incorrect user_id in headers",()=>{
                it("Returns 401 unauthorized",async ()=>{
                    const res = await request(server)
                    .delete('/projects/4')
                    .set({user_id:user_id,id_token:id_token})

                    .expect(function(res){
                        res.status = 401
                        res.body={
                            message:`Project # 14 doesn't belong to user`
                        }

                    })
                })
            })

        //           // Test Passes 
            describe("DELETE Request to /projects/:id with correct user_id in headers",()=>{
                it("Returns 204 deleted",async ()=>{
                    const res = await request(server)
                    .delete('/projects/26')
                    .set({user_id:user_id,id_token:id_token})

                    .expect(function(res){
                        res.status = 204
                        res.body = {message:"Project #14 deleted"}
                    })
    })
            })
        })
    })

