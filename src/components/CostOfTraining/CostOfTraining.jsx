import { useEffect, useState } from "react"
import api from "/src/api/landingApi.js"
import "./CostOfTraining.css"
const Costs = () => {
  const [costTrainingDescriptions, setCostTrainingDescriptions] = useState([])

  const info = async () => {
    const response = await api.get("/costs_params")
    return response.data
  }
  useEffect(() => {
    const getAllDescriptions = async () => {
      const responseData = await info()
      if (responseData) {
        setCostTrainingDescriptions(responseData)
      }
    }
    getAllDescriptions()
  }, [])

  return (
    <div id="cost" className="cost_section">
      <span className="cost_title">СТОИМОСТЬ НАШИХ ТРЕНИРОВОК</span>
      <div className="cost_description">
        <span>После покупки абонемента его необходимо </span>
        <span style={{ fontWeight: "bold" }}>
          активировать в течении трех месяцев{" "}
        </span>
        с момента приобретения (дата активации - первое занятие).
        <br />
        <br />
        <span style={{ display: "flex" }}>
          Первая тренировка для новых клиентов бесплатная
        </span>
      </div>
      <div
        className="training_phone_flower"
        style={{
          backgroundImage: "url('/src/components/Icons/Phone_Flower_2.svg')",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="cost_count">
        {costTrainingDescriptions.length > 0 && (
          <div className="start_cost_count">
            <span className="cost">{costTrainingDescriptions[0].cost}</span>
            <div className="devider" />
            <div
              style={{
                display: "flex",
                alignItems: "end",
              }}
            >
              <span className="count">{costTrainingDescriptions[0].count}</span>
              <span style={{ width: 70 }} className="text_trainings">
                {costTrainingDescriptions[0].text}
              </span>
            </div>
          </div>
        )}
        {(() => {
          const elements = []
          for (let i = 1; i < costTrainingDescriptions.length; i += 2) {
            const firstElem = costTrainingDescriptions[i]
            const secondElem = costTrainingDescriptions[i + 1]

            elements.push(
              <>
                <div key={i} className="pair">
                  <div className="single_element_cc">
                    <div style={{ display: "flex", alignItems: "end" }}>
                      <span
                        style={i === 7 ? { display: "none" } : null}
                        className="count"
                      >
                        {firstElem.count}
                      </span>
                      <span style={{ width: 70 }} className="text_trainings">
                        {firstElem.text}
                      </span>
                    </div>
                    <span className="cost">{firstElem.cost}</span>
                  </div>
                  <div className="devider" />
                  <div key={i + 1} className="single_element_cc">
                    <div style={{ display: "flex", alignItems: "end" }}>
                      <span style={{ color: "#789776" }} className="count">
                        {secondElem.count}
                      </span>
                      <span
                        style={{ color: "#789776", width: 70 }}
                        className="text_trainings"
                      >
                        {secondElem.text}
                      </span>
                    </div>
                    <span
                      style={{ color: "#789776" }}
                      className={i + 1 === 8 ? "text_trainings" : "cost"}
                    >
                      {secondElem.cost}
                    </span>
                  </div>
                </div>
                {i == 3 && (
                  <div className="button_div">
                    <button>ЗАПИСАТЬСЯ</button>
                  </div>
                )}
              </>
            )
          }
          return elements
        })()}
      </div>
    </div>
  )
}
export default Costs
