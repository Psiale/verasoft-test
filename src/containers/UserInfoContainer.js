import React from 'react'
import UserInfo from '../components/UserInfo';
import CommunicationActivites from './CommunicationActivities';
import styles from './UserInfoContainer.module.scss'
//User Info component
// CommunicationActivities

const UserInfoContainer = ({user}) => (
    <div className={styles.mainContainer}>
    <div className={styles.UserInfoContainer}>
        <UserInfo user={user} />
    </div>
    <div className={styles.CommunicationActivites}>
        <CommunicationActivites user={user} />
    </div>
    </div>
);

export default UserInfoContainer;
