// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {eachAppointment, onClickStar} = props
  const {Title, date, isStarred, id} = eachAppointment
  const Star = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const clickStar = () => {
    onClickStar(id)
  }
  return (
    <li className="listOrder">
      <div className="star-head">
        <h1 className="appName">{Title}</h1>
        <button
          testid="star"
          type="button"
          onClick={clickStar}
          className="star-btn"
        >
          <img src={Star} alt="star" />
        </button>
      </div>
      <p className="appDate">Date: {date}</p>
    </li>
  )
}
export default AppointmentItem
