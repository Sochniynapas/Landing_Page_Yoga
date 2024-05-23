import { useState } from "react"
import "./YouCanFindUs.css"
import "/src/main.css"
import { PhoneTimetable} from "../Icons/icons"
import { AppBtns } from "../RepetitiveComponents/RepComponents"

const YouCanFindUs = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div id="contacts" className="ycfu_section">
      <span className="ycfu_title">НАС МОЖНО НАЙТИ</span>
      <b className="connect_us">Свяжитесь с нами</b>
      <input
        type="text"
        maxLength="40"
        placeholder="Имя"
        className="i_name"
      ></input>
      <input
        type="text"
        maxLength="25"
        placeholder="Номер телефона"
        className="i_phone"
      ></input>
      <input
        type="text"
        maxLength="100"
        placeholder="Ваш вопрос"
        className="i_question"
      ></input>

      <div class="checker">
        <input
          type="checkbox"
          className="checker_input"
          checked={checked ? "checked" : ""}
          onClick={() => setChecked(!checked)}
        ></input>
        <span className="politic">
          Принимаю условия политику конфиденциальности
        </span>
      </div>
      <button className="send">ОТПРАВИТЬ</button>
      <div
        className="map"
        style={{
          backgroundImage:
            "url('/src/components/Images/YouCanFindUsImages/map_1.png')",
        }}
      ></div>
      <div className="connection_variants">
        <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <PhoneTimetable />
          <span>+7 (924) 444-77-77</span>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <div
            style={{
              backgroundImage: "url('/src/components/Icons/map.svg')",
              width: 18,
              height: 18,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <span>г. Томск, Варшавское шоссе 26</span>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <div
            style={{
              backgroundImage: "url('/src/components/Icons/mail.svg')",
              width: 18,
              height: 18,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <span>balans@maiil.ru</span>
        </div>
      </div>
      <div
        className="FUs_flower"
        style={{
          backgroundImage: "url('/src/components/Icons/Flower_FUS.svg')",
        }}
      ></div>
      <AppBtns/>
    </div>
  )
}

export default YouCanFindUs
