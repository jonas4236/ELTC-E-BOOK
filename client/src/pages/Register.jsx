import React, { useState } from "react"
import { Link } from "react-router"
import axios from "axios"
import Swal from "sweetalert2"

const Register = () => {
  const [fullname, setFullname] = useState("")
  const [phone, setPhone] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")

  const handleSubmitRegiser = async (e) => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:3000/book/register", {
        fullname: fullname,
        phone: phone,
        age: age,
        email: email,
        gender: gender,
      })
      Swal.fire(
        "Successfully",
        "you have success registering account!",
        "success"
      ).then(() => {
        window.location.href = "/login"
      })
    } catch (error) {
      console.log("error cannot submit:", error)
      Swal.fire("Error", "This email aleady exists!", "info")
    }
  }

  return (
    <div>
      <div className="h-full">
        <div className="h-[300px] w-full bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/jonasdev/image/upload/v1737860827/eqkqdrsfz7qszcggolzl.jpg')] bg-black/60 bg-blend-darken">
          <h1 className="text-3xl h-full text-white font-bold text-center flex items-center justify-center">
            Register Account
          </h1>
        </div>

        <div className="max-w-md mx-auto py-16 flex flex-col">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="fullname"
              id="fullname"
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="fullname"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              ชื่อ - นามสกุล
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="phonenumber"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              เบอร์โทร
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="age"
              id="age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="age"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              อายุ
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
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
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              อีเมล
            </label>
          </div>

          <div className="mb-5">
            <select
              id="countries"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
            >
              <option disabled value={""}>
                เพศ
              </option>
              <option value={"ชาย"}>ชาย</option>
              <option value={"หญิง"}>หญิง</option>
            </select>
          </div>

          <div className="mb-5">
            <p className="text-gray-500">
              Aleady have an account ?{" "}
              <Link
                to={"/login"}
                className="text-blue-700 font-semibold cursor-pointer"
              >
                Login
              </Link>
            </p>
          </div>

          <button
            onClick={(e) => {
              handleSubmitRegiser(e)
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
