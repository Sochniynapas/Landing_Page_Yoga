import { useState } from "react"
import { MainIcon, MenuIcon, PhoneIcon } from "../Icons/icons.jsx"
import "./Header.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleChangeIsOpen = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <nav>
      <div className="balance_and_svg">
        <MainIcon />
        <span className="balance">BALANCE</span>
      </div>
      <ul className={isOpen ? "navbar" : "navbar disable"}>
        <li>
          <a href="" className="page_elements">
            ПРОГРАММЫ
          </a>
        </li>
        <li>
          <a href="" className="page_elements">
            ПРАЙСЫ
          </a>
        </li>
        <li>
          <a href="" className="page_elements">
            РАСПИСАНИЕ
          </a>
        </li>
        <li>
          <a href="" className="page_elements">
            ОТЗЫВЫ
          </a>
        </li>
        <li>
          <a href="" className="page_elements">
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
