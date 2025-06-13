import './Sidebar.css'
import closeImg from '@/shared/assets/img/close.svg'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export const Sidebar = ({ open, onClose }: SidebarProps) => {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <div className="sidebar-backdrop" onClick={onClose} />
      <div className="sidebar-content">
        <button className="close-btn" onClick={onClose}>
          <img src={closeImg} alt="" />
        </button>
        <ul>
          <li>Science</li>
          <li>General</li>
          <li>Entertainment</li>
          <li>Technology</li>
          <li>Business</li>
          <li>Health</li>
          <li>Sports</li>
        </ul>
      </div>
    </aside>
  )
}
