import React from 'react'
import Chip from '../components/Chip'


const Order = ({tab}) => (
    <div className="mainContainer">
        <div className="headerContainer">
            <div className="headerOrdersContainer">
                <div>
                <div>
                    <Chip chipText="SENT" />
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
            {(tab && tab.length > 0) ? (
                tab.map(ticket =>
                    (
                        <Ticket date={ticket.sent} />
                    ))
            ) : (

            )}
        </div>
    </div>
);

// I have to connect this to the store