import MainIcon from "../icons"
import "./Header.css"

const Header = () => {
  return (
    <>
      <nav>
        <div className="balance_and_svg">
          <MainIcon />
          <span className="balance">BALANCE</span>
        </div>
        <ul className="navbar">
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
      </nav>
    </>
  )
}

export default Header
