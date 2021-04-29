import React from 'react'
import Chip from '../components/Chip'
import { connect } from 'react-redux'
import Ticket from '../components/Ticket';
import { loadOrders } from '../redux/actions/orders';


const Orders = ({tab, loadOrders}) => {
  const handleOnClick = () => {
    console.log('hello from orders')
    loadOrders();
  }
  console.log(typeof tab)
  return (
    <div className="mainContainer">
        <div className="headerContainer">
            <div className="headerOrdersContainer">
                <div>
                <div>
                    <Chip handleOnClick={handleOnClick} chipText="SENT" />
                    <Chip chipText="ERRORS" />
                </div>
                <div>
                    RECENT ORDERS
                </div>
                </div>            
            </div>
            <div className="ordersInfoContainer">
                <div>DATE & TIME</div>
                <div>SUBJECT</div>
                <div>COMMUNICATION TYPE</div>
                <div>ORDER #</div>
            </div>
        </div>
        <div className="ticketsContainer">
            {(tab && tab.sent !== undefined) ? (
                tab.sent.map(ticket =>
                    (
                        <Ticket
                          date={ticket.sent_dt}
                          time={ticket.sent_tm}
                          subject={ticket.subject.title}
                          subEmail={ticket.email}
                          cmType={ticket.type}
                          ord_id={ticket.order_id}
                        />
                    ))
            ) : (
              <p>NO ITEMS</p>
            )}
        </div>
    </div>
);
}

const mapDispatchToProps = dispatch => ({
  loadOrders: () => dispatch(loadOrders()),
})

export default connect(null, mapDispatchToProps)(Orders);
// I have to connect this to the store