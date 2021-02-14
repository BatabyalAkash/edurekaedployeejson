import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser'
//import userRoutes from './routes/user.js'

const app = express()
const PORT = 3000

// const id1 = 1005;

app.use(bodyParser.json())

app.use('/employee/:id', (req, res) => {
   fs.readFile('./employee.json', (err, data) => {
      if(err){
         throw err
      }
      else{
         const {id} = req.params
         let employees = JSON.parse(data)
         const foundEmployees = employees.find((employee) => employee.empid == id)
         res.send(foundEmployees)
         // res.send(employees)
         console.log(foundEmployees)
      }
   })

})

app.use('/project/:id', (req, res) => {
   fs.readFile('./project.json', (err, data) => {
      if(err){
         throw err
      }
      else{
         const {id} = req.params
         let project = JSON.parse(data)
         const foundProject = project.find((proj) => proj.prjid == id)
         res.send(foundProject)
         // res.send(project)
         // console.log(project)
      }
   })

})

app.use('/getemployeedetails/:id', (req, res) => {
   // app.use('/employee/:'+req.params, (req1, res1) => {
      fs.readFile('./employee.json', (err, data) => {
         if(err){
            throw err
         }
         else{
            const {id} = req.params
            let employees = JSON.parse(data)
            let foundEmployees = employees.find((employee) => employee.empid == id)
            //res.send(foundEmployees)
            // res.send(employees)
            // console.log(employees)
            // app.use('/project/:'+foundEmployees.prjid, (req, res) => {
               fs.readFile('./project.json', (err, data1) => {
                  if(err){
                     throw err
                  }
                  else{
                     const id1 = foundEmployees.prjid
                     let project = JSON.parse(data1)
                     let foundProject = project.find((proj) => proj.prjid == id1)
                     res.send(foundProject)
                     // res.send(project)
                     // console.log(project)
                  }
               })
            
            // })
         }
      })
   // })
})

app.use('/', (req, res) => res.send('Hello from Homepage!'))

app.listen(PORT, () => console.log(`Server is running on port: http://localhost"${PORT}`))