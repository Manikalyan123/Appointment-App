// Write your code here
import {Component} from 'react'
import './index.css'
import {v4 as uuid} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {appointment: [], Title: '', date: ''}

  onTitleChange = event => {
    this.setState({Title: event.target.value})
  }

  onSubmitClick = () => {
    const {Title, date} = this.state
    const newAppointment = {
      id: uuid(),
      Title,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointment: [...prevState.appointment, newAppointment],
      Title: '',
      date: '',
    }))
  }

  render() {
    const {Title, appointment} = this.state
    return (
      <div className="gradient-Cont">
        <div className="white-cont">
          <div className="add-appointment-cont">
            <h1>Add Appointment</h1>
            <form className="form-cont" onSubmit={this.onSubmitClick}>
              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                className="input"
                value={Title}
                onChange={this.onTitleChange}
                placeholder="Title"
              />
              <br />
              <label htmlFor="date">DATE</label>
              <input id="date" type="date" className="date-input" />
              <br />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <hr />
          <h1>Appointments</h1>
          <ul className="unorder-list">
            {appointment.map(each => (
              <AppointmentItem eachAppointment={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
