import { useState } from "react"
import { MenuIcon, PhoneIcon } from "../Icons/icons.jsx"
import "./Header.css"
import { BalanceSvg } from "../RepetitiveComponents/RepComponents.jsx"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleChangeIsOpen = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <nav>
      <BalanceSvg />
      <ul className={isOpen ? "navbar" : "navbar disable"}>
        <li>
          <a href="#direction" className="page_elements">
            ПРОГРАММЫ
          </a>
        </li>
        <li>
          <a href="#cost" className="page_elements">
            ПРАЙСЫ
          </a>
        </li>
        <li>
          <a href="#time_table" className="page_elements">
            РАСПИСАНИЕ
          </a>
        </li>
        <li>
          <a href="#cust_reviews" className="page_elements">
            ОТЗЫВЫ
          </a>
        </li>
        <li>
          <a href="#contacts" className="page_elements">
            КОНТАКТЫ
          </a>
        </li>
      </ul>
      <div className="phone_and_svg">
        <PhoneIcon />
        <span className="page_elements">+7 (924) 444-77-77</span>
      </div>
      <div className="medium_size" onClick={handleChangeIsOpen}>
        <MenuIcon />
      </div>
    </nav>
  )
}

export default Header
