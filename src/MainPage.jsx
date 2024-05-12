import Direction from "./components/Direction/Direction"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import "./main.css"

const MainPage = () => {
  return (
    <div className="main">
      <Header />
      <Home />
      <Direction />
    </div>
  )
}

export default MainPage
