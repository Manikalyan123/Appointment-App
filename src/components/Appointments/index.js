// Write your code here
import {Component} from 'react'
import './index.css'
import {format} from 'date-fns'
import {v4 as uuid} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {appointment: [], Title: '', date: '', isStarred: false}

  onTitleChange = event => {
    this.setState({Title: event.target.value})
  }

  onDateChange = event => {
    this.setState({date: event.target.value})
  }

  onSubmitClick = event => {
    event.preventDefault()
    const {Title, date} = this.state
    const newDate = date ? format(new Date(date), 'dd MMMM yyyy, EEEE') : ''
    const newAppointment = {
      id: uuid(),
      Title,
      date: newDate,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointment: [...prevState.appointment, newAppointment],
      Title: '',
      date: '',
    }))
  }

  onClickStar = id => {
    this.setState(prevState => ({
      appointment: prevState.appointment.map(each => {
        if (each.id === id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  onClickStarred = () => {
    this.setState(prevState => ({isStarred: !prevState.isStarred}))
  }

  render() {
    const {Title, isStarred} = this.state
    let {appointment} = this.state

    if (isStarred) {
      console.log('HI')
      appointment = appointment.filter(each => each.isStarred === true)
      console.log(appointment)
    }

    return (
      <div className="gradient-Cont">
        <div className="white-cont">
          <div className="image-form">
            <div className="add-appointment-cont">
              <h1>Add Appointment</h1>
              <form className="form-cont" onSubmit={this.onSubmitClick}>
                <label className="label" htmlFor="title">
                  TITLE
                </label>
                <br />
                <input
                  id="title"
                  className="input"
                  value={Title}
                  onChange={this.onTitleChange}
                  placeholder="Title"
                />
                <br />
                <label className="label" htmlFor="date">
                  DATE
                </label>
                <br />
                <input
                  id="date"
                  type="date"
                  className="input"
                  onChange={this.onDateChange}
                />
                <br />
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="Appointments"
                className="appointment-img"
              />
            </div>
          </div>
          <hr />
          <div className="btn-head-cont">
            <h1>Appointments</h1>
            <button
              type="button"
              className={isStarred ? 'active-starred-btn' : 'starred-btn'}
              onClick={this.onClickStarred}
            >
              Starred
            </button>
          </div>

          <ul className="unorder-list">
            {appointment.map(each => (
              <AppointmentItem
                eachAppointment={each}
                key={each.id}
                onClickStar={this.onClickStar}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
