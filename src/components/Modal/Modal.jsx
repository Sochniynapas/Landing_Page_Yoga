import { useState } from "react"
import "./Modal.css"
import "/src/main.css"

const Modal = ({ active, setActive, nameOfDir }) => {
  const [checked, setChecked] = useState(false)

  return (
    <div
      onClick={() => setActive(false)}
      style={active ? { display: "flex" } : { display: "none" }}
      className="modal"
    >
      <div className="active_modal">
        <h4 className="modal_title">Записаться на тренировку</h4>
        <input
          type="text"
          maxLength="40"
          placeholder={nameOfDir}
          className="modal_name"
          disabled="true"
        ></input>
        <input
          type="text"
          maxLength="25"
          placeholder="Номер телефона"
          className="modal_phone"
        ></input>
        <input
          type="text"
          maxLength="100"
          placeholder="Комментарий"
          className="modal_comment"
        ></input>

        <div class="checker_modal">
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
        <button className="modal_send">ОТПРАВИТЬ</button>
      </div>
    </div>
  )
}

export default Modal
