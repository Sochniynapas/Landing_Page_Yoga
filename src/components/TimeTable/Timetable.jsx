import { useEffect, useState } from "react"
import "./Timetable.css"
import api from "/src/api/landingApi.js"
import dayAdapter from "./TimeTable"
import { Pen, PhoneTimetable } from "../Icons/icons"
const Timetable = () => {
  const [timetableParams, setTimetableParams] = useState([])
  const [currentDay, setCurrentDay] = useState(1)
  const info = async () => {
    const response = await api.get("/timetable_params")
    return response.data
  }

  useEffect(() => {
    const getTtParams = async () => {
      const responseData = await info()
      if (responseData) {
        setTimetableParams(responseData)
      }
    }
    getTtParams()
  }, [])

  return (
    <div className="timetable_section">
      <span className="timetable_title">
        НАЙДИТЕ СВОЮ ПРАКТИКУ В НАШЕМ РАСПИСАНИИ
      </span>
      <span className="timetable_description">
        Приглашаем на первое пробное занятие{" "}
        <span style={{ fontWeight: "bold" }}>БЕСПЛАТНО!</span>
        <br />
        Не упустите возможность попробовать что‑то новое и полезное для вашего
        здоровья!
      </span>
      <div
        className="first_tt_flower"
        style={{
          backgroundImage: "url('/src/components/Icons/Tt_Flower_1.svg')",
        }}
      ></div>
      <div
        className="second_tt_flower"
        style={{
          backgroundImage: "url('/src/components/Icons/Tt_Flower_2.svg')",
          backgroundSize: "cover",
        }}
      ></div>
      {timetableParams.length > 0 && (
        <div className="days_params_section">
          <div className="days_section">
            {timetableParams.map((elem, index) => (
              <span
                onClick={() => setCurrentDay(index + 1)}
                className="days_section_text"
                key={index}
                style={
                  index + 1 === currentDay
                    ? {
                        color: "#789776",
                        opacity: 100,
                        position: "relative",
                        bottom: 5,
                        paddingBottom: 15,
                        borderBottom: "2px solid #789776",
                      }
                    : null
                }
              >
                {dayAdapter(index + 1)}
              </span>
            ))}
          </div>
          <div className="params_section">
            {timetableParams[currentDay - 1][currentDay].map((elem, index) => (
              <div key={index} className="single_param">
                <span className="single_param_text">{elem.name}</span>
                <span className="single_param_text">{elem.time}</span>
                <span className="single_param_text">{elem.duration}</span>
                <span className="single_param_text">{elem.teacher}</span>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    className="phone_pen_icons"
                    style={{
                      backgroundSize: "cover",
                    }}
                  >
                    <Pen />
                  </div>
                  <div
                    className="phone_pen_icons"
                    style={{
                      backgroundSize: "cover",
                      marginLeft: 20,
                    }}
                  >
                    <PhoneTimetable />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div
        className="timetable_image"
        style={{
          backgroundImage:
            "url('/src/components/Images/TimeTableImages/picture.png')",
        }}
      ></div>
    </div>
  )
}
export default Timetable
