// Write your code here
import {Component} from 'react'
import './index.css'
import AppointmentItem from '../AppointmentItem'

const AppointmentList = []

class Appointments extends Component {
  state = {appointment: AppointmentList, Title: '', Date: ''}

  onTitleChange = event => {
    this.setState({Title: event.target.value})
  }

  render() {
    const {Title, Date} = this.state
    return (
      <div className="gradient-Cont">
        <div className="white-cont">
          <div className="add-appointment-cont">
            <h1>Add Appointment</h1>
            <form className="form-cont">
              <input
                className="input"
                value={Title}
                onChange={this.onTitleChange}
                placeholder="Title"
              />
              <br />

              <input type="date" className="date-input" />
              <br />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <hr />
          <h1>Appointments</h1>
          <ul className="unorder-list">
            <AppointmentItem onClickSubmit={this.onSubmit} />
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
