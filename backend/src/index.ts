import { Elysia } from "elysia"
import {
  enrollBook,
  EnrollBook,
  existEmail,
  findAllEnroll,
  findEnroll,
  getBook,
  getDevelopBooks,
  getManageBooks,
  getProductBook,
  getTopTrendBook,
  getTopWeekBooks,
  getUser,
  login,
  register,
  rewardDaily,
} from "./model/model"
import { cors } from "@elysiajs/cors"

const app = new Elysia()

// Define the routes
app.get("/", () => "Hello Elysia")

app.get("/users", async () => {
  const users = await getUser()
  return users
})

app.get("/books", async () => {
  const books = await getBook()
  return books
})

app.get("/book/develop", async () => {
  const devBooks = await getDevelopBooks()
  return devBooks
})

app.get("/book/manage", async () => {
  const devBooks = await getManageBooks()
  return devBooks
})

app.get("/book/:id", async ({ params }) => {
  const devBooks = await getProductBook(parseInt(params.id))
  return devBooks
})

app.get("/book/topweek", async () => {
  const books = await getTopWeekBooks()
  return books
})

app.get("/book/toptrend", async () => {
  const books = await getTopTrendBook()
  return books
})

app.post("/enroll", async ({ body }) => {
  try {
    const { userId, bookId }: any = body
    const insertId = await EnrollBook(userId, bookId)
    return { message: "enrolled successfully", insertId }
  } catch (error) {
    console.log("object", (error as Error).message)
    return { error: (error as Error).message }
  }
})

app.post("/book/register", async ({ body, set }) => {
  try {
    const { fullname, phone, age, email, gender }: any = body
    const existedEmail = await existEmail(email)

    if ((existedEmail as any).length > 0) {
      set.status = 404
      throw new Error("this email is aleady exists!")
    } else {
      const insertId = await register(fullname, phone, age, email, gender)
      return { message: "registered successfully", insertId }
    }
  } catch (error) {
    set.status = 404
    console.log("error cannot register: ", (error as Error).message)
    return { error: (error as Error).message }
  }
})

app.post("/book/findemail", async ({ body }) => {
  const { email } = body as { email: string }
  const results = await existEmail(email)

  return results
})

app.post("/book/login", async ({ body, set }) => {
  try {
    const { email, phone }: any = body
    const results = await login(email, phone)
    return results
  } catch (error) {
    set.status = 404
    return { error: "account not founded" }
  }
})

app.post("/book/reward", async ({ body }) => {
  const { userId, coin } = body as any
  const data = await rewardDaily(userId, coin)

  return { message: "update coin successs", data }
})

app.post("/book/enroll", async ({ body }) => {
  const { userId, bookId } = body as any
  const data = await enrollBook(userId, bookId)

  return { message: "insert enroll user success", data }
})

app.post("/book/purchase", async ({ body }) => {
  const { userId, bookId } = body as any
  const data = await findEnroll(userId, bookId)

  return data
})

app.post("/book/enrollall", async ({ body }) => {
  const { userId }: any = body
  const data = await findAllEnroll(userId)

  return data
})

app.use(cors())
// Start the server
app.listen(3000)

console.log(`🦊 Elysia is running at http://localhost:3000`)
