import { TG, VK, WhatsApp } from "../Icons/icons"
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
export { AppBtns }
