import { MainIcon, TG, VK, WhatsApp } from "../Icons/icons"
import "./RepComponents.css"

const AppBtns = () => {
  return (
    <div className="app_btns">
      <button>
        <VK />
      </button>
      <button>
        <WhatsApp />
      </button>
      <button>
        <TG />
      </button>
    </div>
  )
}
const BalanceSvg = () => {
  return (
    <div className="balance_and_svg">
      <MainIcon />
      <span className="balance">BALANCE</span>
    </div>
  )
}
export { AppBtns, BalanceSvg }
