import './Header.css'
import logo from '@/shared/assets/img/logo.svg'
import burger from '@/shared/assets/img/burger.svg'

interface HeaderProps {
  onMenuClick: () => void
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="header">
      <button onClick={onMenuClick} className="menu-btn">
        <img src={burger} alt=""/>
      </button>
      <img src={logo} alt=""/>
      <div></div>
    </header>
  )
}
