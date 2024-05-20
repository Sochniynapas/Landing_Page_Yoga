import { useState } from "react"
import { Minus, Plus } from "../Icons/icons"
import "./FAQ.css"

const FAQ = () => {
  const [containerState, setContainerState] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  })
  const arrayOfFAQ = [
    {
      question: "Как записаться на занятия йогой?",
      answer:
        "Вы можете записаться на занятия через наш сайт или по телефону. Так же вы можете прийти в наш центр и записаться на ресепшене",
    },
    {
      question: "Нужно ли покупать коврик для занятий и другой инвентарь?",
      answer:
        "Нет, ничего покупать не нужно. Весь необходимый инвентарь: коврики, кубики, подушки для растяжки, ремни и т.д. - все это есть в студии. Вам нужно только прийти самим и не забыть взять с собой хорошее настроение",
    },
    {
      question: "Что нужно брать на пробное занятие?",
      answer:
        "Нет, ничего покупать не нужно. Весь необходимый инвентарь: коврики, кубики, подушки для растяжки, ремни и т.д. - все это есть в студии. Вам нужно только прийти самим и не забыть взять с собой хорошее настроение",
    },
    {
      question: "Смогу ли заниматься с моей комплекцией?",
      answer:
        "Нет, ничего покупать не нужно. Весь необходимый инвентарь: коврики, кубики, подушки для растяжки, ремни и т.д. - все это есть в студии. Вам нужно только прийти самим и не забыть взять с собой хорошее настроение",
    },
    {
      question: "Для моего возраста подойдут занятия?",
      answer:
        "Вы можете записаться на занятия через наш сайт или по телефону. Так же вы можете прийти в наш центр и записаться на ресепшене",
    },
  ]

  const handleChangeState = (num) => {
    setContainerState((prevState) => ({
      ...prevState,
      [num]: !prevState[num],
    }))
  }
  return (
    <div className="FAQ_section">
      <span className="FAQ_title">Всегда на связи с клиентом </span>
      <div className="FAQ_Flower_container">
        <div className="FAQ_Flower" style={{backgroundImage: "url('/src/components/Icons/FAQ_Flower.svg')"}}></div>
      </div>
      <div className="qu_an_image">
        <div className="questions_answers">
          {arrayOfFAQ.map((elem, index) =>
            containerState[index + 1] === false ? (
              <div
                className="single_qu_an_closed"
                style={
                  index + 1 === arrayOfFAQ.length
                    ? { borderBottom: "1px solid #98958b" }
                    : null
                }
              >
                <button
                  className="plus_button"
                  onClick={() => handleChangeState(index + 1)}
                >
                  <Plus />
                </button>
                <span>{elem.question}</span>
              </div>
            ) : (
              <div
                className="single_qu_an_opened"
                style={
                  index + 1 === arrayOfFAQ.length
                    ? { borderBottom: "1px solid #98958b" }
                    : null
                }
              >
                <div className="question_button_div">
                  <button
                    className="minus_button"
                    onClick={() => handleChangeState(index + 1)}
                  >
                    <Minus />
                  </button>
                  <p>{elem.question}</p>
                </div>
                <span>{elem.answer}</span>
              </div>
            )
          )}
        </div>
        <div
          className="FAQ_image"
          style={{
            backgroundImage:
              "url('/src/components/Images/FAQImages/FAQ_image.png')",
          }}
        ></div>
      </div>
    </div>
  )
}

export default FAQ
