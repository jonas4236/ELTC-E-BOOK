import React, { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { Link, useParams } from "react-router"
import axios from "axios"
import Swal from "sweetalert2"

const Product = () => {
  const { book } = useParams()
  const [Product, setProduct] = useState([])
  const [dataEnroll, setDataEnroll] = useState([])
  const userId = localStorage.getItem("id")

  const fetchProduct = async () => {
    const { data } = await axios.get(`http://localhost:3000/book/${book}`)
    setProduct(data)
  }

  const fetchEnroll = async () => {
    const { data } = await axios.post("http://localhost:3000/book/purchase", {
      userId: localStorage.getItem("id"),
      bookId: book,
    })
    setDataEnroll(data)
  }

  useEffect(() => {
    fetchProduct()
    fetchEnroll()
  }, [])

  const handleEnrolledBook = async (e) => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:3000/book/enroll", {
        userId: localStorage.getItem("id"),
        bookId: Product[0]?.id,
      })

      const updateCoin =
        parseInt(localStorage.getItem("coin")) -
        parseInt(Product[0]?.book_price)

      localStorage.setItem("coin", updateCoin)

      await axios
        .post("http://localhost:3000/book/reward", {
          userId,
          coin: updateCoin,
        })
        .then(() => {
          Swal.fire("Successfully", "you have enrolled this book", "success")
        })
      fetchProduct()
      fetchEnroll()
    } catch (error) {
      console.log("error cannot handleenrollbook:", error.message)
    }
  }

  console.log(dataEnroll)

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-4 px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 my-16">
          {/* Carousel Section */}
          <div className="lg:flex-3">
            <Carousel>
              <div>
                <img src={Product[0]?.book_front} alt="Book Image 1" />
              </div>
              <div>
                <img src={Product[0]?.book_back} alt="Book Image 2" />
              </div>
            </Carousel>
          </div>

          {/* Product Details Section */}
          <div className="lg:flex-4">
            <p className="text-xl md:text-2xl font-semibold">
              รายการหนังสือ{" "}
              <span className="text-red-600 font-semibold">
                / {Product[0]?.book_name}
              </span>
            </p>
            <h1 className="my-4 font-semibold text-2xl md:text-3xl">
              {Product[0]?.book_name}
            </h1>
            <p className="text-sm md:text-base">{Product[0]?.book_detail}</p>
            <br />
            <p className="text-sm md:text-base">{Product[0]?.book_index}</p>
            <div className="mt-4">
              <span className="text-xl md:text-2xl font-semibold text-red-600">
                ราคา: {Product[0]?.book_price} 🪙
              </span>
            </div>
            <div className="my-4">
              {dataEnroll.length > 0 ? (
                <Link
                  to={Product[0]?.pdf_ebook}
                  className="cursor-pointer px-4 py-2 rounded-md bg-green-600 text-white font-semibold border-2 border-transparent hover:text-green-600 hover:bg-transparent hover:border-green-600 transition-all duration-150"
                >
                  โหลด E-Book
                </Link>
              ) : localStorage.getItem("id") && localStorage.getItem('coin') > Product[0]?.book_price ? (
                <button
                  onClick={(e) => handleEnrolledBook(e)}
                  className="cursor-pointer px-4 py-2 rounded-md bg-red-600 text-white font-semibold border-2 border-transparent hover:text-red-600 hover:bg-transparent hover:border-red-600 transition-all duration-150"
                >
                  ซื้อหนังสือ
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
