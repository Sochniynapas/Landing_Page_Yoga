import { useState } from "react"
import api from "/src/api/landingApi.js"
import "./Teachers.css"
import { useEffect } from "react"
import "../Direction/Direction.css"
import { NextBtn, PrevBtn } from "../Icons/icons"
const Teachers = () => {
  const [teachersInfo, setTeachersInfo] = useState([])
  const [currentTeacher, setCurrentTeacher] = useState(1)

  function shiftArrayRight(arr, shift) {
    const len = arr.length
    const normalizedShift = ((shift % len) + len) % len
    const part1 = arr.slice(-normalizedShift)
    const part2 = arr.slice(0, len - normalizedShift)
    setCurrentTeacher(Number(part1.concat(part2)[0].id) + 1)
    setTeachersInfo(part1.concat(part2))
  }
  function shiftArrayLeft(arr, shift) {
    const len = arr.length
    const normalizedShift = ((shift % len) + len) % len
    const part1 = arr.slice(normalizedShift)
    const part2 = arr.slice(0, normalizedShift)
    setCurrentTeacher(Number(part1.concat(part2)[0].id) + 1)
    setTeachersInfo(part1.concat(part2))
  }

  const greenLineWidth = `${25 + (currentTeacher - 1) * 25}%`

  const getTeachersInfo = async () => {
    const response = await api.get("/teachers")
    if (response.data) {
      return response.data
    }
  }
  useEffect(() => {
    const teachersInfoFunc = async () => {
      const responseData = await getTeachersInfo()
      if (responseData) {
        setTeachersInfo(responseData)
      }
    }
    teachersInfoFunc()
  }, [])

  return (
    <div className="teachers_section">
      <span className="teachers_title">ЭКСПЕРТЫ В ОБЛАСТИ ТЕЛА И РАЗУМА</span>
      <span className="teachers_description">
        Наши инструктора сочетают свои знания и опыт, чтобы создать эффективные
        и интересные занятия, которые помогут вам укрепить мышечный корсет,
        достичь гибкости, улучшить осанку и физическую форму.{" "}
      </span>
      <div className="teachers_about">
        <div className="current_teacher">
          {teachersInfo.length > 0 && (
            <div
              style={{
                backgroundImage: `url('/src/components/Images/TeachersImages/teacher_${
                  Number(teachersInfo[0].id) + 1
                }.jpg')`,
              }}
              className="cur_teacher_image"
            ></div>
          )}
          {teachersInfo.length > 0 && (
            <div className="cur_teacher_about">
              <span
                className="cur_teacher_name"
                style={{lineHeight: "26px", fontSize:"20px", opacity:"100", padding: "50px 20px 30px 20px" }}
              >
                {teachersInfo[0].name}
              </span>
              <span className="cur_teacher_ab_text">
                {teachersInfo[0].text}
              </span>
            </div>
          )}
        </div>
        <div className="next_teachers">
          {teachersInfo.length > 0 && (
            <div className="next_tchs_img_obj">
              {(() => {
                const elements = []
                for (let i = 0; i < teachersInfo.length; i++) {
                  const element = teachersInfo[i]
                  if (teachersInfo[i].id + 1 != currentTeacher) {
                    elements.push(
                      <div key={i} className="teach_img">
                        <div
                          className="next_teach_image"
                          onClick={() => shiftArrayLeft(teachersInfo, i)}
                          style={{
                            backgroundImage: `url('/src/components/Images/TeachersImages/teacher_${
                              Number(element.id) + 1
                            }.jpg')`,
                          }}
                        ></div>
                        <span
                          className="cur_teacher_name"
                        >
                          {element.name}
                        </span>
                      </div>
                    )
                  }
                }
                return elements
              })()}
            </div>
          )}
        </div>
        <div className="switch_tch">
          <button
            onClick={() => shiftArrayRight(teachersInfo, 1)}
            className="next_prev_btn_direction"
          >
            <PrevBtn />
          </button>
          <button
            onClick={() => shiftArrayLeft(teachersInfo, 1)}
            className="next_prev_btn_direction"
          >
            <NextBtn />
          </button>
          <div>
            <div className="gray_line_direction"></div>
            <div
              className="green_line_direction"
              style={{ width: greenLineWidth }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Teachers
