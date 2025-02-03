import React from "react"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { Link } from "react-router"

const NavResponsive = () => {
  return (
    <div>
      <div className="min-sm:hidden text-right">
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            Options
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <MenuItem>
              <Link to={"/products"} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                รายการหนังสือ
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/creator"} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                ผู้จัดทำ
              </Link>
            </MenuItem>
            <div className="my-1 h-px bg-white/5" />
            <MenuItem>
              <Link to={"/register"} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                ลงทะเบียน
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/login"} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                ล็อกอิน
              </Link>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  )
}

export default NavResponsive
