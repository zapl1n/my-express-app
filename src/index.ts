import express, {Express,Request,Response} from 'express'
import prisma from './db'

const app:Express = express()

app.get('/proov', async (req:Request, res:Response) => {
  try{const todos = await prisma.todo.findMany()
  res.json(todos)}
  catch(error){res.status(500)}
})

app.post('/todos', async  (req:Request, res:Response) => {
  const todo = await prisma.todo.create({
    data: {

      title: req.body.title
    }
  })
  res.json(todo)
})

app.listen(3000, () => {
  console.log('Server listening on port 3000.')
})
