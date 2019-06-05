import React, {Component} from 'react';
import {Row, Col, Divider, Layout} from 'antd';
import { Link, Redirect } from "react-router-dom";
import UserContext from '../../utils/UserContext';
import API from "../../utils/API";
import "./Calendar.css";
import Selectable from "../../components/Calendar";

const {
    Header, Footer, Sider, Content,
} = Layout;


class Calendar extends Component {
  static contextType = UserContext;

    constructor(props) {
        super(props);

        this.state = {
            timeSlots: [],
        };
    }

    loadEvents = () => {
      const { user } = this.context;
  
      if (user) {
        API.getEvents(user.token)
          .then(res =>
            this.setState({ events: res.data })
          )
          .catch(err => console.log(err));
      }
    };
  


    handleTimeSlots = (value) => {
        this.setState({timeSlots: value});
    };

    render() {
      const { user } = this.context;
      return user 
        ? (
                <>
                    <div>
                        <Row type="flex" className="calendar-header">
                            <Col span={4} offset={20} className="header-text">Open House Calendar</Col>
                        </Row>

                        <Row>
                            <Col span={20} offset={2}   >
                                <Selectable />
                            </Col>
                        </Row>
                    </div>
                </>
                 )
                 : <Redirect to="/login"/>
             
    };
}

export default Calendar;