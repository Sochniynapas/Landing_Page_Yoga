import { useEffect, useRef, useState } from "react"
import "../Direction/Direction.css"
import api from "/src/api/landingApi.js"
import { NextBtn, PrevBtn } from "../Icons/icons"
const Direction = () => {
  const [allDirections, setAllDirections] = useState([])
  const [currentImage, setCurrentImage] = useState(1)
  const buttonsSectionRef = useRef(null)

  const nextImage = () => {
    setCurrentImage((prev) => (prev < 6 ? prev + 1 : 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev > 1 ? prev - 1 : 6))
  }

  const greenLineWidth = `${16.6 + (currentImage - 1) * 16.6}%`

  const directions = async () => {
    const response = await api.get("/directions")
    return response.data
  }

  useEffect(() => {
    const getDirections = async () => {
      const responseData = await directions()
      if (responseData) {
        setAllDirections(responseData)
      }
    }
    getDirections()
  }, [])

  useEffect(() => {
    if (buttonsSectionRef.current) {
      const button = buttonsSectionRef.current.children[currentImage - 1]
      if (button) {
        button.scrollIntoView({ behavior: "smooth", block: "nearest" })
      }
    }
  }, [currentImage, buttonsSectionRef])

  return (
    <div id="direction" className="direction">
      <span className="title_direct">ВСЕ НАПРАВЛЕНИЯ В ОДНОМ АБОНЕМЕНТЕ</span>
      <span className="desc_direct">
        Не определились с направлением?
        <br /> Мы подскажем!
      </span>
      <div className="direct_flower" style={{backgroundImage: "url('/src/components/Icons/Flower_For_Direction.svg')"}}/>
      <div
        className="direction_image"
        style={{
          backgroundImage: `url(${`/src/components/Images/DirectionImages/picture_direction_${currentImage}.png`})`,
        }}
      />
      <div className="buttons_section" ref={buttonsSectionRef}>
        {allDirections.map((direction, index) => (
          <button
            key={index}
            style={{
              backgroundColor:
                index + 1 === currentImage ? "#789776" : "#fefbf7",
              color: index + 1 === currentImage ? "#fefbf7" : "#5b6158",
            }}
            onClick={() => setCurrentImage(index + 1)}
          >
            {direction.title}
          </button>
        ))}
      </div>
      <div className="direction_item">
        {allDirections.length !== 0 && (
          <>
            <div className="top_content">
              <p className="title_section">
                {allDirections[currentImage - 1].title}
              </p>
              <div className="calend_time_container">
                <div className="calend_time_section">
                  <div
                    style={{
                      backgroundImage:
                        "url('/src/components/Icons/calendar.svg')",
                      backgroundSize: "cover",
                    }}
                  />
                  <span>
                    Проходит по: {allDirections[currentImage - 1].days}
                  </span>
                </div>
                <div className="calend_time_section">
                  <div
                    style={{
                      backgroundImage: "url('/src/components/Icons/timer.svg')",
                      backgroundSize: "cover",
                    }}
                  />
                  <span>
                    Длительность: {allDirections[currentImage - 1].time}
                  </span>
                </div>
              </div>
            </div>
            <div>
              {allDirections[currentImage - 1].text
                .split("\n")
                .map((section, idx) => (
                  <p key={idx} className="main_text">
                    {section}
                  </p>
                ))}
            </div>
          </>
        )}
      </div>
      <div className="switch_direction">
        <button className="next_prev_btn_direction" onClick={prevImage}>
          <PrevBtn />
        </button>
        <button className="next_prev_btn_direction" onClick={nextImage}>
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
  )
}

export default Direction
