import mysql from "mysql2/promise"

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "eltc",
  connectionLimit: 10,
})

export const getUser = async () => {
  const [results] = await (await db).query("SELECT * FROM users")
  return results
}

export const getBook = async () => {
  const [rows] = await (await db).query("SELECT * FROM books")
  return rows
}

export const getDevelopBooks = async () => {
  const [results] = await (
    await db
  ).query("SELECT * FROM books WHERE book_develop = '1'")
  return results
}

export const getManageBooks = async () => {
  const [results] = await (
    await db
  ).query("SELECT * FROM books WHERE book_manage = '1'")

  return results
}

export const getProductBook = async (id: number) => {
  try {
    const [results] = await (
      await db
    ).query("SELECT * FROM books WHERE id = ?", [id])

    return results
  } catch (error) {
    return { message: "cannot get product book", data: error }
  }
}

export const getTopWeekBooks = async () => {
  const [results] = await (
    await db
  ).query("SELECT * FROM books WHERE best_sell = '1'")

  return results
}

export const getTopTrendBook = async () => {
  const [results] = await (
    await db
  ).query("SELECT * FROM books WHERE best_trend = '1'")

  return results
}

export const EnrollBook = async (userId: number, bookId: number) => {
  try {
    const [results] = await (
      await db
    ).execute("INSERT INTO enroll (userId, bookId) VALUES (?, ?)", [
      userId,
      bookId,
    ])

    return results
  } catch (error) {
    return { message: "cannot enroll", data: error }
  }
}

export const register = async (
  fullname: string,
  phone: string,
  age: string,
  email: string,
  gender: string
) => {
  try {
    const [results] = await (
      await db
    ).execute(
      `INSERT INTO users (fullname, phone, age, email, gender, coin) VALUES ('${fullname}', '${phone}', '${age}', '${email}', '${gender}', '0')`
    )

    return results
  } catch (error) {
    throw new Error(`cannot registered ${(error as Error).message}`)
  }
}

export const login = async (email: string, phone: string) => {
  try {
    const [results] = await (
      await db
    ).query("SELECT * FROM users WHERE email = ? AND phone = ?", [email, phone])

    if ((results as any).length > 0) {
      return { message: "found account", data: results }
    } else {
      throw new Error("account not foundaaaa")
    }
  } catch (error) {
    console.log("cannot login: ", (error as Error).message)
    throw new Error("account not found")
  }
}

export const existEmail = async (email: string) => {
  const [result] = await (
    await db
  ).query("SELECT * FROM users WHERE email = ?", [email])

  return result
}

export const rewardDaily = async (userId: number, money: string) => {
  const [result] = await (
    await db
  ).execute("UPDATE users SET coin = ? WHERE id = ?", [money, userId])

  return result
}

export const enrollBook = async (userId: number, bookId: number) => {
  const [results] = await (
    await db
  ).execute("INSERT INTO enroll (userId, bookId) VALUES (?, ?)", [
    userId,
    bookId,
  ])

  return results
}

export const findEnroll = async (userId: number, bookId: number) => {
  const [results] = await (
    await db
  ).execute("SELECT * FROM enroll WHERE userId = ? AND bookId = ?", [
    userId,
    bookId,
  ])

  return results
}

export const findAllEnroll = async (userId: number) => {
  const [results] = await (
    await db
  ).execute("SELECT * FROM enroll WHERE userId = ?", [userId])

  return results
}
