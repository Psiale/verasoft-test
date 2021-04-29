import React from 'react';
import CommunicationActivity from '../components/CommunicationActivity';
import styles from './CommunicationActivites.module.scss'

const CommunicationActivites = ({user}) => {
    const {activity, carrier_status} = user
    return (
        <>
            <div className={styles.cmnActivityContainer}>
                90-DAY COMMUNICATION ACTIVITY
                <CommunicationActivity activity={activity.sms} activityText="SMS" />
                <CommunicationActivity activity={activity.email} activityText="EMAIL" />
                <CommunicationActivity activity={activity.orders} activityText="ORDERS" />
            </div>
            <div className={styles.carrierStatusContainer}>
            SMS-CARRIER-STATUS
            <CommunicationActivity activity={carrier_status.status} activityText={carrier_status.since} />
            </div>
        </>
    );
} 

export default CommunicationActivites