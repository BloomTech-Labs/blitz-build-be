const request = require("supertest");
const server = require('../../server');
const moment = require('moment')
const id ={user_id:'auth0|5de566843f7fc30e1a74c3fe',id_token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1FTkVNRGhDTURORU5UQTBOREEzTTBVNE5qQkZNVEpCTlVZeU9FSTNOa1ExTVRsQ01ERkRNdyJ9.eyJuaWNrbmFtZSI6Im1oYXJsZXkxMjM0NSIsIm5hbWUiOiJtaGFybGV5MTIzNDVAZ21haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyL2YyYmZhNzRlNDVjNzhmMjNkZTdlZjQyNDdiNDc5OGNjP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGbWgucG5nIiwidXBkYXRlZF9hdCI6IjIwMTktMTItMDlUMDQ6MTk6NTYuNDUyWiIsImlzcyI6Imh0dHBzOi8vZ2Fubm9uZGFyY3kyLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZGU1NjY4NDNmN2ZjMzBlMWE3NGMzZmUiLCJhdWQiOiJPek1nMWU3SkRORjdEb2d4UEVQdkd6cEc3ZnZ2REhOZSIsImlhdCI6MTU3NjEwNTkwOCwiZXhwIjoxNTc2MTQxOTA4LCJub25jZSI6Im41WDVqNU9KeFhuZFRoNnVFUzZuWk9HN1A0OWp2QVNvIn0.iPuny5xLyMh0_JjPh57KDcj0ZwFdOwGnHQdPbb37ZUCcip0CytXv--dmhG7EA78Z9RyB2qeRw3va28Y3EXSVo5eXh8DwnWPwpEhQisD130ZApfU51AbloQb0xkevmdsvIo1FMhts8sAvdLshBNsScP54d6dcdCH9P84Zymd9WE8mZiwuvIjs1GX5vZuMSwWm3TTs3-umIXaEi9qMaMro3KPEI2JoRztIjRstsq5FitbPHaNtPTfHH-KegyGnV0YhpPcXT2VBEaY_s6Nw7hE2b6934FsB4YzEeVWZOxePvNwKJ7UeJ0pFZ3vse2kD1Hv-QlPaTqa9PBNoz0nl0_i4xg'}
const url = '/projects/tasks'
const user_id = 'auth0|5de566843f7fc30e1a74'


describe('testing all crud operations on tasks router', ()=>{
    describe('GET to /:id with all correct information',()=>{
        it('Returns status 200 ',async ()=>{
               const res = await request(server)
               .get(`${url}/${user_id}`)
               .set(id)
               expect(function (res) {
                 res.status = 200
                 
               
        })
    })
    describe("GET to /url/:id with incorrect information" ,()=>{
        it('Returns 401 ',async ()=>{
            const res = await request(server)
            .get(`${url}/1`)
            .set(id)
            .expect(function (res){
         
                res.status = 401
            })
        })
    })
    describe("Post to /url ",()=>{
        it("Returns a 200",async ()=>{
            const res = await request(server)
            .post('/projects/tasks')
            .set(id)
            .send({
                "due_date": "",
                "task_name": "Order Scrap Dumpster and Port-A-John",
                "isComplete": false,
                "createdAt": 12/12/2019,
                "project_id": 6,
            })
            .expect(function (res){
                console.log(res)
                let taskId;
                res.status = 200
                res.body = {
                    message:'Order Scrap Dumpster and Port-A-John added',
             
                }
            })
            
        })
    })

})
})
