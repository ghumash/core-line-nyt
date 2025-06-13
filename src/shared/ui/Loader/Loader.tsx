import './Loader.css'
import spinner from '@/shared/assets/img/spinner.svg'


export const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt=""/>
    </div>
  )
}
