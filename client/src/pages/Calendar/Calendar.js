import React, { Component } from 'react';
import API from "../../utils/API";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Selectable from '../../components/Calendar'
// import EditorFormatUnderlined from 'material-ui/SvgIcon';
import "./Calendar.css";


class Calendar extends Component {
  state = {
    events: []
  };

componentDidMount() {
  this.loadEvents();
}

loadEvents = () => {
  API.getEvents(this.props.match.params.userId)
    .then(res => {
      console.log(res)
      this.setState({ events: res.data })
    })
    console.log(this.state.events)
}


render() {

  return (
    <div className="app">
      <div className="jumbotron">
        <div className="container">
          <img className="imgCalendar" src="" alt=""/>   
  
        </div>
      </div>
      <Selectable events={this.state.events}
      history={this.props.history} />
    </div>
  )
}
}

export default Calendar;