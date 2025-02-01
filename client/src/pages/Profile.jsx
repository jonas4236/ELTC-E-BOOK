import React from "react"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { FaAddressCard, FaPhoneAlt } from "react-icons/fa"
import { IoPersonCircle, IoLogOut } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import { BsGenderMale } from "react-icons/bs"

const Profile = () => {
  const Logout = () => {
    localStorage.removeItem("id")
      localStorage.removeItem("fullname")
      localStorage.removeItem("phone")
      localStorage.removeItem("age")
      localStorage.removeItem("email")
      localStorage.removeItem("gender")
      localStorage.removeItem("coin")
    window.location.href = "/"
  }

  return (
    <div>
      <Menu>
        <MenuButton className="inline-flex rounded-full items-center gap-2 bg-gray-800 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          <img
            className="size-10 rounded-full"
            src="https://res.cloudinary.com/jonasdev/image/upload/v1737778826/gogrwpdlviiwxgro01rb.png"
            alt=""
          />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <FaAddressCard className="size-4" />
              {localStorage.getItem("fullname")}
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <FaPhoneAlt className="size-4" />
              {localStorage.getItem("phone")}
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <IoPersonCircle className="size-4" />
              {`${localStorage.getItem("age")} year old`}
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <MdEmail className="size-4" />
              {localStorage.getItem("email")}
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <BsGenderMale className="size-4" />
              {localStorage.getItem("gender")}
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button
              onClick={() => Logout()}
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
            >
              <IoLogOut className="size-4" />
              Logout
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}

export default Profile
