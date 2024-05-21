import Costs from "./components/CostOfTraining/CostOfTraining"
import CustomerReviews from "./components/CustomerReviews/CustomerReviews.jsx"
import Direction from "./components/Direction/Direction"
import FAQ from "./components/FAQ/FAQ.jsx"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Teachers from "./components/Teachers/Teachers"
import Timetable from "./components/TimeTable/Timetable.jsx"
import YouCanFindUs from "./components/YouCanFindUs/YouCanFindUs.jsx"
import "./main.css"

const MainPage = () => {
  return (
    <div className="main">
      <Header />
      <Home />
      <Direction />
      <Costs />
      <Timetable />
      <Teachers />
      <CustomerReviews />
      <FAQ />
      <YouCanFindUs />
    </div>
  )
}

export default MainPage
