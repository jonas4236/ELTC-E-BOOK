import axios from "axios"
import React, { useEffect, useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Link } from "react-router"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const HomePage = () => {
  const [topWeekBooks, setTopWeedBooks] = useState([])
  const [topTrendBooks, setTopTrendBooks] = useState([])

  const fetchTopWeek = async () => {
    const { data } = await axios.get("http://localhost:3000/book/topweek")
    setTopWeedBooks(data)
  }

  const fetchTopTrend = async () => {
    const { data } = await axios.get("http://localhost:3000/book/toptrend")
    setTopTrendBooks(data)
  }

  useEffect(() => {
    fetchTopWeek()
    fetchTopTrend()
  }, [])
  return (
    <div className="">
      <section className="bg-white">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              ELTC - สวรรค์สำหรับคนรักการอ่าน
            </h2>
            <p className="mb-4">
              เราคือร้านหนังสือที่รวบรวมความรู้และความบันเทิงไว้ในที่เดียว
              ไม่ว่าคุณจะมองหาหนังสือใหม่ล่าสุดหรือเล่มที่สร้างแรงบันดาลใจ
              เราพร้อมที่จะตอบโจทย์ทุกความต้องการ
              ด้วยบรรยากาศที่อบอุ่นและการบริการที่เป็นกันเอง
              <br />
              <br />
              ครบทุกแนว ทุกวัย ทุกความสนใจ ตั้งแต่นิยายสุดโรแมนติก
              หนังสือพัฒนาตัวเอง ไปจนถึงหนังสือเด็ก
              เรามีครบทุกหมวดหมู่ให้คุณได้เลือกสรร
              <br />
              <br />
              มาเป็นส่วนหนึ่งของชุมชนรักการอ่านกับเรา เข้ามาเลือกหนังสือเล่มโปรด
              และสัมผัสประสบการณ์พิเศษกับเราได้แล้ววันนี้!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://res.cloudinary.com/jonasdev/image/upload/v1737802826/trysg7bxwmsei28mejbs.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://res.cloudinary.com/jonasdev/image/upload/v1737802826/h3skdxdf2jlgz83nwjw6.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900">
                "I read everything I could about technology and innovation—it
                inspired me to think differently."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="size-8 rounded-full object-contain"
                src="https://variety.com/wp-content/uploads/2018/10/sundar_pichai.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500">
                <div className="pr-3 font-medium text-gray-900">
                  Sundar Pichai
                </div>
                <div className="pl-3 text-sm font-light text-gray-500">
                  CEO of Google and Alphabet
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl my-16">
        <div className="">
          <h1 className="text-2xl mb-4 font-semibold text-blue-600">
            หนังสือขายดีรายสัปดาห์
          </h1>
        </div>
        <Carousel responsive={responsive} showDots={true} className="pb-8">
          {topWeekBooks.map((val, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-md w-[300px] relative border-2"
            >
              <Link to={""}>
                <div className="flex items-center justify-center py-2">
                  <div className="w-full bg-white flex justify-center">
                    <img
                      className="bg-contain h-[200px] my-2"
                      src={val.book_front}
                      alt={val.book_name}
                    />
                  </div>
                </div>
                <div className="flex flex-col px-6 py-2">
                  <h1 className="text-xl mb-2 font-semibold text-black h-[84px]">
                    {val.book_name}
                  </h1>
                  <div className="flex">
                    <p className="text-xl text-white font-semibold bg-red-600 w-max py-1 px-2 rounded-md">
                      🪙 {val.book_price}
                    </p>
                  </div>

                  {val.best_sell === "1" ? (
                    <div className="absolute top-2 right-2 px-2 py-2 flex justify-center items-center rounded-xl bg-red-600">
                      <h1 className="text-white font-semibold">Best Seller!</h1>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </section>

      <section className="mx-auto max-w-screen-xl my-16">
        <div className="">
          <h1 className="text-2xl mb-4 font-semibold text-blue-600">
            หนังสือเทรนขายดี
          </h1>
        </div>
        <Carousel responsive={responsive} showDots={true} className="pb-8">
          {[...topTrendBooks].reverse().map((val, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-md w-[300px] relative border-2"
            >
              <Link to={""}>
                <div className="flex items-center justify-center py-2">
                  <div className="w-full bg-white flex justify-center">
                    <img
                      className="bg-contain h-[200px] my-2"
                      src={val.book_front}
                      alt={val.book_name}
                    />
                  </div>
                </div>
                <div className="flex flex-col px-6 py-2">
                  <h1 className="text-xl mb-2 font-semibold text-black h-[84px]">
                    {val.book_name}
                  </h1>
                  <div className="flex">
                    <p className="text-xl text-white font-semibold bg-red-600 w-max py-1 px-2 rounded-md">
                      🪙 {val.book_price}
                    </p>
                  </div>

                  {val.best_sell === "1" ? (
                    <div className="absolute top-2 right-2 px-2 py-2 flex justify-center items-center rounded-xl bg-red-600">
                      <h1 className="text-white font-semibold">Best Seller!</h1>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  )
}

export default HomePage
