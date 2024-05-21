import { AppBtns, BalanceSvg } from "../RepetitiveComponents/RepComponents"
import "./Footer.css"

const Footer = () => {
  return (
    <section className="footer_section">
      <div className="footer_contacts">
        <span className="footer_text">
          Адрес: г. Томск, Варшавское шоссе 26
        </span>
        <span className="footer_text">Тел: +7 (924) 444-77-77</span>
        <span className="footer_text">Email: balans@maiil.ru</span>
      </div>
      <div className="nav_list">
        <li>
          <a href="" className="footer_text">
            Главная
          </a>
        </li>
        <li>
          <a href="" className="footer_text">
            Направления
          </a>
        </li>
        <li>
          <a href="" className="footer_text">
            Прайсы
          </a>
        </li>
        <li>
          <a href="" className="footer_text">
            Расписание
          </a>
        </li>
        <li>
          <a href="" className="footer_text">
            Эксперты
          </a>
        </li>
        <li>
          <a href="" className="footer_text">
            Отзывы
          </a>
        </li>
        <li>
          <a href="" className="footer_text">
            FAQ
          </a>
        </li>
        <li>
          <a href="" className="footer_text">
            Контакты
          </a>
        </li>
      </div>
      <div className="app_btns_footer">
        <AppBtns />
      </div>
      <span className="apply_text">
        Согласие на обработку персональных данных
      </span>
      <div className="footer_balance">
        <BalanceSvg />
      </div>
      <span className="policy">Политика конфиденциальности</span>
    </section>
  )
}

export default Footer
