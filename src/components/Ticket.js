import React from 'react'

const Ticket = ({date, time, subject, subEmail, cmType, ord_id}) => (
    <div className="mainContainer">
      <div className="dateTimeContainer">
        <div>{date}</div>
        <div>{time}</div>
      </div>
      <div className="subjectContainer">
        <div>{subject}</div>
        <div>{subEmail}</div>
      </div>
      <div className="communicationContainer">
        <div>{cmType}</div>
      </div>
      <div className="orderIdContainer">
        <div>{ord_id}</div>
      </div>
    </div>
);

export default Ticket;
