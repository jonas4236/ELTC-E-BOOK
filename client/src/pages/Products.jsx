import React, { useEffect, useState } from "react"
import { Link } from "react-router"
import axios from "axios"

const Products = () => {
  const [dataDevelopBooks, setDataDevelopBooks] = useState([])
  const [dataManageBooks, setDataManageBooks] = useState([])
  const [dataEnroll, setDataEnroll] = useState([])

  const fetchDataDevelop = async () => {
    const { data } = await axios.get("http://localhost:3000/book/develop")
    setDataDevelopBooks(data)
  }

  const fetchDataManage = async () => {
    const { data } = await axios.get("http://localhost:3000/book/manage")
    setDataManageBooks(data)
  }

  const fetchEnroll = async () => {
    const { data } = await axios.get("http://localhost:3000/book/enrollall")
    setDataEnroll(data)
  }

  useEffect(() => {
    fetchDataDevelop()
    fetchDataManage()
    fetchEnroll()
  }, [])

  return (
    <div>
      <div className="mx-auto max-w-screen-xl">
        <div className="my-16 h-[3px] bg-black rounded-full" />
        <div>
          <h1 className="text-2xl mb-4 font-semibold text-gray-800">
            หนังสือการพัฒนาตนเอง
          </h1>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dataDevelopBooks.map((val, idx) => (
              <div key={idx}>
                <div className="bg-gray-100 rounded-md relative border-2">
                  <Link to={`/product/${val.id}`}>
                    <div className="flex items-center justify-center py-2">
                      <div className="w-full bg-white flex justify-center">
                        <img
                          className="bg-contain h-[200px] my-2"
                          src={val.book_front}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col px-6 py-2">
                      <h1 className="text-xl mb-2 font-semibold text-black h-[84px]">
                        {val.book_name}
                      </h1>
                      <div className="flex">
                        {localStorage.getItem("id") &&
                        dataEnroll?.find((enro) => enro.bookId == val.id) ? (
                          <p className="text-xl text-white font-semibold bg-gray-600 w-max py-1 px-2 rounded-md">
                            🪙 {val.book_price}
                          </p>
                        ) : (
                          <p className="text-xl text-white font-semibold bg-red-600 w-max py-1 px-2 rounded-md">
                            🪙 {val.book_price}
                          </p>
                        )}
                      </div>
                      {val.best_sell === "1" && (
                        <div className="absolute top-2 right-2 px-2 py-2 flex justify-center items-center rounded-xl bg-red-600">
                          <h1 className="text-white font-semibold">
                            Best Seller!
                          </h1>
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-16 h-[3px] bg-black rounded-full" />
        <div>
          <h1 className="text-2xl mb-4 font-semibold text-gray-800">
            หนังสือการบริหารทั่วไป
          </h1>
        </div>
        <div className="my-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dataManageBooks.map((val, idx) => (
              <div key={idx}>
                <div className="bg-gray-100 rounded-md relative border-2">
                  <Link to={`/product/${val.id}`}>
                    <div className="flex items-center justify-center py-2">
                      <div className="w-full bg-white flex justify-center">
                        <img
                          className="bg-contain h-[200px] my-2"
                          src={val.book_front}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col px-6 py-2">
                      <h1 className="text-xl mb-2 font-semibold text-black h-[84px]">
                        {val.book_name}
                      </h1>
                      <div className="flex">
                        {localStorage.getItem("id") &&
                        dataEnroll?.find((enro) => enro.bookId == val.id) ? (
                          <p className="text-xl text-white font-semibold bg-gray-600 w-max py-1 px-2 rounded-md">
                            🪙 {val.book_price}
                          </p>
                        ) : (
                          <p className="text-xl text-white font-semibold bg-red-600 w-max py-1 px-2 rounded-md">
                            🪙 {val.book_price}
                          </p>
                        )}
                      </div>
                      {val.best_sell === "1" && (
                        <div className="absolute top-2 right-2 px-2 py-2 flex justify-center items-center rounded-xl bg-red-600">
                          <h1 className="text-white font-semibold">
                            Best Seller!
                          </h1>
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
