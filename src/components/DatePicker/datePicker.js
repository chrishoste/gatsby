import './datePicker.scss'
import React, { Component } from 'react'
import { DateRangePicker } from 'react-dates'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import Search from '../../icons/search.svg'

class DatePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focusedInput: false,
      startDate: null,
      endDate: null,
    }
  }

  render() {
    return (
      <div className="airbnb-date-picker">
        <div className="date-picker-wrapper">
          <div className="date-picker">
            <h3>Check-in/check-Out</h3>
            <div className="date-picker-button">
              <DateRangePicker
                numberOfMonths={1}
                displayFormat={'DD.MM.YYYY'}
                startDatePlaceholderText={'Ankunft'}
                endDatePlaceholderText={'Abfahrt'}
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ startDate, endDate })
                } // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              />
              <div className="check-button">
                <button>
                  <span>
                    <Search />
                  </span>
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DatePicker
