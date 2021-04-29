import React from 'react';
import CommunicationActivity from '../components/CommunicationActivity';

const CommunicationActivites = ({user}) => {
    const {activity, carrier_status} = user
    return (
        <>
            <div>
                90-DAY COMMUNICATION ACTIVITY
                <CommunicationActivity activity={activity.sms} activityText="SMS" />
                <CommunicationActivity activity={activity.email} activityText="EMAIL" />
                <CommunicationActivity activity={activity.orders} activityText="ORDERS" />
            </div>
            <div>
            SMS-CARRIER-STATUS
            <CommunicationActivity activity={carrier_status.status} activityText={carrier_status.since} />
            </div>
        </>
    );
} 

export default CommunicationActivites