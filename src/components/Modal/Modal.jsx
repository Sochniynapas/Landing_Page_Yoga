import { useState } from "react"
import "./Modal.css"
import "/src/main.css"
import { useForm } from "react-hook-form"
import { CloseIcon } from "../Icons/icons"

const Modal = ({ active, setActive, nameOfDir }) => {
  const [checked, setChecked] = useState(false)
  const [isSignUp, setIsSignUp] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    console.log("ура!")
    reset()
    setChecked(false)
    setIsSignUp(false)
  }

  return (
    <div
      onClick={() => {
        setActive(false)
        setIsSignUp(true)
      }}
      style={active ? { display: "flex" } : { display: "none" }}
      className="modal"
    >
      {isSignUp ? (
        <form
          className="active_modal"
          onClick={(e) => {
            e.stopPropagation()
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="close_icon" onClick={()=>setActive(false)}>
            <CloseIcon />
          </div>
          <h4 className="modal_title">
            Записаться
            <br /> на тренировку
          </h4>
          <input
            type="text"
            maxLength="40"
            placeholder={nameOfDir}
            className="modal_name"
            disabled={true}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              {...register("modal_phone", {
                required: "Номер телефона обязателен",
                pattern: {
                  value: /^8\d{3}\d{3}\d{2}\d{2}$/,
                  message: "Неверный формат номера телефона",
                },
              })}
              type="text"
              placeholder="Номер телефона"
              className="modal_phone"
            />
            {errors.modal_phone && (
              <span className="error_phone">{errors.modal_phone.message}</span>
            )}
          </div>
          <input
            type="text"
            maxLength="100"
            placeholder="Комментарий"
            className="modal_comment"
          />

          <div className="checker_modal">
            <input
              type="checkbox"
              className="checker_input"
              {...register("acceptTerms", {
                required: "Вы должны принять политику конфиденциальности",
              })}
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span className="politic">
              Принимаю условия политику конфиденциальности
            </span>
          </div>
          {errors.acceptTerms && (
            <span className="error_accept">{errors.acceptTerms.message}</span>
          )}
          <button type="submit" className="modal_send">
            ОТПРАВИТЬ
          </button>
        </form>
      ) : (
        <form className="accepted_modal">
          <div className="close_icon" onClick={()=>setActive(false)}>
            <CloseIcon />
          </div>
          <h4
            style={{ textAlign: "center", alignSelf: "center", width: 245, fontSize: 20 }}
            className="modal_title"
          >
            СПАСИБО!
            <br />
            ВАША ЗАЯВКА ПРИНЯТА
          </h4>
          <span className="modal_descrip_text">
            наш менеджер свяжется с вами в ближайшее время
          </span>
        </form>
      )}
    </div>
  )
}

export default Modal
