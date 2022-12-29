// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {eachAppointment} = props
  const {title, date, isStarred} = eachAppointment
  const Star = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list-order">
      <h1 className="appName">{title}</h1>
      <p className="appDate">{date}</p>
      <img src={Star} alt="star" />
    </li>
  )
}
export default AppointmentItem
