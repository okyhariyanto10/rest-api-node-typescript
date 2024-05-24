import express, { Application, Response } from 'express'

const app: Application = express()
const port: number = 4000

app.use('/health', (res: Response) => {
  return res.status(200).send({ status: 200 })
})

app.listen(port, () => console.log(`Server is Listening on port ${port}`))
