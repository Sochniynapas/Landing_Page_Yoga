import "./Home.css"
import image from "../Images/picture_1.png"
import { SignUpButton } from "../Icons/icons"
const Home = () => {
  return (
    <div className="home_view">
      <div className="left_side">
        <span className="title">СТУДИЯ ЙОГИ И ПИЛАТЕСА</span>
        <span className="desc">
          Здесь мы поможем вам держать тело в тонусе, а душу - в гармонии.
        </span>
        <SignUpButton />
      </div>
      <img className="home_big_image" src={image} alt=""></img>
    </div>
  )
}

export default Home
