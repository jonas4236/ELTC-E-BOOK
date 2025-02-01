import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router"
import Swal from "sweetalert2"

const Login = () => {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmitLogin = async (e) => {
    e.preventDefault()

    try {
      const { data } = await axios.post("http://localhost:3000/book/login", {
        phone: phone,
        email: email,
      })
      // console.log(data?.data[0])
      // console.log(data.data[0]?.fullname)
      localStorage.setItem("id", data.data[0]?.id)
      localStorage.setItem("fullname", data.data[0]?.fullname)
      localStorage.setItem("phone", data.data[0]?.phone)
      localStorage.setItem("age", data.data[0]?.age)
      localStorage.setItem("email", data.data[0]?.email)
      localStorage.setItem("gender", data.data[0]?.gender)
      localStorage.setItem("coin", data.data[0]?.coin)
      Swal.fire(
        "Successfully",
        "you have success login account!",
        "success"
      ).then(() => {
        window.location.href = "/"
      })
    } catch (error) {
      console.log("error cannot submit:", error)
      Swal.fire("Error", "This account didn't exists!", "info")
    }
  }
  return (
    <div>
      <div className="h-full">
        <div className="h-[300px] w-full bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/jonasdev/image/upload/v1737860827/eqkqdrsfz7qszcggolzl.jpg')] bg-black/60 bg-blend-darken">
          <h1 className="text-3xl h-full text-white font-bold text-center flex items-center justify-center">
            Login
          </h1>
        </div>

        <div className="max-w-md mx-auto py-16 flex flex-col">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              อีเมล
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              รหัสผ่าน
            </label>
          </div>
          <div className="mb-5">
            <p className="text-gray-500">
              Don't have an account ?{" "}
              <Link
                to={"/register"}
                className="text-blue-700 font-semibold cursor-pointer"
              >
                Register
              </Link>
            </p>
          </div>
          <button
            onClick={(e) => handleSubmitLogin(e)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
