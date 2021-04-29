import React from 'react'
import Chip from '../components/Chip'
import { connect } from 'react-redux'
import Ticket from '../components/Ticket';
import { loadOrders } from '../redux/actions/orders';
import setError from '../redux/actions/errors';


const Orders = ({tab, loadOrders, errors, setError}) => {
  const handleOnSent = () => {
    loadOrders();
    setError(false)
  }

  const handleOnError = () => setError(true);
  return (
    <div className="mainContainer">
        <div className="headerContainer">
            <div className="headerOrdersContainer">
                <div>
                <div>
                    <Chip handleOnClick={handleOnSent} chipText="SENT" />
                    <Chip handleOnClick={handleOnError} chipText="ERRORS" />
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
            {(tab && tab.sent !== undefined && !errors ) ? (
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
  setError: error => dispatch(setError(error))
})

export default connect(null, mapDispatchToProps)(Orders);
// I have to connect this to the store