import { useState } from "react"
import { NextBtn, Pose, PrevBtn } from "../Icons/icons"
import "./CustomerReviews.css"
import "/src/components/Direction/Direction.css"
import api from "/src/api/landingApi.js"
import { useEffect } from "react"

const CustomerReviews = () => {
  const [allCustomersReviews, setAllCustomersReviews] = useState([])
  const [currentCustomerReview, setCurrentCustomerReview] = useState(1)

  const getAllCustomersReviews = async () => {
    const response = await api.get("/customer_reviews")
    if (response.data) {
      return response.data
    }
  }

  useEffect(() => {
    const request = async () => {
      const responseData = await getAllCustomersReviews()
      if (responseData) {
        setAllCustomersReviews(responseData)
      }
    }
    request()
  }, [])
  function shiftArrayRight(arr, shift) {
    const len = arr.length
    const normalizedShift = ((shift % len) + len) % len
    const part1 = arr.slice(-normalizedShift)
    const part2 = arr.slice(0, len - normalizedShift)
    setCurrentCustomerReview(Number(part1.concat(part2)[0].id) + 1)
    setAllCustomersReviews(part1.concat(part2))
  }
  function shiftArrayLeft(arr, shift) {
    const len = arr.length
    const normalizedShift = ((shift % len) + len) % len
    const part1 = arr.slice(normalizedShift)
    const part2 = arr.slice(0, normalizedShift)
    setCurrentCustomerReview(Number(part1.concat(part2)[0].id) + 1)
    setAllCustomersReviews(part1.concat(part2))
  }

  const greenLineWidth = `${16.6 + (currentCustomerReview - 1) * 16.6}%`

  return (
    <section className="reviews_section">
      <span className="reviews_title">НАШИ ДОВОЛЬНЫЕ КЛИЕНТЫ</span>
      <div
        className="phone_flower_cr"
        style={{
          backgroundImage: "url('/src/components/Icons/Phone_Flower_CR.svg')",
        }}
      ></div>
      <button className="send_review">ОСТАВИТЬ ОТЗЫВ</button>
      <div className="customer_reviews_area">
        {allCustomersReviews.length > 0 && (
          <div className="all_customer_reviews">
            {(() => {
              const elements = []
              for (let i = 0; i < allCustomersReviews.length; i++) {
                const element = allCustomersReviews[i]
                if (i === 0) {
                  elements.push(
                    <div key={i} className="current_customer">
                      <div className="current_circle">
                        <Pose num={Number(element.id)} />
                      </div>
                      <span className="current_review_name">
                        {element.name}
                      </span>
                      <div className="current_review_divider"></div>
                      <span className="current_review_text">
                        {element.review}
                      </span>
                      <div className="current_review_addition">
                        <p
                          style={{
                            borderBottom: "1px solid #fefbf7",
                            padding: "10px 0px 0px 0px",
                            margin: 0,
                          }}
                          className="current_review_text"
                        >
                          Подробнее
                        </p>
                        <div
                          className="current_flower"
                          style={{
                            backgroundImage:
                              "url('/src/components/Icons/Review_Flower.svg')",
                          }}
                        />
                        <span
                          style={{ padding: "10px 0px 0px 0px" }}
                          className="current_review_text"
                        >
                          {element.date}
                        </span>
                      </div>
                    </div>
                  )
                } else {
                  elements.push(
                    <div key={i} className="customer">
                      <div className="circle">
                        <Pose num={Number(element.id)} />
                      </div>
                      <span className="review_name">{element.name}</span>
                      <div className="review_divider"></div>
                      <span className="review_text">{element.review}</span>
                      <div className="review_addition">
                        <p
                          style={{
                            padding: "20px 0px 0px 0px",
                            margin: 0,
                          }}
                          className="review_text"
                          onClick={() => shiftArrayLeft(allCustomersReviews, i)}
                        >
                          Подробнее
                        </p>
                        <span
                          style={{ padding: "20px 0px 0px 0px" }}
                          className="review_text"
                        >
                          {element.date}
                        </span>
                      </div>
                    </div>
                  )
                }
              }
              return elements
            })()}
          </div>
        )}
        <div className="switch_review">
          <button
            onClick={() => shiftArrayRight(allCustomersReviews, 1)}
            className="next_prev_btn_direction"
          >
            <PrevBtn />
          </button>
          <button
            onClick={() => shiftArrayLeft(allCustomersReviews, 1)}
            className="next_prev_btn_direction"
          >
            <NextBtn />
          </button>
          <div>
            <div className="gray_line_direction"></div>
            <div
              className="green_line_direction"
              style={{ width: greenLineWidth }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CustomerReviews
