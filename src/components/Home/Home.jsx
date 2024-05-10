import "./Home.css"
import { NextBtn, PrevBtn } from "../Icons/icons"
import { useState } from "react"
const Home = () => {
  const [currentImage, setCurrentImage] = useState(1)

  const nextImage = () => {
    setCurrentImage((prev) => (prev < 3 ? prev + 1 : 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev > 1 ? prev - 1 : 3))
  }

  const greenLineWidth = `${33 + (currentImage - 1) * 33}%`

  return (
    <div className="home_view">
      <span className="title">СТУДИЯ ЙОГИ И ПИЛАТЕСА</span>
      <span className="desc">
        Здесь мы поможем вам держать тело в тонусе, а душу - в гармонии.
      </span>
      <div
        className="f_m_flower"
        style={{
          backgroundImage: "url('/src/components/Icons/FirstMainFlower.svg')",
          backgroundSize: "cover",
        }}
      />
      <div className="sign_up_btn">
        <div
          className="sign_up_btn"
          style={{
            backgroundImage: "url('/src/components/Icons/button.svg')",
            backgroundSize: "cover",
          }}
        />
        <div
          className="under_flower"
          style={{
            backgroundImage: "url('/src/components/Icons/UnderFlower.svg')",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      <div className="short_description">
        <div className="num_with_text">
          <span className="num">6</span>
          <span className="text">направлений в одном абонементе</span>
        </div>
        <div className="num_with_text">
          <span className="num">4</span>
          <span className="text">тренера с большим практическим опытом</span>
        </div>
        <div className="num_with_text">
          <span className="num">2</span>
          <span className="text">просторных зала для занятий</span>
        </div>
      </div>
      <img
        className="picture_medit"
        src="/src/components/Images/HomeImages/picture_medit.png"
        alt=""
      ></img>

      <div
        className="home_big_image"
        style={{
          backgroundImage: `url(${`/src/components/Images/HomeImages/picture_${currentImage}.png`})`,
        }}
      ></div>

      <div className="switch_un_the_pict">
        <span className="current_num">{currentImage}</span>
        <span className="len">/3</span>
        <div>
          <div className="gray_line"></div>
          <div className="green_line" style={{ width: greenLineWidth }}></div>
        </div>
        <button className="next_prev_btn" onClick={prevImage}>
          <PrevBtn />
        </button>
        <button className="next_prev_btn" onClick={nextImage}>
          <NextBtn />
        </button>
      </div>
    </div>
  )
}

export default Home
