import React from "react"
import { Link } from "react-router"
import Profile from "../Profile"

const NavBar = () => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-cyan-600 to-lime-400">
        <div className="max-w-screen-xl mx-auto flex justify-between p-2 items-center">
          <div className="">
            <ul className="flex items-center">
              <Link to={"/"}>
                <li className="text-2xl">
                  <img
                    className="size-16 rounded-full"
                    src="https://res.cloudinary.com/jonasdev/image/upload/v1737778826/gogrwpdlviiwxgro01rb.png"
                    alt=""
                  />
                </li>
              </Link>
              <Link to={"/products"}>
                <li className="ml-4 text-2xl text-slate-950 font-bold hover:text-white transition-all duration-150 cursor-pointer">
                  รายการหนังสือ
                </li>
              </Link>
              {localStorage.getItem("id") ? (
                <Link to={"/reward"}>
                  <li className="ml-4 text-2xl text-slate-950 font-bold hover:text-white transition-all duration-150 cursor-pointer">
                    เช็คอิน
                  </li>
                </Link>
              ) : (
                ""
              )}
              <Link to={"/creator"}>
                <li className="ml-4 text-2xl text-slate-950 font-bold hover:text-white transition-all duration-150 cursor-pointer">
                  ผู้จัดทำ
                </li>
              </Link>
            </ul>
          </div>
          <div className="">
            <ul className="flex items-center">
              {localStorage.getItem("id") > 0 ? (
                <>
                  <li className="mr-4 text-white font-bold text-2xl">
                    🪙: {localStorage.getItem("coin")}
                  </li>
                  <Profile />
                </>
              ) : (
                <>
                  <Link to={"/register"}>
                    <li className="text-2xl text-white font-bold hover:text-white transition-all duration-150 cursor-pointer px-2 py-1 rounded-md bg-slate-950">
                      ลงทะเบียน
                    </li>
                  </Link>
                  <Link to={"/login"}>
                    <li className="ml-4 text-2xl text-white font-bold hover:text-white transition-all duration-150 cursor-pointer px-2 py-1 rounded-md bg-slate-950">
                      ล็อกอิน
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
